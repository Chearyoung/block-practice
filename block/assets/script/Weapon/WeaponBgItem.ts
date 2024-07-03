import { _decorator, Color, Component, game, instantiate, Layout, Node, Sprite, SpriteFrame, Tween, tween, UIOpacity, UITransform, v2, v3, Vec2, Vec3 } from 'cc';
import { WeaponData, WeaponModel } from '../Data/WeaponData';
import { GridData, GridObj } from '../Data/GridData';
import { Constants } from '../../Constants';
import { oops } from '../../../../../script-oops/core/Oops';
import { EventConstant } from '../../../../constant/EventConstant';
const { ccclass, property } = _decorator;

@ccclass('WeaponItem')
export class WeaponBgItem extends Component {
    @property(Sprite)
    private icon: Sprite = null!;

    private _touchStatus: number = 0;//当前触摸状态
    private _weaponKey: string = '';//唯一值
    private _weaponCfg: WeaponModel = null!;
    private _point: Node = null!;
    private _pointGridObj: Array<GridObj> = [];//占用点位置

    private _placeStatus: boolean = true; //true:放置  false:卸下
    private _isTouch: boolean = false;//是否被点击

    public get point() {
        return this._point;
    }

    public get weaponCfg() {
        return this._weaponCfg;
    }

    public get weaponKey() {
        return this._weaponKey;
    }

    public set placeStatus(value: boolean) {
        this._placeStatus = value;
    }

    public init(weaponCfg: WeaponModel, weaponKey: string, placeStatus: boolean) {
        this._pointGridObj = [];
        this._placeStatus = placeStatus;
        this._weaponKey = weaponKey;
        this._weaponCfg = weaponCfg;
        this._point = this.node.getChildByName('point')!;
        this.initWeaponSize();
        this.setPointPosArr();
        this.setGridIcon();
        this.setNodeAngel();
    }

    /* 初始武器格子尺寸 */
    private initWeaponSize() {
        let typeArr = this._weaponCfg.Type.split('_');
        let rowLen = Number(typeArr[1]);
        let colLen = Number(typeArr[0]);
        let size = GridData.instance.getGridSizeByRowCol(rowLen, colLen);
        if (size != null) {
            let scale = GridData.instance.iconScale;
            this.node.getComponent(UITransform)!.setContentSize(size);
            this.point.setPosition(-size.width / 2, size.height / 2);
            this.icon.node.setScale(scale, scale, scale);
        }
    }

    /* 设置点坐标 */
    private setPointPosArr() {
        this._pointGridObj = [];
        let point = this._weaponCfg.Points;
        for (let i = 0; i < point.length; i++) {
            const item = point[i];
            for (let j = 0; j < item.length; j++) {
                const element = item[j];
                if (element) {
                    let gridObj = new GridObj();
                    gridObj.row = i;
                    gridObj.col = j;
                    this._pointGridObj.push(gridObj);
                }
            }
        }
    }

    /* 设置武器图标 */
    private setGridIcon() {
        let path = Constants.weaponIconPath + this.weaponCfg.Res + '/spriteFrame';
        oops.res.load(path, SpriteFrame, (err: Error | null, content: SpriteFrame) => {
            this.icon.spriteFrame = content;
            //设置格子
            let iconList = this.icon.node.parent!;
            let row_col = this.weaponCfg.Type.split('_');
            let size = GridData.instance.getGridSizeByRowCol(Number(row_col[1]), Number(row_col[0]));
            if (iconList != null) {
                let latticePoints = this.weaponCfg.Points;
                iconList.getComponent(Layout)!.spacingX = GridData.instance.space;
                iconList.getComponent(Layout)!.spacingY = GridData.instance.space;
                iconList.getComponent(UITransform)!.width = size.width;
                iconList.getComponent(Layout)!.updateLayout(true);
                for (let i = 0; i < latticePoints.length; i++) {
                    const element = latticePoints[i];
                    for (let j = 0; j < element.length; j++) {
                        const value = element[j];
                        let item = instantiate(this.icon.node);
                        item.active = true;
                        item.parent = iconList;
                        item.getComponent(UIOpacity)!.opacity = value ? 255 : 0;
                    }

                }
            }

        });
    }

    private setNodeAngel() {
        let angle = this._placeStatus ? 0 : 10;
        this.node.angle = angle;
    }

    /* 格子卸下 */
    private onGridRemove(id: string) {
        if (this.weaponKey == id) {
            //添加到待上阵武器列表
            game.emit(EventConstant.ADD_REMOVE_WEAPON_LIST, this.node);
            this.placeStatus = false;
            this.setNodeAngel();
        }
    }


    /* 放置完成 */
    private onPlaceFinish() {
        //放置完成
        game.emit(EventConstant.PLACE_GRID_END, this);
    }


    /* 关闭多触碰 */
    /* 触摸点击 */
    private onTouchStart(wpos?: Vec2) {
        //是否触摸到武器(只能选中一个)
        let touchPos = this.point.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(wpos!.x, wpos!.y, 0));
        if (GridData.instance.checkPointinGrid(v2(touchPos.x, touchPos.y), this._pointGridObj) && !WeaponData.instance.isSelect) {
            this._isTouch = true;
            WeaponData.instance.isSelect = true;
            this._touchStatus = TouchStatus.START;
            //编辑格子
            this.placeStatus = true;
            this.setNodeAngel();
            game.emit(EventConstant.PLACE_GRID_START, this);
            let pos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(wpos!.x, wpos!.y, 0));
            this.node.setPosition(pos.x, pos.y);
        }
    }

    private onTouchMove(wpos?: Vec2) {
        if (this._isTouch) {
            this._touchStatus = TouchStatus.MOVE;
            let pos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(new Vec3(wpos!.x, wpos!.y, 0));
            this.node.setPosition(pos.x, pos.y);
            game.emit(EventConstant.PLACE_GRID_MOVE, this);
        }
    }

    private onTouchEnd(wpos?: Vec2) {
        if (this._isTouch) {
            this._isTouch = false;
            WeaponData.instance.isSelect = false;
            this.onPlaceFinish();
            this._touchStatus = TouchStatus.END;
        }
    }

    private onTouchCancle(wpos: Vec2) {
        if (this._isTouch) {
            this._isTouch = false;
            WeaponData.instance.isSelect = false;
            this._touchStatus = TouchStatus.CANCEL;
            game.emit(EventConstant.ADD_REMOVE_WEAPON_LIST, this.node)
        }
    }

    protected onEnable(): void {
        game.on(EventConstant.GAME_TOUCH_START, this.onTouchStart, this);
        game.on(EventConstant.GAME_TOUCH_MOVE, this.onTouchMove, this);
        game.on(EventConstant.GAME_TOUCH_END, this.onTouchEnd, this);
        game.on(EventConstant.GAME_TOUCH_CANCLE, this.onTouchEnd, this);
    }

    protected onDisable(): void {
        game.off(EventConstant.GAME_TOUCH_START, this.onTouchStart, this);
        game.off(EventConstant.GAME_TOUCH_MOVE, this.onTouchMove, this);
        game.off(EventConstant.GAME_TOUCH_END, this.onTouchEnd, this);
        game.off(EventConstant.GAME_TOUCH_CANCLE, this.onTouchEnd, this);
    }
}


export enum TouchStatus {
    DEFAULT,
    START,
    MOVE,
    END,
    CANCEL
}


