import { _decorator, Component, Node, screen, Size, view, UITransform, tween, v3, EventTouch, Input, director, Button, Sprite, instantiate, Prefab, Vec3, Tween, game } from 'cc';
import { GridMapManager } from './Mgr/GridMapManager';
import { GridManager } from './Mgr/GridManager';
import { WeaponManager } from '../Mgr/WeaponManager';
import { GameDefine } from '../GameDefine';
import { TemplateMgr } from "../Mgr/TemplateMgr";
// import { OpenPopupManager } from './Frame/OpenPopupManager';
// import { oops } from '../../../script-oops/core/Oops';
// import { UIID } from '../../config/GameUIConfig';
import { EventConstant } from '../EventConstant';
// import { PopupManager } from './Frame/PopupManager';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    @property(Node)
    gameCtrl: Node = null!;

    @property(Node)
    removeWeaponList: Node = null!;

    // @property(Button)
    // closeBtn: Button = null!;

    // @property(Node)
    // openBox: Node = null!;

    @property(GridMapManager)
    gridMapManager: GridMapManager = null!;

    @property(GridManager)
    gridManager: GridManager = null!;

    @property(WeaponManager)
    weaponManager: WeaponManager = null!;

    private _battleMapUpPosY = 1200;
    private _battleMapDownPosy = 200;

    protected onLoad() {
        GameDefine.gameTouch = false;
        // OpenPopupManager.instance.showGamePopup();
        this.init();

        // this.closeBtn.node.on(Button.EventType.CLICK, () => {
        //     oops.gui.remove(UIID.BlockUI, true);
        //     game.emit(EventConstant.Event_UI_ResumeGame);
        //     this.clear();
        // }, this);
    }

    private init() {

        this.scheduleOnce(() => {
            // 加载配置表
            TemplateMgr.instance().init(() => {
                this.gridManager.init();
                this.gridMapManager.init();
                this.weaponManager.init();
                this.onTapBtn();
            })
        }, 0.5)
        
    }

    /* 触碰开始 */
    private onTapBtn() {
        GameDefine.gameTouch = true;
        this.setTweenAnim(this.removeWeaponList, 0.3);
    }

    /* 设置动画 */
    private setTweenAnim(main: Node, duration: number) {
        main.active = true;
        main.setScale(0.5, 0.5);
        tween(main)
            .to(duration, { scale: v3(1, 1, 1) }, { easing: 'backOut' })
            .call(() => {
                // 弹窗已完全展示
            })
            .start();
    }


    /**游戏开始 */
    private onGameStart() {
        GameDefine.gameTouch = false;
        GameDefine.gameStart = true;
        GameDefine.gameOver = false;
    }

    /**游戏结束 */
    private onGameOver() {
        GameDefine.gameTouch = false;
        GameDefine.gameStart = false;
        GameDefine.gameOver = true;
        Tween.stopAll();
        this.clear();
        // PopupManager.instance.hideAll();
        director.loadScene('Game');
    }

    /* 触摸点击 */
    private onTouchStart(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            game.emit(EventConstant.GAME_TOUCH_START, wpos);
        }
    }

    /* 触摸移动 */
    private onTouchMove(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            game.emit(EventConstant.GAME_TOUCH_MOVE, wpos);
        }
    }

    /* 触摸结束 */
    private onTouchEnd(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            game.emit(EventConstant.GAME_TOUCH_END, wpos);
        }
    }

    /* 触摸取消 */
    private onTouchCancle(event: EventTouch) {
        event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            game.emit(EventConstant.GAME_TOUCH_CANCLE, wpos);
        }
    }

    protected onEnable(): void {
        this.gameCtrl.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.gameCtrl.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.gameCtrl.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.gameCtrl.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
        game.on(EventConstant.GAME_OVER, this.onGameOver, this);
        game.on(EventConstant.GAME_TAP_BTN, this.onTapBtn, this);
    }

    protected onDisable(): void {
        this.gameCtrl.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.gameCtrl.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.gameCtrl.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        this.gameCtrl.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
        game.off(EventConstant.GAME_OVER, this.onGameOver, this);
        game.off(EventConstant.GAME_TAP_BTN, this.onTapBtn, this);
    }

    private clear() {
        // 数据清理整理
        this.gridManager.clear();
        this.weaponManager.clear();
    }
}


