import { _decorator, Component, instantiate, Label, Node, Prefab, Size, Vec3 } from 'cc';
import { GridData, GridObj } from '../Data/GridData';
import { GridItem } from "../Grid/GridItem";
import { GridBgItem } from '../Grid/GridBgItem';
const { ccclass, property } = _decorator;

@ccclass('GridManager')
export class GridManager extends Component {
    @property(Node)
    private allGridList: Node = null!;

    @property(Node)
    private gridList: Node = null!;

    @property(Prefab)
    private gridPreab: Prefab = null!;

    @property(Prefab)
    private gridBgPreab: Prefab = null!;

    @property(Node)
    private label:Node = null!;

    private size: Size = new Size(510, 510);
    private _padding: number = 90;
    private _gridData: string[][] = [
        ['', '0', '0', '0', '0',''],
        ['', '0', '0', '0', '0',''],
        ['', '0', '0', '0', '0',''],
        ['', '0', '0', '0', '0',''],
    ];
    private _maxGrid: string[][] = [
        ['0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0'],
    ];

    
    protected onLoad(): void {
    }

    start() {
    }
    public init() {
        GridData.instance.init();
        this.label.getComponent(Label).string = "背包界面";
        this.initGridList();
        this.initAllGridList();
    }

    private initGridList(){
        this.gridList.removeAllChildren();
        for (let i = 0; i < this._gridData.length; i++) {
            const element = this._gridData[i];
            for (let j = 0; j < element.length; j ++) {
                const item: string = element[j];
                let gridItem: Node = instantiate(this.gridPreab);
                gridItem.parent = this.gridList;
                gridItem.getComponent(GridItem)!.init(i, j, item);
                
            }
        }
    }

    private initAllGridList(){
        for (let i = 0; i < this._maxGrid.length; i++) {
            const element = this._maxGrid[i];
            for (let j = 0; j < element.length; j ++) {
                const item: string = element[j];
                let gridBgItem: Node = instantiate(this.gridBgPreab);
                gridBgItem.parent = this.allGridList;
                gridBgItem.getComponent(GridBgItem)!.init(i, j, item);
            }
        }
    }

    update(dt: number) {
        // console.log(dt);
    }
}

