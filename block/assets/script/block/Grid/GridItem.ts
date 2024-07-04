import { _decorator, Color, Component, Node, Sprite, UIOpacity, UITransform } from 'cc';

import { GridData, GridObj } from '../../Data/GridData';
const { ccclass, property } = _decorator;

@ccclass('GridItem')
export class GridItem extends Component {
    private _gridObj: GridObj = new GridObj();
    private _gridValue: string = '0'; // 0:占用格子 '':无格子  weaponKey: 武器占用格子
    public get gridObj() {
        return this._gridObj;
    }

    public get gridValue() {
        return this._gridValue;
    }

    public init(row: number, col: number, value: string) {
        this.node.getComponent(UITransform)!.setContentSize(GridData.instance.gridWidth, GridData.instance.gridHeight);
        this._gridObj.row = row;
        this._gridObj.col = col;
        this._gridValue = value;
        this.node.getComponent(UIOpacity)!.opacity = value ? 255 : 0;
    }

    public setDeafult() {
        this.node.getComponent(Sprite)!.color = new Color().fromHEX('FFFFFF');
    }

    public setGreen() {
        this.node.getComponent(Sprite)!.color = new Color().fromHEX('7ed263');
    }

    public setRed() {
        this.node.getComponent(Sprite)!.color = new Color().fromHEX('dd6662');
    }

    public setYellow() {
        this.node.getComponent(Sprite)!.color = new Color().fromHEX('dbc464');
    }
}

