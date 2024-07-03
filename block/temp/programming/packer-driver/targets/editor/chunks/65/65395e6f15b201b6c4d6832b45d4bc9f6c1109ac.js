System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, instantiate, Layout, Sprite, SpriteFrame, UIOpacity, UITransform, v2, Vec3, WeaponData, GridData, GridObj, Constants, oops, EventConstant, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, WeaponBgItem, TouchStatus;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponModel(extras) {
    _reporterNs.report("WeaponModel", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../script-oops/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventConstant(extras) {
    _reporterNs.report("EventConstant", "../../../../constant/EventConstant", _context.meta, extras);
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
      game = _cc.game;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      WeaponData = _unresolved_2.WeaponData;
    }, function (_unresolved_3) {
      GridData = _unresolved_3.GridData;
      GridObj = _unresolved_3.GridObj;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      oops = _unresolved_5.oops;
    }, function (_unresolved_6) {
      EventConstant = _unresolved_6.EventConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f96cd2ocN1Av7siZ2Mlbz07", "WeaponBgItem", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'game', 'instantiate', 'Layout', 'Node', 'Sprite', 'SpriteFrame', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'v2', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeaponBgItem", WeaponBgItem = (_dec = ccclass('WeaponItem'), _dec2 = property(Sprite), _dec(_class = (_class2 = class WeaponBgItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "icon", _descriptor, this);

          this._touchStatus = 0;
          //当前触摸状态
          this._weaponKey = '';
          //唯一值
          this._weaponCfg = null;
          this._point = null;
          this._pointGridObj = [];
          //占用点位置
          this._placeStatus = true;
          //true:放置  false:卸下
          this._isTouch = false;
        }

        //是否被点击
        get point() {
          return this._point;
        }

        get weaponCfg() {
          return this._weaponCfg;
        }

        get weaponKey() {
          return this._weaponKey;
        }

        set placeStatus(value) {
          this._placeStatus = value;
        }

        init(weaponCfg, weaponKey, placeStatus) {
          this._pointGridObj = [];
          this._placeStatus = placeStatus;
          this._weaponKey = weaponKey;
          this._weaponCfg = weaponCfg;
          this._point = this.node.getChildByName('point');
          this.initWeaponSize();
          this.setPointPosArr();
          this.setGridIcon();
          this.setNodeAngel();
        }
        /* 初始武器格子尺寸 */


        initWeaponSize() {
          let typeArr = this._weaponCfg.Type.split('_');

          let rowLen = Number(typeArr[1]);
          let colLen = Number(typeArr[0]);
          let size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridSizeByRowCol(rowLen, colLen);

          if (size != null) {
            let scale = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.iconScale;
            this.node.getComponent(UITransform).setContentSize(size);
            this.point.setPosition(-size.width / 2, size.height / 2);
            this.icon.node.setScale(scale, scale, scale);
          }
        }
        /* 设置点坐标 */


        setPointPosArr() {
          this._pointGridObj = [];
          let point = this._weaponCfg.Points;

          for (let i = 0; i < point.length; i++) {
            const item = point[i];

            for (let j = 0; j < item.length; j++) {
              const element = item[j];

              if (element) {
                let gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gridObj.row = i;
                gridObj.col = j;

                this._pointGridObj.push(gridObj);
              }
            }
          }
        }
        /* 设置武器图标 */


        setGridIcon() {
          let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).weaponIconPath + this.weaponCfg.Res + '/spriteFrame';
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.load(path, SpriteFrame, (err, content) => {
            this.icon.spriteFrame = content; //设置格子

            let iconList = this.icon.node.parent;
            let row_col = this.weaponCfg.Type.split('_');
            let size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridSizeByRowCol(Number(row_col[1]), Number(row_col[0]));

            if (iconList != null) {
              let latticePoints = this.weaponCfg.Points;
              iconList.getComponent(Layout).spacingX = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.space;
              iconList.getComponent(Layout).spacingY = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.space;
              iconList.getComponent(UITransform).width = size.width;
              iconList.getComponent(Layout).updateLayout(true);

              for (let i = 0; i < latticePoints.length; i++) {
                const element = latticePoints[i];

                for (let j = 0; j < element.length; j++) {
                  const value = element[j];
                  let item = instantiate(this.icon.node);
                  item.active = true;
                  item.parent = iconList;
                  item.getComponent(UIOpacity).opacity = value ? 255 : 0;
                }
              }
            }
          });
        }

        setNodeAngel() {
          let angle = this._placeStatus ? 0 : 10;
          this.node.angle = angle;
        }
        /* 格子卸下 */


        onGridRemove(id) {
          if (this.weaponKey == id) {
            //添加到待上阵武器列表
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).ADD_REMOVE_WEAPON_LIST, this.node);
            this.placeStatus = false;
            this.setNodeAngel();
          }
        }
        /* 放置完成 */


        onPlaceFinish() {
          //放置完成
          game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_END, this);
        }
        /* 关闭多触碰 */

        /* 触摸点击 */


        onTouchStart(wpos) {
          //是否触摸到武器(只能选中一个)
          let touchPos = this.point.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));

          if ((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.checkPointinGrid(v2(touchPos.x, touchPos.y), this._pointGridObj) && !(_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.isSelect) {
            this._isTouch = true;
            (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.isSelect = true;
            this._touchStatus = TouchStatus.START; //编辑格子

            this.placeStatus = true;
            this.setNodeAngel();
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).PLACE_GRID_START, this);
            let pos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            this.node.setPosition(pos.x, pos.y);
          }
        }

        onTouchMove(wpos) {
          if (this._isTouch) {
            this._touchStatus = TouchStatus.MOVE;
            let pos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            this.node.setPosition(pos.x, pos.y);
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).PLACE_GRID_MOVE, this);
          }
        }

        onTouchEnd(wpos) {
          if (this._isTouch) {
            this._isTouch = false;
            (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.isSelect = false;
            this.onPlaceFinish();
            this._touchStatus = TouchStatus.END;
          }
        }

        onTouchCancle(wpos) {
          if (this._isTouch) {
            this._isTouch = false;
            (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.isSelect = false;
            this._touchStatus = TouchStatus.CANCEL;
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).ADD_REMOVE_WEAPON_LIST, this.node);
          }
        }

        onEnable() {
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_START, this.onTouchStart, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_MOVE, this.onTouchMove, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_END, this.onTouchEnd, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_CANCLE, this.onTouchEnd, this);
        }

        onDisable() {
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_START, this.onTouchStart, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_MOVE, this.onTouchMove, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_END, this.onTouchEnd, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).GAME_TOUCH_CANCLE, this.onTouchEnd, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("TouchStatus", TouchStatus = /*#__PURE__*/function (TouchStatus) {
        TouchStatus[TouchStatus["DEFAULT"] = 0] = "DEFAULT";
        TouchStatus[TouchStatus["START"] = 1] = "START";
        TouchStatus[TouchStatus["MOVE"] = 2] = "MOVE";
        TouchStatus[TouchStatus["END"] = 3] = "END";
        TouchStatus[TouchStatus["CANCEL"] = 4] = "CANCEL";
        return TouchStatus;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=65395e6f15b201b6c4d6832b45d4bc9f6c1109ac.js.map