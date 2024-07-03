System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Input, game, v3, tween, WeaponManager, TemplateMgr, GridData, GameDefine, EventConstant, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, MainScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWeaponManager(extras) {
    _reporterNs.report("WeaponManager", "../Mgr/WeaponManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTemplateMgr(extras) {
    _reporterNs.report("TemplateMgr", "../Mgr/TemplateMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
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
      Input = _cc.Input;
      game = _cc.game;
      v3 = _cc.v3;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      WeaponManager = _unresolved_2.WeaponManager;
    }, function (_unresolved_3) {
      TemplateMgr = _unresolved_3.TemplateMgr;
    }, function (_unresolved_4) {
      GridData = _unresolved_4.GridData;
    }, function (_unresolved_5) {
      GameDefine = _unresolved_5.GameDefine;
    }, function (_unresolved_6) {
      EventConstant = _unresolved_6.EventConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e2c5tT2AJGkJpQjpoYI+WF", "MainScene", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Input', 'game', 'EventTouch', 'v3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainScene", MainScene = (_dec = ccclass('MainScene'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(_crd && WeaponManager === void 0 ? (_reportPossibleCrUseOfWeaponManager({
        error: Error()
      }), WeaponManager) : WeaponManager), _dec(_class = (_class2 = class MainScene extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameCtrl", _descriptor, this);

          _initializerDefineProperty(this, "removeWeaponList", _descriptor2, this);

          _initializerDefineProperty(this, "weaponManager", _descriptor3, this);
        }

        start() {
          this.scheduleOnce(() => {
            // 加载配置表
            (_crd && TemplateMgr === void 0 ? (_reportPossibleCrUseOfTemplateMgr({
              error: Error()
            }), TemplateMgr) : TemplateMgr).instance().init(() => {
              (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.init();
              this.weaponManager.init();
            });
          }, 0.5);
        }

        onTouchStart(event) {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = true;
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
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = true;
          event.preventSwallow = true;

          if ((_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch) {
            let wpos = event.getUILocation();
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).GAME_TOUCH_END, wpos);
          }

          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = false;
        }

        onTapBtn() {
          (_crd && GameDefine === void 0 ? (_reportPossibleCrUseOfGameDefine({
            error: Error()
          }), GameDefine) : GameDefine).gameTouch = true;
          this.setTweenAnim(this.removeWeaponList, 0.3);
        }

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

        onRerollBtn() {
          game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).WEAPON_REMOVE_REFRESH);
        }

        onEnable() {
          this.gameCtrl.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.gameCtrl.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.gameCtrl.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TAP_BTN, this.onTapBtn, this);
        }

        onDisable() {
          this.gameCtrl.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.gameCtrl.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.gameCtrl.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TAP_BTN, this.onTapBtn, this);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weaponManager", [_dec4], {
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
//# sourceMappingURL=443c05a027ebe780a9fe039a05508f7e0e2f54f0.js.map