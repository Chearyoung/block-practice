import { _decorator, Component, Node, Input, game, EventTouch, v3,tween} from 'cc';
import { WeaponManager } from "../Mgr/WeaponManager";
import { TemplateMgr } from "../Mgr/TemplateMgr";
import { GridData } from "../Data/GridData";
import { GameDefine } from '../GameDefine';
import { EventConstant } from '../EventConstant';
const { ccclass, property } = _decorator;

@ccclass('MainScene')
export class MainScene extends Component {

    @property(Node)
    gameCtrl: Node = null!;

    @property(Node)
    removeWeaponList: Node = null!;

    @property(WeaponManager)
    weaponManager: WeaponManager = null!;
    start() {
        this.scheduleOnce(() => {
            // 加载配置表
            TemplateMgr.instance().init(() => {
                GridData.instance.init();
                this.weaponManager.init();
            })
        }, 0.5)

    }
    private onTouchStart(event: EventTouch) {
        GameDefine.gameTouch = true;
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
        GameDefine.gameTouch = true;       event.preventSwallow = true;
        if (GameDefine.gameTouch) {
            let wpos = event.getUILocation();
            game.emit(EventConstant.GAME_TOUCH_END, wpos);
        }
        GameDefine.gameTouch = false;
    }


    private onTapBtn() {
        GameDefine.gameTouch = true;
        this.setTweenAnim(this.removeWeaponList, 0.3);
    }

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

    public onRerollBtn() {
        game.emit(EventConstant.WEAPON_REMOVE_REFRESH);
    }

    protected onEnable(): void {
        this.gameCtrl.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.gameCtrl.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.gameCtrl.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        game.on(EventConstant.GAME_TAP_BTN, this.onTapBtn, this);
    }

    protected onDisable(): void {
        this.gameCtrl.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        this.gameCtrl.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.gameCtrl.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        game.off(EventConstant.GAME_TAP_BTN, this.onTapBtn, this);
    }
}

