import { _decorator, Component, Node, UITransform, UIOpacity} from 'cc';

import { GridData, GridObj } from '../Data/GridData';
const { ccclass, property } = _decorator;

@ccclass('GridItem')
export class GridItem extends Component {
    private _gridObj: GridObj = new GridObj();
    private _gridValue: string = '0';
    
    public get gridObj() {
        return this._gridObj;
    }
    public init(row: number, col: number, value: string) {
        this.node.getComponent(UITransform)!.setContentSize(GridData.instance.gridWidth, GridData.instance.gridHeight);
        this._gridObj.row = row;
        this._gridObj.col = col;
        this._gridValue = value;
        // this.node.getComponent(UIOpacity)!.opacity = value ? 255 : 0;
    }


    update(deltaTime: number) {
        
    }
}

