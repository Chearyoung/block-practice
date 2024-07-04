import { _decorator, Color, Component, Node, Sprite, UIOpacity, UITransform } from 'cc';

import { GridData, GridObj } from '../../Data/GridData';
const { ccclass, property } = _decorator;

@ccclass('GridBgItem')
export class GridBgItem extends Component {
    @property(Node)
    private tipsNode: Node = null!;
    private _gridObj: GridObj = new GridObj();
    private _gridValue: string = '0'; // 0:格子中没有武器   'fdagfdag':格子中填充了武器   ''：确定后不占格子

    private _placeAreaKey: string = '';//放置格子的区域key  空则没有放置格子

    public get placeAreaKey() {
        return this._placeAreaKey;
    }

    public set placeAreaKey(value: string) {
        this._placeAreaKey = value;
    }

    public get gridObj() {
        return this._gridObj;
    }

    public get gridValue() {
        return this._gridValue;
    }
    public set gridValue(value: string) {
        this._gridValue = value;
    }

    public init(row: number, col: number, value: string) {
        this.node.getComponent(UITransform)!.setContentSize(GridData.instance.gridWidth, GridData.instance.gridHeight);
        this.tipsNode.getComponent(UITransform)!.setContentSize(GridData.instance.gridWidth, GridData.instance.gridHeight);
        this._gridObj.row = row;
        this._gridObj.col = col;
        this._gridValue = value;
        this.node.getComponent(UIOpacity)!.opacity = value ? 255 : 0;
    }

    public setTipsGreen() {
        this.tipsNode.getComponent(Sprite)!.color = Color.GREEN;
    }

    public setTipsDefault() {
        this.tipsNode.getComponent(Sprite)!.color = new Color().fromHEX('ffffff');
    }

    public delPlaceAreaKey(key: string) {
        if (this._placeAreaKey == key) {
            this._placeAreaKey = '';
            if (this._gridValue) {
                this._gridValue = '0'
            }
        }
    }
}

