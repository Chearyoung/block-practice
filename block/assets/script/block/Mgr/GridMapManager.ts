import { _decorator, Component, Node, UITransform, Layout, Sprite, Vec3, Size, v3, SpriteFrame, UIOpacity, Vec2, v2, Rect, tween, game, instantiate, resources } from 'cc';
import { Constants } from '../../Constants';
import { BagModel, GridData, GridObj } from '../../Data/GridData';
import { GridBgItem } from '../Grid/GridBgItem';
import { WeaponBgItem } from '../../Weapon/WeaponBgItem';
import { WeaponItem } from '../../Weapon/WeaponItem';
// import { oops } from '../../../../../script-oops/core/Oops';
import { BlockUtil } from '../../Util';
import { EventConstant } from '../../EventConstant';
import { WeaponModel } from '../../Data/WeaponData';
const { ccclass, property } = _decorator;


@ccclass('GridMapManager')
export class GridMapManager extends Component {
    @property(Node)
    private bgs: Array<Node> = [];
    @property(Node)
    private bg: Node = null!;
    @property(Node)
    private gridList: Node = null!;  //拥有格子
    @property(Node)
    private allGridList: Node = null!;  //所有格子列表
    @property(Node)
    private weaponList: Node = null!;
    @property(Node)
    private removeWeaponList: Node = null!;
    @property(Node)
    private preWeaponList: Node = null!;
    @property(Node)
    private preBg: Node = null!;

    private _gridRes: Array<string> = ['bag1', 'bag1', 'bag3', 'bag5', 'bag5', 'bag6', 'bag6', 'bag7', 'bag7', 'bag8', 'bag8', 'bag9', 'bag']; //背包背景图
    private _padding: number = 90;//周围内边距距离

    private startPoint: GridObj = null!; //拥有格子gridList 
    private _isTouch: boolean = false;//是否被点击
    private _offfSet: Vec3 = new Vec3(0, 0, 0);//移动偏移 
    private _startPos: Vec3 = new Vec3(0, 0, 0);//weaponList初始位置
    private _placeStatus: boolean = false; //是否正确放置了
    private _temPos: Vec3 = new Vec3(0, 0, 0);
    private _temPoint: GridObj = null!;
    private _temAddPoint: GridObj = null!; //新增格子
    private _mainAreaKey: string = '1';//原区域key 

    private _addPlaceAreaData: Map<string, GridBgObj> = new Map();//新增放置区域数据  key=>placeAreaKey

    public init() {
        this.initGridRes();
        this.initStatPoint();
    }

    /* 初始拥有格子在背景格子中的位置 */
    private initStatPoint() {
        let max_gridLenArr: string[] = GridData.instance.bagCfg.max_gridLen.split('_');
        let private_gridLenArr: string[] = GridData.instance.bagCfg.private_gridLen.split('_');
        let startRow: number = Math.floor((Number(max_gridLenArr[0]) - Number(private_gridLenArr[0])) / 2);
        let startCol: number = Math.floor((Number(max_gridLenArr[1]) - Number(private_gridLenArr[1])) / 2);
        let gridObj: GridObj = new GridObj();
        gridObj.row = startRow;
        gridObj.col = startCol;
        this.startPoint = gridObj;
    }

    /* 所有格子适配 */
    private initAllGridRes() {
        let space: number = GridData.instance.space;
        let size: Size = GridData.instance.getMaxGridMapSize();
        let gridWidth: number = GridData.instance.gridWidth;
        this.allGridList.getComponent(UITransform)!.setContentSize(size);
        this.allGridList.getComponent(Layout)!.spacingX = space;
        this.allGridList.getComponent(Layout)!.spacingY = space;
        this.bg.getComponent(UITransform)!.setContentSize(size.width + this._padding, size.height + this._padding);
        this.bg.getComponent(Layout)!.paddingTop = this._padding / 2;
        this.bg.getComponent(Layout)!.paddingBottom = this._padding / 2;
        this.bg.getComponent(Layout)!.paddingLeft = this._padding / 2;
        this.bg.getComponent(Layout)!.paddingRight = this._padding / 2;
        this.allGridList.getComponent(Layout)!.updateLayout(true);
        this.bg.getComponent(Layout)!.updateLayout(true);
        this.allGridList.setPosition(-size.width / 2, size.height / 2);
        this.removeWeaponList.setPosition(0, -size.height / 2 - 100);
        for (let i = 0; i < this._gridRes.length; i++) {
            const res: string = this._gridRes[i];
            let sprite: Sprite = this.bgs[i].getComponent(Sprite)!;
            let path: string = Constants.gridPath + res + '/spriteFrame';
            // oops.res.load(path, SpriteFrame, (err: Error | null, content: SpriteFrame) => {
            //     sprite.spriteFrame = content;
            //     let pos: Readonly<Vec3> = this.resNodePos(i, size, this._padding, gridWidth);
            //     if (!pos.equals(Vec3.ZERO)) {
            //         this.bgs[i].setPosition(pos);
            //     }
            // });
            resources.load(path, SpriteFrame, (err: Error | null, content: SpriteFrame) => {
                if (err) {
                    console.error('Failed to load SpriteFrame:', err);
                    return;
                }
            
                sprite.spriteFrame = content;
                let pos: Readonly<Vec3> = this.resNodePos(i, size, this._padding, gridWidth);
                if (!pos.equals(Vec3.ZERO)) {
                    this.bgs[i].setPosition(pos);
                }
            });
        }
    }

    private initGridRes() {
        let space: number = GridData.instance.space;
        let size: Size = GridData.instance.getGridMapSize();
        let gridWidth: number = GridData.instance.gridWidth;
        let bagCfg: BagModel = GridData.instance.bagCfg;
        let rowColArr: string[] = bagCfg.private_gridLen.split('_');
        this.gridList.getComponent(UITransform)!.setContentSize(size);
        this.gridList.getComponent(Layout)!.spacingX = space;
        this.gridList.getComponent(Layout)!.spacingY = space;
        this.bg.getComponent(UITransform)!.setContentSize(size.width + this._padding, size.height + this._padding);
        this.bg.getComponent(Layout)!.paddingTop = this._padding / 2;
        this.bg.getComponent(Layout)!.paddingBottom = this._padding / 2;
        this.bg.getComponent(Layout)!.paddingLeft = this._padding / 2;
        this.bg.getComponent(Layout)!.paddingRight = this._padding / 2;
        this.gridList.getComponent(Layout)!.updateLayout(true);
        this.bg.getComponent(Layout)!.updateLayout(true);
        this.gridList.setPosition(-size.width / 2, size.height / 2);
        this.weaponList.setPosition(-size.width / 2, size.height / 2)
        this.preWeaponList.setPosition(-size.width / 2, size.height / 2);
        this.weaponList.getComponent(UITransform)!.setContentSize(size.width, size.height);
        this.preWeaponList.getComponent(UITransform)!.setContentSize(size.width, size.height);
        let offerY: number = Number(rowColArr[0]) > 5 ? 100 : 200;
        this.removeWeaponList.setPosition(0, -size.height / 2 - offerY);
        for (let i = 0; i < this._gridRes.length; i++) {
            const res: string = this._gridRes[i];
            let sprite: Sprite = this.bgs[i].getComponent(Sprite)!;
            let path: string = Constants.gridPath + res + '/spriteFrame';
            // oops.res.load(path, SpriteFrame, (err: Error | null, content: SpriteFrame) => {
            //     sprite.spriteFrame = content;
            //     let pos: Readonly<Vec3> = this.resNodePos(i, size, this._padding, gridWidth);
            //     if (!pos.equals(Vec3.ZERO)) {
            //         this.bgs[i].setPosition(pos);
            //     }
            // });
            resources.load(path, SpriteFrame, (err: Error | null, content: SpriteFrame) => {
                if (err) {
                    console.error('Failed to load SpriteFrame:', err);
                    return;
                }
            
                sprite.spriteFrame = content;
                let pos: Readonly<Vec3> = this.resNodePos(i, size, this._padding, gridWidth);
                if (!pos.equals(Vec3.ZERO)) {
                    this.bgs[i].setPosition(pos);
                }
            });
        }
    }

    private resNodePos(i: number, size: Size, padding: number, gridWidth: number) {
        let pos: Readonly<Vec3> = Vec3.ZERO;
        switch (i) {
            case 0:
                pos = v3(-(size.width - 100) / 2, -size.height / 2 - 10, 0);
                break;
            case 1:
                pos = v3((size.width - 100) / 2, -size.height / 2 - 10, 0);
                break;
            case 2:
                pos = v3(0, size.height / 2 + padding / 2 - padding / 2 / 3, 0);
                break;
            case 3:
                pos = v3(size.width / 2 + padding / 2 / 3, size.height / 2, 0);
                break;
            case 4:
                pos = v3(-(size.width / 2 + padding / 2 / 3), size.height / 2, 0);
                break;
            case 5:
                pos = v3(-(gridWidth / 2 + gridWidth) + 10, size.height / 2 + padding / 2, 0);
                break;
            case 6:
                pos = v3(gridWidth / 2 + gridWidth - 10, size.height / 2 + padding / 2, 0);
                break;
            case 7:
                pos = v3(-size.width / 2 - padding / 4, -size.height / 2 + gridWidth / 2 + padding / 4, 0);
                break;
            case 8:
                pos = v3(size.width / 2 + padding / 4, -size.height / 2 + gridWidth / 2 + padding / 4, 0);
                break;
            case 9:
                pos = v3(-(size.width / 2 + padding / 2 / 3), size.height / 2 - 30, 0);
                break;
            case 10:
                pos = v3((size.width / 2 + padding / 2 / 3), size.height / 2 - 30, 0);
                break;
            case 11:
                pos = v3(0, size.height / 2 - padding / 2 + 20, 0);
                this.bgs[i].getComponent(UITransform)!.width = size.width;
                break;
        }

        return pos;
    }



    /* 设置节点透明度 */
    private setNodeOpacity(value: number) {
        this.weaponList.getComponent(UIOpacity)!.opacity = value;
        for (let i = 0; i < this.removeWeaponList.children.length; i++) {
            const element: Node = this.removeWeaponList.children[i];
            if (element.getComponent(WeaponItem)) {
                element.getComponent(UIOpacity)!.opacity = value;
            }
        }
    }

    /* 设置区域占位key */
    private setMainPlaceAreaKey(startGridObj: GridObj) {
        let gripObjArr: GridObj[] = this.getGridMapObjArr();
        let items: Node[] = this.allGridList.children;
        let data: Array<GridObj> = [];
        for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj: GridObj = gripObjArr[index];
            let griddata: string[][] = GridData.instance.getGridMapData();
            let value: string = griddata[subGridObj.row][subGridObj.col]
            let row: number = startGridObj.row + subGridObj.row;
            let col: number = startGridObj.col + subGridObj.col;
            let newGridObj: GridObj = new GridObj();
            newGridObj.row = row;
            newGridObj.col = col;
            data.push(newGridObj);
            let newIndex: number = GridData.instance.getGridBgIndexByTiled(row, col);
            let gridBgItem: Node = items[newIndex];
            gridBgItem.getComponent(GridBgItem)!.placeAreaKey = this._mainAreaKey;
            gridBgItem.getComponent(GridBgItem)!.gridValue = value;
        }
        let gridBgObj: GridBgObj = new GridBgObj();
        gridBgObj.item = this.weaponList;
        gridBgObj.data = data;
        this._addPlaceAreaData.set(this._mainAreaKey, gridBgObj);
    }

    /* 设置新增格子区域的占位key */
    private setAddPlaceAreaKey(weaponBgItem: WeaponBgItem) {
        let startGridObj: GridObj = this._temAddPoint;
        let gripObjArr: GridObj[] = this.getPointGridObjArr(weaponBgItem.weaponCfg);
        let items: Node[] = this.allGridList.children;
        let data: Array<GridObj> = [];
        for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj: GridObj = gripObjArr[index];
            let row: number = startGridObj.row + subGridObj.row;
            let col: number = startGridObj.col + subGridObj.col;
            let newGridObj: GridObj = new GridObj();
            newGridObj.row = row;
            newGridObj.col = col;
            data.push(newGridObj);
            let newIndex: number = GridData.instance.getGridBgIndexByTiled(row, col);
            let gridBgItem: Node = items[newIndex];
            gridBgItem.getComponent(GridBgItem)!.placeAreaKey = weaponBgItem.weaponKey;
        }
        let gridBgObj: GridBgObj = new GridBgObj();
        gridBgObj.item = weaponBgItem.node;
        gridBgObj.data = data;
        this._addPlaceAreaData.set(weaponBgItem.weaponKey, gridBgObj);

    }

    /* 清除区域key 和区域值 */
    private delPlaceAreaKey(key: string) {
        let items: Node[] = this.allGridList.children;
        for (let index = 0; index < items.length; index++) {
            const gridBgItem: Node = items[index];
            gridBgItem.getComponent(GridBgItem)!.delPlaceAreaKey(key);
        }
    }

    /**获取格子连接状态 */
    private getConnectStatus(gridObj: GridObj): boolean {
        let bagCfg: BagModel = GridData.instance.bagCfg;
        let row_col: string[] = bagCfg.max_gridLen.split('_');
        let rowLen: number = Number(row_col[0]);
        let colLen: number = Number(row_col[1]);

        // 边界检查
        if (gridObj.row < 0 || gridObj.col < 0 || gridObj.row >= rowLen || gridObj.col >= colLen) {
            return false;
        }

        // 获取网格在列表中的索引
        let index = GridData.instance.getGridBgIndexByTiled(gridObj.row, gridObj.col);
        if (index === -1 || index >= this.allGridList.children.length) {
            return false;
        }

        // 获取对应的网格项
        let item = this.allGridList.children[index];
        if (!item || !item.getComponent(GridBgItem)) {
            return false;
        }

        // 检查是否和主区域相连
        return item.getComponent(GridBgItem)!.placeAreaKey === this._mainAreaKey;
    }

    /* 检测新增区域数据是否相连 */
    private checkAddAreaGridData() {
        let isConnected: boolean = true; // 默认连接
        let item: Node = null!;
        for (let [key, gridBgObj] of this._addPlaceAreaData) {
            if (key !== this._mainAreaKey) {
                item = gridBgObj.item;
                let data: GridObj[] = gridBgObj.data;
                let isConnect: boolean = false;

                // 定义四个方向的偏移量
                const directions = [
                    { row: -1, col: 0 }, // 上
                    { row: 1, col: 0 },  // 下
                    { row: 0, col: -1 }, // 左
                    { row: 0, col: 1 }   // 右
                ];

                // 检查每个方向上的连接状态
                for (let direction of directions) {
                    for (let gridObj of data) {
                        let checkObj: GridObj = new GridObj();
                        checkObj.row = gridObj.row + direction.row;
                        checkObj.col = gridObj.col + direction.col;
                        if (this.getConnectStatus(checkObj)) {
                            isConnect = true;
                            break;
                        }
                    }
                    if (isConnect) {
                        break;
                    }
                }

                if (!isConnect) {   // 只要有一块不连接就不重新调整格子
                    game.emit(EventConstant.ADD_REMOVE_WEAPON_LIST, item);
                    this._addPlaceAreaData.delete(key);
                    this.delPlaceAreaKey(key);
                    isConnected = false;
                    break;
                }
            }
        }

        if (isConnected) {
            item.destroy();
            this.rebuildGridData();
        }
    }

    /* 重组拥有格子数据 */
    private rebuildGridData() {
        let data: Array<GridObj> = [];
        this._addPlaceAreaData.forEach((gridBgObj, key) => {
            let gridObjArr: GridObj[] = gridBgObj.data;
            data = data.concat(gridObjArr);
        })
        let rowMinMax = [];
        let colMinMax = [];
        data.sort((x, y) => { return x.row - y.row });
        rowMinMax.push(data[0].row);
        rowMinMax.push(data[data.length - 1].row);
        data.sort((x, y) => { return x.col - y.col });
        colMinMax.push(data[0].col);
        colMinMax.push(data[data.length - 1].col);
        //重组新格子数据
        let newdata: Array<Array<string>> = [];
        let items = this.allGridList.children;
        for (let i = rowMinMax[0]; i <= rowMinMax[1]; i++) {
            let rowData = [];
            for (let j = colMinMax[0]; j <= colMinMax[1]; j++) {
                let index: number = GridData.instance.getGridBgIndexByTiled(i, j);
                let gridBgItem: Node = items[index];
                let value: string = gridBgItem.getComponent(GridBgItem)!.placeAreaKey ? gridBgItem.getComponent(GridBgItem)!.gridValue : '';
                rowData.push(value);
            }
            newdata.push(rowData);
        }
        GridData.instance.setRebuildGridMapData(newdata);
        game.emit(EventConstant.INIT_BUILD_GRID_LIST);
        game.emit(EventConstant.INIT_BUILD_WEAPON_POS);
        this.startPoint.row = rowMinMax[0];
        this.startPoint.col = colMinMax[0];
    }

    /* 放置新增格子开始 */
    private onPlaceGridStart(weaponBgItem?: WeaponBgItem) {
        if (!this.allGridList.active) {
            this.initAllGridListPlaceValue();
            GridData.instance.gridEditMode = true;
            this.gridList.parent = this.preBg;
            weaponBgItem!.node.parent = this.node;
            this.allGridList.active = true;
            //设置透明度
            this.setNodeOpacity(100);
            this.initAllGridRes();
            this.node.parent!.getComponent(UITransform)!.height = this.allGridList.getComponent(UITransform)!.height;
            game.emit(EventConstant.SHOW_HIDE_PLACE_LIST, true);
            //设置拥有格子列表位置
            let pos: Vec3 = GridData.instance.getGridPosByTiled(this.startPoint);
            let wpos: Vec3 = this.allGridList.getComponent(UITransform)!.convertToWorldSpaceAR(pos);
            let newPos: Vec3 = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(wpos);
            let gridWidth: number = GridData.instance.gridWidth;
            let gridHeight: number = GridData.instance.gridHeight;
            this.gridList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.weaponList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.setMainPlaceAreaKey(this.startPoint);
        }
        this.delPlaceAreaKey(weaponBgItem!.weaponKey);
    }

    /* 放置新增格子移动 */
    private onPlaceGridMove(weaponBgItem?: WeaponBgItem) {
        weaponBgItem!.node.parent = this.node;
        this.initAllGridListTips();
        let firstGridObj: GridObj = new GridObj();
        firstGridObj.row = 0;
        firstGridObj.col = 0;
        let tieldPos: Vec3 = GridData.instance.getGridPosByTiled(firstGridObj);
        let wpos: Vec3 = weaponBgItem!.point.getComponent(UITransform)!.convertToWorldSpaceAR(tieldPos);
        let checkPos: Vec3 = this.allGridList.getComponent(UITransform)!.convertToNodeSpaceAR(wpos);
        let items: Node[] = this.allGridList.children;
        let all_row_col: string[] = GridData.instance.bagCfg.max_gridLen.split('_');
        this._placeStatus = false;
        for (let i = 0; i < items.length; i++) {
            const element: Node = items[i];
            let gridObj: GridObj = element.getComponent(GridBgItem)!.gridObj;
            let pos: Vec3 = GridData.instance.getGridPosByTiled(gridObj);
            let width: number = GridData.instance.gridWidth;
            let height: number = GridData.instance.gridHeight;
            let rect: Rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);
            if (rect.contains(v2(checkPos.x, checkPos.y))) {
                let gripObjArr: GridObj[] = this.getPointGridObjArr(weaponBgItem!.weaponCfg);
                let placeArr = [];//0 为未放置
                for (let index = 0; index < gripObjArr.length; index++) {
                    const subGridObj: GridObj = gripObjArr[index];
                    let row: number = gridObj.row + subGridObj.row;
                    let col: number = gridObj.col + subGridObj.col;
                    if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                        let newIndex = GridData.instance.getGridBgIndexByTiled(row, col);
                        let gridBgItem = items[newIndex];
                        //检测格子占用
                        if (!gridBgItem.getComponent(GridBgItem)!.placeAreaKey) {
                            gridBgItem.getComponent(GridBgItem)!.setTipsGreen();
                            placeArr.push(1);
                        }
                        else {
                            placeArr.push(0);
                        }
                    }
                    else {
                        placeArr.push(0);
                    }
                }
                if (placeArr.includes(0)) {
                    this._placeStatus = false;

                }
                else {
                    this._placeStatus = true;
                    //设置新坐标
                    let wpos = this.allGridList.getComponent(UITransform)!.convertToWorldSpaceAR(pos);
                    let startPos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(wpos);

                    let points = weaponBgItem!.weaponCfg.Points;
                    let data: Array<GridObj> = [];
                    for (let n = 0; n < points.length; n++) {
                        const element = points[n];
                        for (let m = 0; m < element.length; m++) {
                            let gridObj1 = new GridObj();
                            gridObj1.row = n;
                            gridObj1.col = m;
                            data.push(gridObj1);
                        }
                    }
                    const endGridObj = data[data.length - 1];
                    let newEndObj = new GridObj();
                    newEndObj.row = gridObj.row + endGridObj.row;
                    newEndObj.col = gridObj.col + endGridObj.col;
                    let pos1 = GridData.instance.getGridPosByTiled(newEndObj);
                    let wpos1 = this.allGridList.getComponent(UITransform)!.convertToWorldSpaceAR(pos1);
                    let endPos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(wpos1);

                    let centePos = new Vec3(0, 0, 0);
                    centePos.x = (startPos.x + endPos.x) / 2;
                    centePos.y = (startPos.y + endPos.y) / 2;
                    this._temPos = centePos;
                    this._temAddPoint = BlockUtil.clone(gridObj);
                }
                break;
            }
        }
    }

    /* 放置新增格子完成 */
    private onPlaceGridEnd(weaponBgItem?: WeaponBgItem) {
        let item = weaponBgItem!.node;
        this.initAllGridListTips();
        if (this._placeStatus) {
            item.setPosition(this._temPos);
            this.setAddPlaceAreaKey(weaponBgItem!);
        }
        else {
            game.emit(EventConstant.ADD_REMOVE_WEAPON_LIST, item);
            this._addPlaceAreaData.delete(weaponBgItem!.weaponKey);
        }
        this._placeStatus = false;
    }

    /* 放置格子确定 */
    private onPlaceGridFinish() {
        if (this.allGridList.active) {
            this.checkAddAreaGridData();
            GridData.instance.gridEditMode = false;
            this.allGridList.active = false;
            this.gridList.parent = this.bg;
            //设置透明度
            this.setNodeOpacity(255);
            this.initGridRes();
            game.emit(EventConstant.SHOW_HIDE_PLACE_LIST, false);
        }
    }

    /* 获取拥有格子里的第一个有格子的数据 */
    private getFirstGridObj() {
        let gridMapData = GridData.instance.getGridMapData();
        let gripObjArr: Array<GridObj> = [];
        let gripObj = null;
        for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    gripObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    break;
                }
            }
            if (gripObj) {
                break;
            }
        }
        return gripObj;
    }

    /* 获取拥有格子的位置数据 */
    private getGridMapObjArr() {
        let gridMapData = GridData.instance.getGridMapData();
        let gripObjArr: Array<GridObj> = [];
        for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    let gripObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    gripObjArr.push(gripObj);
                }
            }
        }
        return gripObjArr;
    }

    private getPointGridObjArr(weaponCfg: WeaponModel) {
        let point = weaponCfg.Points;
        let gripObjArr: Array<GridObj> = [];
        for (let i = 0; i < point.length; i++) {
            const element = point[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    let gripObj = new GridObj();
                    gripObj.row = i;
                    gripObj.col = j;
                    gripObjArr.push(gripObj);
                }
            }
        }
        return gripObjArr;
    }

    /* 初始格子颜色 */
    private initAllGridListTips() {
        let items = this.allGridList.children;
        for (let index = 0; index < items.length; index++) {
            const gridBg = items[index];
            gridBg.getComponent(GridBgItem)!.setTipsDefault();
        }
    }

    /* 初始格子占有 */
    private initAllGridListPlaceValue() {
        let items = this.allGridList.children;
        for (let index = 0; index < items.length; index++) {
            const gridBg = items[index];
            gridBg.getComponent(GridBgItem)!.placeAreaKey = '';
        }
    }

    /* 检测坐标是否在格子中 */
    private checkAllGridListByPos(checkPos: Vec3) {
        let items = this.allGridList.children;
        let all_row_col = GridData.instance.bagCfg.max_gridLen.split('_');
        this._placeStatus = false;
        for (let i = 0; i < items.length; i++) {
            const element = items[i];
            let gridObj = element.getComponent(GridBgItem)!.gridObj;
            let pos = GridData.instance.getGridPosByTiled(gridObj);
            let width = GridData.instance.gridWidth;
            let height = GridData.instance.gridHeight;
            let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);
            if (rect.contains(v2(checkPos.x, checkPos.y))) {
                let gripObjArr = this.getGridMapObjArr();
                let placeArr = [];//0 为未放置
                for (let index = 0; index < gripObjArr.length; index++) {
                    const subGridObj = gripObjArr[index];
                    let row = gridObj.row + subGridObj.row;
                    let col = gridObj.col + subGridObj.col;
                    if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                        let newIndex = GridData.instance.getGridBgIndexByTiled(row, col);
                        let gridBgItem = items[newIndex];
                        //是否格子占用
                        if (!gridBgItem.getComponent(GridBgItem)!.placeAreaKey) {
                            gridBgItem.getComponent(GridBgItem)!.setTipsGreen();
                            placeArr.push(1);
                        }
                        else {
                            placeArr.push(0);
                        }
                    }
                    else {
                        placeArr.push(0);
                    }
                }
                if (placeArr.includes(0)) {
                    this._placeStatus = false;
                }
                else {
                    this._placeStatus = true;
                    let wpos = this.allGridList.getComponent(UITransform)!.convertToWorldSpaceAR(pos);
                    let newPos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(wpos);
                    let gridWidth = GridData.instance.gridWidth;
                    let gridHeight = GridData.instance.gridHeight;
                    this._temPos.x = newPos.x - gridWidth / 2;
                    this._temPos.y = newPos.y + gridHeight / 2;
                    this._temPoint = BlockUtil.clone(gridObj);
                }
                break;
            }
        }
    }

    /* 设置移动提示 */
    private setGridMoveTips() {

        this.initAllGridListTips();
        //检测第一个格子是否在所有格子里中
        let firstGridObj = new GridObj();
        firstGridObj.row = 0;
        firstGridObj.col = 0;
        let tieldPos = GridData.instance.getGridPosByTiled(firstGridObj);
        let wpos = this.gridList.getComponent(UITransform)!.convertToWorldSpaceAR(tieldPos);
        let pos = this.allGridList.getComponent(UITransform)!.convertToNodeSpaceAR(wpos);
        this.checkAllGridListByPos(pos);
    }

    /**放置已拥有的格子移动,暂时功能需求不需要 */
    /*放置拥有格子触摸点击 */
    private onTouchStart(wpos?: Vec2) {
        //是否触摸到拥有格子列表
        let touchPos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(wpos!.x, wpos!.y, 0));
        //坐标在可用格子中时
        let gridData = GridData.instance.getGridMapData();
        let touched = false;
        for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];
            for (let j = 0; j < element.length; j++) {
                const value = element[j];
                if (value) {
                    let gridObj = new GridObj();
                    gridObj.row = i;
                    gridObj.col = j;
                    let gridPos = GridData.instance.getGridPosByTiled(gridObj);
                    let gridWpos = this.gridList.getComponent(UITransform)!.convertToWorldSpaceAR(gridPos);
                    let newPos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(gridWpos);
                    let gridWidth = GridData.instance.gridWidth;
                    let gridHeight = GridData.instance.gridHeight;
                    let rect = new Rect(newPos.x - gridWidth / 2, newPos.y - gridHeight / 2, gridWidth, gridWidth);
                    if (rect.contains(v2(touchPos.x, touchPos.y))) {
                        touched = true;
                        break;
                    }
                }
            }
            if (touched) {
                break;
            }
        }

        if (GridData.instance.gridEditMode && touched) {
            this._isTouch = true;
            this._offfSet = this.weaponList.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(wpos!.x, wpos!.y, 0));
            this._startPos = this.weaponList.getPosition();
            this.delPlaceAreaKey(this._mainAreaKey);
        }
    }
    /* 放置拥有格子移动 */
    private onTouchMove(wpos?: Vec2) {
        if (this._isTouch) {
            let touchPos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(wpos!.x, wpos!.y, 0));
            let pos = new Vec3(touchPos.x - this._offfSet.x, touchPos.y - this._offfSet.y);
            this.gridList.setPosition(pos);
            this.weaponList.setPosition(pos);
            //设置移动提示
            this.setGridMoveTips();
        }
    }
    /* 放置拥有格子完成 */
    private onTouchEnd(wpos?: Vec2) {
        if (this._isTouch) {
            this._isTouch = false;
            //是否放置或还原
            if (this._placeStatus) {
                this._startPos = this._temPos;
                this.startPoint = this._temPoint;
            }
            this.gridList.setPosition(this._startPos);
            this.weaponList.setPosition(this._startPos);
            this._placeStatus = false;
            this.initAllGridListTips();
            this.setMainPlaceAreaKey(this.startPoint);
        }
    }
    private onTouchCancle(wpos: Vec2) {
        if (this._isTouch) {
            this._isTouch = false;
            this._placeStatus = false;
            this.gridList.setPosition(this._startPos);
            this.weaponList.setPosition(this._startPos);
            this.initAllGridListTips();
        }
    }

    private onClearAreaData() {
        this._addPlaceAreaData.clear();
    }

    protected onEnable(): void {
        //放置新增格子监听
        game.on(EventConstant.PLACE_GRID_START, this.onPlaceGridStart, this);
        game.on(EventConstant.PLACE_GRID_MOVE, this.onPlaceGridMove, this);
        game.on(EventConstant.PLACE_GRID_END, this.onPlaceGridEnd, this);


        //放置拥有格子监听
        // game.on(EventConstant.GAME_TOUCH_START, this.onTouchStart, this);
        // game.on(EventConstant.GAME_TOUCH_MOVE, this.onTouchMove, this);
        // game.on(EventConstant.GAME_TOUCH_END, this.onTouchEnd, this);
        // game.on(EventConstant.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

        game.on(EventConstant.CLEAR_AREA_DATA, this.onClearAreaData, this);
        game.on(EventConstant.PLACE_GRID_FINISH, this.onPlaceGridFinish, this);

    }

    protected onDisable(): void {
        game.off(EventConstant.PLACE_GRID_START, this.onPlaceGridStart, this);
        game.off(EventConstant.PLACE_GRID_MOVE, this.onPlaceGridMove, this);
        game.off(EventConstant.PLACE_GRID_END, this.onPlaceGridEnd, this);

        // game.off(EventConstant.GAME_TOUCH_START, this.onTouchStart, this);
        // game.off(EventConstant.GAME_TOUCH_MOVE, this.onTouchMove, this);
        // game.off(EventConstant.GAME_TOUCH_END, this.onTouchEnd, this);
        // game.off(EventConstant.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

        game.off(EventConstant.CLEAR_AREA_DATA, this.onClearAreaData, this);
        game.off(EventConstant.PLACE_GRID_FINISH, this.onPlaceGridFinish, this);
    }
}

export class GridBgObj {
    data: Array<GridObj> = [];//位置数据
    item: Node = null!;//区域节点
}

