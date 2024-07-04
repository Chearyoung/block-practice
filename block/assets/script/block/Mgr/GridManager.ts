import { _decorator, Component, game, instantiate, Intersection2D, Node, Prefab, Rect, UITransform, v2, Vec2, Vec3 } from 'cc';
import { GridData, GridObj } from '../../Data/GridData';
import { WeaponItem } from '../../Weapon/WeaponItem';
import { GridItem } from "../Grid/GridItem";
import { WeaponData, WeaponModel } from '../../Data/WeaponData';
import { GridBgItem } from '../Grid/GridBgItem';
import { EventConstant } from '../../EventConstant';
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends Component {
    @property(Node)
    private allGridList: Node = null!;  //所有格子列表
    @property(Node)
    private gridList: Node = null!;
    @property(Prefab)
    private gridPrefab: Prefab = null!;
    @property(Prefab)
    private gridBgPrefab: Prefab = null!; //所有格子背景预制体

    public init() {
        GridData.instance.init();
        this.initGridList();
        this.initAllGridList();
    }

    /* 初始所有的背景格子 */
    private initAllGridList() {
        let gridData: string[][] = GridData.instance.bagCfg.max_grid;
        for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];
            for (let j = 0; j < element.length; j++) {
                const item: string = element[j];
                let gridBgItem: Node = instantiate(this.gridBgPrefab);
                gridBgItem.parent = this.allGridList;
                gridBgItem.getComponent(GridBgItem)!.init(i, j, item);
            }
        }
    }

    private initGridList() {
        this.gridList.removeAllChildren();
        let gridData: string[][] = GridData.instance.getGridMapData();
        for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];
            for (let j = 0; j < element.length; j++) {
                const item: string = element[j];
                let gridItem: Node = instantiate(this.gridPrefab);
                gridItem.parent = this.gridList;
                gridItem.getComponent(GridItem)!.init(i, j, item);
            }
        }
    }

    /* 初始化格子状态 */
    private initGridStatus() {
        let items: Node[] = this.gridList.children;
        for (let j = 0; j < items.length; j++) {
            const element: Node = items[j];
            element.getComponent(GridItem)!.setDeafult();
        }
    }

    /**
     * 检测位置状态(检测坐标)
     * @param posArr 
     * @param wid 武器id
     */
    private cherGridStatus(posArr: Array<Vec3>, weaponItem: WeaponItem) {
        let wid: number = weaponItem.weaponCfg.tempId;
        let gridIndexArr: Array<number> = [];
        let items: Node[] = this.gridList.children;
        let gridMapData: string[][] = GridData.instance.getGridMapData();
        for (let n = 0; n < posArr.length; n++) {
            const checkPos: Vec3 = posArr[n];
            let index: number = -1;
            for (let m = 0; m < items.length; m++) {
                const element: Node = items[m];
                let gridObj: GridObj = element.getComponent(GridItem)!.gridObj;
                let gridValue: string = element.getComponent(GridItem)!.gridValue;
                let pos: Vec3 = GridData.instance.getGridPosByTiled(gridObj);
                let width: number = GridData.instance.gridWidth;
                let height: number = GridData.instance.gridHeight;
                let rect: Rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);
                if (rect.contains(v2(checkPos.x, checkPos.y)) && gridValue) {
                    index = m;
                    break;
                }
            }
            gridIndexArr.push(index);
        }
        GridData.instance.curWeaponTildeIndex = gridIndexArr;
        let placeWeaponKeyArr: string[] = [];//被占用可抖动的武器key(多个)
        if (gridIndexArr.includes(-1)) {
            //超出区域(占用和未占用)
            for (let j = 0; j < items.length; j++) {
                const element: Node = items[j];
                if (gridIndexArr.includes(j)) {
                    let gridObj: GridObj = GridData.instance.getGridTiledByIndex(j);
                    //是否占用
                    if (gridMapData[gridObj.row][gridObj.col]) {
                        element.getComponent(GridItem)!.setRed();
                        //被占用的武器抖动状态
                        let weaponKey: string = gridMapData[gridObj.row][gridObj.col];
                        if (!placeWeaponKeyArr.includes(weaponKey)) {
                            placeWeaponKeyArr.push(weaponKey);
                        }
                    }
                    else {
                        element.getComponent(GridItem)!.setYellow();
                    }
                }
                else {
                    element.getComponent(GridItem)!.setDeafult();
                }
            }
        }
        else {
            //未超出区域
            let sanmeCount: number = 0;//相同wid 数量
            let weaponKey: string = '';
            for (let j = 0; j < items.length; j++) {
                const element: Node = items[j];
                if (gridIndexArr.includes(j)) {
                    element.getComponent(GridItem)!.setGreen();
                    //抖动和合成状态
                    let gridObj: GridObj = GridData.instance.getGridTiledByIndex(j);
                    weaponKey = gridMapData[gridObj.row][gridObj.col];
                    //检测武器id是否相同
                    if (GridData.instance.checkSameWeapoIdByKey(weaponKey, wid)) {
                        sanmeCount++;
                    }
                    //添加到抖动列表
                    if (!placeWeaponKeyArr.includes(weaponKey)) {
                        placeWeaponKeyArr.push(weaponKey);
                    }
                }
                else {
                    element.getComponent(GridItem)!.setDeafult();
                }

            }
            //是否达到合成成状态
            if (sanmeCount == gridIndexArr.length) {
                //可以合成(是否合成达到最大等级)
                let level: number = weaponItem.weaponCfg.Level;
                let group: number = weaponItem.weaponCfg.weaponGroupNum;
                if (WeaponData.instance.checkWeaponByLevel(level + 1, group)) {
                    placeWeaponKeyArr = [];
                    weaponItem.setIconYellow();
                    game.emit(EventConstant.WEAPON_ICON_STATUS, weaponKey, true);
                }
            }
        }
        //设置抖动
        for (let index = 0; index < placeWeaponKeyArr.length; index++) {
            const element: string = placeWeaponKeyArr[index];
            game.emit(EventConstant.WEAPON_SHAKE, element);
        }
    }

    /* 武器移动 */
    private onWeaponMove(weaponItem?: WeaponItem) {
        let weaponKey: string = weaponItem!.weaponKey;
        let weaponCfg: WeaponModel = weaponItem!.weaponCfg;
        let Type: string = weaponCfg.Type;
        let typeArr: string[] = Type.split('_');
        let row: number = Number(typeArr[0]);
        let col: number = Number(typeArr[1]);
        let pointPosArr: Array<Vec3> = [];
        let points: number[][] = weaponCfg.Points;
        GridData.instance.deletGridDataByWeaponId(weaponKey);
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (points[i][j]) {
                    //如果位置点存在
                    let gripObj: GridObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    let tieldPos: Vec3 = GridData.instance.getGridPosByTiled(gripObj);
                    let wpos: Vec3 = weaponItem!.point.getComponent(UITransform)!.convertToWorldSpaceAR(tieldPos);
                    let pos: Vec3 = weaponItem!.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(wpos);
                    pointPosArr.push(pos);
                }
            }
        }
        //初始状态
        game.emit(EventConstant.WEAPON_ICON_STATUS_INIT);
        this.cherGridStatus(pointPosArr, weaponItem!);
    }

    protected onEnable(): void {
        game.on(EventConstant.WEAPON_MOVE, this.onWeaponMove, this);
        game.on(EventConstant.WEAPON_PlACE, this.initGridStatus, this);
        game.on(EventConstant.INIT_BUILD_GRID_LIST, this.initGridList, this);
    }

    protected onDisable(): void {
        game.off(EventConstant.WEAPON_MOVE, this.onWeaponMove, this);
        game.off(EventConstant.WEAPON_PlACE, this.initGridStatus, this);
        game.off(EventConstant.INIT_BUILD_GRID_LIST, this.initGridList, this);
    }

    public clear() {
        GridData.instance.clear();
    }
}

