import { _decorator, Component, Node } from 'cc';
import { GridMapManager } from './Mgr/GridMapManager';
import { GridManager } from './Mgr/GridManager';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(GridMapManager)
    gridMapManager: GridMapManager = null!;

    @property(GridManager)
    gridManager: GridManager = null;

    protected onLoad(): void {
        this.init();
    }

    private init(){
        this.gridManager.init();
        this.gridMapManager.init();
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

