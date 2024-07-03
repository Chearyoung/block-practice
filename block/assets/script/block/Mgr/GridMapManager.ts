import { _decorator, Component, Node, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GridMapManager')
export class GridMapManager extends Component {

    @property(Node)
    private gridList: Node = null!;  
    @property(Node)
    private allGridList: Node = null!;  
    private _padding: number = 90;

    public init() {
        this.initGridRes();
        this.initStatPoint();
    }

    private initGridRes() {
        this.gridList.getComponent(UITransform)!.setContentSize(1000, 900);
    }

    private initStatPoint() {

    }

    update(deltaTime: number) {
        
    }
}

