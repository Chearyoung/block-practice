System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, v3, Input, director, Tween, game, GridMapManager, GridManager, WeaponManager, GameDefine, EventConstant, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, Game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGridMapManager(extras) {
    _reporterNs.report("GridMapManager", "./Mgr/GridMapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridManager(extras) {
    _reporterNs.report("GridManager", "./Mgr/GridManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponManager(extras) {
    _reporterNs.report("WeaponManager", "../Mgr/WeaponManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDefine(extras) {
    _reporterNs.report("GameDefine", "../GameDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventConstant(extras) {
    _reporterNs.report("EventConstant", "../EventConstant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      v3 = _cc.v3;
      Input = _cc.Input;
      director = _cc.director;
      Tween = _cc.Tween;
      game = _cc.game;
    }, function (_unresolved_2) {
      GridMapManager = _unresolved_2.GridMapManager;
    }, function (_unresolved_3) {
      GridManager = _unresolved_3.GridManager;
    }, function (_unresolved_4) {
      WeaponManager = _unresolved_4.WeaponManager;
    }, function (_unresolved_5) {
      GameDefine = _unresolved_5.GameDefine;
    }, function (_unresolved_6) {
      EventConstant = _unresolved_6.EventConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b11a6+y3SBEybxM/GADPTwr", "Game", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'screen', 'Size', 'view', 'UITransform', 'tween', 'v3', 'EventTouch', 'Input', 'director', 'Button', 'Sprite', 'instantiate', 'Prefab', 'Vec3', 'Tween', 'game']); // import { OpenPopupManager } from './Frame/OpenPopupManager';
      // import { oops } from '../../../script-oops/core/Oops';
      // import { UIID } from '../../config/GameUIConfig';


      // import { PopupManager } from './Frame/PopupManager';
      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass('Game'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(_crd && GridMapManager === void 0 ? (_reportPossibleCrUseOfGridMapManager({
        error: Error()
      }), GridMapManager) : GridMapManager), _dec5 = property(_crd && GridManager === void 0 ? (_reportPossibleCrUseOfGridManager({
        error: Error()
      }), GridManager) : GridManager), _dec6 = property(_crd && WeaponManager === void 0 ? (_reportPossibleCrUseOfWeaponManager({
        error: Error()
      }), WeaponManager) : WeaponManager), _dec(_class = (_class2 = class Game extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameCtrl", _descriptor, this);

          _initializerDefineProperty(this, "removeWeaponList", _descriptor2, this);

          // @property(Button)
          // closeBtn: Button = null!;
          // @property(Node)
          // openBox: Node = null!;
          _initializerDefineProperty(this, "gridMapManager", _descriptor3, this);

          _initializerDefineProperty(this, "gridManager", _descriptor4, this);

          _initializerDefineProperty(this, "weaponManager", _descriptor5, this);

          this._battleMapUpPosY = 1200;
          this._battleMapDownPosy = 200;
        }

        onLoad() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = false; // OpenPopupManager.instance.showGamePopup();

          this.init(); // this.closeBtn.node.on(Button.EventType.CLICK, () => {
          //     oops.gui.remove(UIID.BlockUI, true);
          //     game.emit(EventConstant.Event_UI_ResumeGame);
          //     this.clear();
          // }, this);
        }

        init() {
          this.gridManager.init();
          this.gridMapManager.init();
          this.weaponManager.init();
          this.onTapBtn();
        }
        /* 触碰开始 */


        onTapBtn() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = true;
          this.setTweenAnim(this.removeWeaponList, 0.3);
        }
        /* 设置动画 */


        setTweenAnim(main, duration) {
          main.active = true;
          main.setScale(0.5, 0.5);
          tween(main).to(duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: 'backOut'
          }).call(() => {// 弹窗已完全展示
          }).start();
        }
        /**游戏开始 */


        onGameStart() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = false;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart = true;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameOver = false;
        }
        /**游戏结束 */


        onGameOver() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = false;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameStart = false;
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameOver = true;
          Tween.stopAll();
          this.clear(); // PopupManager.instance.hideAll();

          director.loadScene('Game');
        }
        /* 触摸点击 */


        onTouchStart(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            let wpos = event.getUILocation();
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).GAME_TOUCH_START, wpos);
          }
        }
        /* 触摸移动 */


        onTouchMove(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            let wpos = event.getUILocation();
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).GAME_TOUCH_MOVE, wpos);
          }
        }
        /* 触摸结束 */


        onTouchEnd(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            let wpos = event.getUILocation();
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).GAME_TOUCH_END, wpos);
          }
        }
        /* 触摸取消 */


        onTouchCancle(event) {
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            let wpos = event.getUILocation();
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).GAME_TOUCH_CANCLE, wpos);
          }
        }

        onEnable() {
          this.gameCtrl.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.gameCtrl.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.gameCtrl.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.gameCtrl.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_OVER, this.onGameOver, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TAP_BTN, this.onTapBtn, this);
        }

        onDisable() {
          this.gameCtrl.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.gameCtrl.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.gameCtrl.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.gameCtrl.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancle, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_OVER, this.onGameOver, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TAP_BTN, this.onTapBtn, this);
        }

        clear() {
          // 数据清理整理
          this.gridManager.clear();
          this.weaponManager.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameCtrl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "removeWeaponList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridMapManager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gridManager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "weaponManager", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=447e3ebab785d85fd50628db5ae82e5383cb70b6.js.map