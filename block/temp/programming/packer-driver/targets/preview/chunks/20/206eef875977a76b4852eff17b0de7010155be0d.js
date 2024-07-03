System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, instantiate, Intersection2D, Layout, Node, Prefab, UITransform, v2, v3, GridData, CoinObj, WeaponData, Constants, WeaponItem, WeaponBgItem, oops, BlockUtil, EventConstant, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, WeaponManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponObj(extras) {
    _reporterNs.report("WeaponObj", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoinObj(extras) {
    _reporterNs.report("CoinObj", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "../Data/WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../Weapon/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponBgItem(extras) {
    _reporterNs.report("WeaponBgItem", "../Weapon/WeaponBgItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../../script-oops/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockUtil(extras) {
    _reporterNs.report("BlockUtil", "../../../../battle/util/Util", _context.meta, extras);
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
      Intersection2D = _cc.Intersection2D;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      v2 = _cc.v2;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GridData = _unresolved_2.GridData;
    }, function (_unresolved_3) {
      CoinObj = _unresolved_3.CoinObj;
      WeaponData = _unresolved_3.WeaponData;
    }, function (_unresolved_4) {
      Constants = _unresolved_4.Constants;
    }, function (_unresolved_5) {
      WeaponItem = _unresolved_5.WeaponItem;
    }, function (_unresolved_6) {
      WeaponBgItem = _unresolved_6.WeaponBgItem;
    }, function (_unresolved_7) {
      oops = _unresolved_7.oops;
    }, function (_unresolved_8) {
      BlockUtil = _unresolved_8.BlockUtil;
    }, function (_unresolved_9) {
      EventConstant = _unresolved_9.EventConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80502QRwFVKKqrkACu0+LK9", "WeaponManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'game', 'instantiate', 'Intersection2D', 'Layout', 'Node', 'Prefab', 'UITransform', 'v2', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeaponManager", WeaponManager = (_dec = ccclass('WeaponManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class WeaponManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "weaponList", _descriptor, this);

          _initializerDefineProperty(this, "preWeaponList", _descriptor2, this);

          _initializerDefineProperty(this, "removeWeaponList", _descriptor3, this);
        }

        init() {
          (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.init();
          this.initWeaponListPos();
          this.initWeaponList();
          this.initRemoveWeaponList();
        }

        initWeaponListPos() {
          var size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapSize();
          this.weaponList.setPosition(-size.width / 2, size.height / 2);
          this.preWeaponList.setPosition(-size.width / 2, size.height / 2);
        }

        initWeaponList() {
          var itemData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridItemMapData();
          itemData.forEach((weaponObj, key) => {
            var gridObjArr = weaponObj.data;
            var weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.getWeaponCfgById(weaponObj.wid);
            var res = weaponCfg.Type;
            var path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).weaponPath;
            var pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getItemPosByTiledObj(gridObjArr);
            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load(path, Prefab, (err, content) => {
              var weaponItem = instantiate(content);
              weaponItem.parent = this.weaponList;
              weaponItem.setPosition(pos);
              weaponItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                error: Error()
              }), WeaponItem) : WeaponItem).init(weaponCfg, key, true);
            });
          });
        }
        /* 初始化卸下(掉落)的武器列表 */


        initRemoveWeaponList() {
          var _this = this;

          //调试获取1级武器
          this.removeWeaponList.removeAllChildren();
          var weaponIdData = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.getWeaponPool(); //生成格子

          var placeId = this.getPlaceGridId();

          if (placeId) {
            var randIndex = Math.floor(Math.random() * weaponIdData.length);
            weaponIdData.splice(randIndex, 1, placeId);
          }

          var _loop = function _loop() {
            var weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
              error: Error()
            }), WeaponData) : WeaponData).instance.getWeaponCfgById(weaponIdData[i]);
            var key = (_crd && BlockUtil === void 0 ? (_reportPossibleCrUseOfBlockUtil({
              error: Error()
            }), BlockUtil) : BlockUtil).getUuid(10); //TODO:流水ID

            var path = '1';

            if (weaponCfg.itemType == "1") {
              path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).weaponPath;
            } else if (weaponCfg.itemType == "2") {// TODO: 少一个配件
            } else if (weaponCfg.itemType == "3") {
              path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).weaponBgPath;
            }

            (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.load(path, Prefab, (err, content) => {
              var weaponItem = instantiate(content);
              weaponItem.parent = _this.removeWeaponList;

              if (weaponCfg.itemType == "1") {
                weaponItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                  error: Error()
                }), WeaponItem) : WeaponItem).init(weaponCfg, key, false);
              } else if (weaponCfg.itemType == "2") {// TODO: 少一个配件
              } else if (weaponCfg.itemType == "3") {
                //格子
                weaponItem.getComponent(_crd && WeaponBgItem === void 0 ? (_reportPossibleCrUseOfWeaponBgItem({
                  error: Error()
                }), WeaponBgItem) : WeaponBgItem).init(weaponCfg, key, false);
              }

              _this.updateRemoveLayOut();
            });
          };

          for (var i = 0; i < weaponIdData.length; i++) {
            _loop();
          }
        }
        /* 获取可以放置的搁置id 
          0：未占位 1：占位
        */


        getPlaceGridId() {
          var bagCfg = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg;
          var row_col = bagCfg.max_gridLen.split('_');
          var row = Number(row_col[0]);
          var col = Number(row_col[1]);
          var data = [];
          var placeId = 0;

          for (var i = 0; i < row; i++) {
            var element = [];

            for (var j = 0; j < col; j++) {
              element.push(1);
            }

            data.push(element);
          }

          var gridData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();

          for (var n = 0; n < gridData.length; n++) {
            var _element = gridData[n];

            for (var m = 0; m < _element.length; m++) {
              var value = _element[m];

              if (value) {
                data[n][m] = 0;
              }
            }
          }

          placeId = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.getPlaceGridIdByWeigh(data);
          return placeId;
        }
        /* 重组武器的位置 */


        onRebuildWeaponPos() {
          var itemData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridItemMapData();
          itemData.forEach((weaponObj, key) => {
            var gridObjArr = weaponObj.data;
            var pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getItemPosByTiledObj(gridObjArr);
            var items = this.weaponList.children;

            for (var index = 0; index < items.length; index++) {
              var weaponItem = items[index];
              weaponItem.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                error: Error()
              }), WeaponItem) : WeaponItem).setBuildWeaponPos(key, pos);
            }
          });
        }
        /* 转换飞的金币动画 */


        showFlyGoldAnim() {
          if (this.removeWeaponList.children.length) {
            var items = this.removeWeaponList.children;

            for (var i = 0; i < items.length; i++) {
              var element = items[i];
              var coinObj = new (_crd && CoinObj === void 0 ? (_reportPossibleCrUseOfCoinObj({
                error: Error()
              }), CoinObj) : CoinObj)();
              coinObj.wpos = element.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              coinObj.num = (_crd && BlockUtil === void 0 ? (_reportPossibleCrUseOfBlockUtil({
                error: Error()
              }), BlockUtil) : BlockUtil).getRandomInt(5, 10);
              game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
                error: Error()
              }), EventConstant) : EventConstant).WEAPON_CHANGE_COIN, coinObj);
            }
          }
        }
        /* 隐藏显示卸载列表 */


        showHideRemoveList(status) {
          this.removeWeaponList.active = status;
        }
        /* 根据内容设置排布 */


        updateRemoveLayOut() {
          var len = this.removeWeaponList.children.length;
          var diff = len - 3 > 0 ? len - 3 : 0;
          var spaceX = 0 - diff * 10;
          this.removeWeaponList.getComponent(Layout).spacingX = spaceX;
          this.removeWeaponList.getComponent(Layout).updateLayout(true);
        }
        /* 添加到卸下武器列表 */


        onAddRemoveWeaponList(item) {
          item.parent = this.removeWeaponList;
          this.updateRemoveLayOut();
        }
        /* 添加到临时武器列表 */


        onAddPreWeaponList(item) {
          item.parent = this.preWeaponList;
        }
        /* 武器放置完成 */


        onWeaponPlace(weaponItem) {
          var gridIndexArr = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.curWeaponTildeIndex; //1.放置 2.替换 3.卸下

          if (gridIndexArr.includes(-1)) {
            //卸下(外合成)
            this.removeSynAction(weaponItem);
          } else {
            var isPlace = false; //是否替换和合成

            var synKey = ''; //被合成的装备key

            var sanmeCount = 0; //相同wid 数量

            var placeIdArr = []; //替换的武器唯一id(可能多个)

            var gridObjArr = [];

            for (var i = 0; i < gridIndexArr.length; i++) {
              var index = gridIndexArr[i];
              var gridObj = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridTiledByIndex(index);
              var gridMapData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridMapData();
              gridObjArr.push(gridObj);

              if (gridMapData[gridObj.row][gridObj.col]) {
                //占用(替换)
                if (!isPlace) {
                  isPlace = true;
                }

                var weaponKey = gridMapData[gridObj.row][gridObj.col];
                placeIdArr.push(weaponKey); //检测武器id、等级是否相同

                if ((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.checkSameWeapoIdByKey(weaponKey, weaponItem.weaponCfg.tempId)) {
                  sanmeCount++;
                  synKey = weaponKey;
                }
              }
            }

            if (isPlace) {
              //替换或合成(卸下 + 放置)
              //是否有可以合成的下一级别
              var level = weaponItem.weaponCfg.Level;
              var group = weaponItem.weaponCfg.weaponGroupNum;

              if (sanmeCount == gridIndexArr.length && (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
                error: Error()
              }), WeaponData) : WeaponData).instance.checkWeaponByLevel(level + 1, group)) {
                weaponItem.node.removeFromParent(); //合成(内合成)

                game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
                  error: Error()
                }), EventConstant) : EventConstant).WEAPON_UPGRADE, synKey, true);
              } else {
                //卸下
                this.weaponRemove(placeIdArr); //放置

                this.weaponPlace(weaponItem, gridObjArr);
              }
            } else {
              //没占用直接放置
              this.weaponPlace(weaponItem, gridObjArr);
            }
          } //设置战斗按钮状态


          game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).SET_BATTLE_BTN_STATUS); //初始状态

          game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).WEAPON_ICON_STATUS_INIT);
        }
        /* 卸下 */


        weaponRemove(placeIdArr) {
          for (var i = 0; i < placeIdArr.length; i++) {
            var weaponKey = placeIdArr[i];
            (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.deletGridDataByWeaponId(weaponKey);
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).WEAPON_REMOVE, weaponKey);
          }
        }
        /* 卸下合成 */


        removeSynAction(weaponItem) {
          var startPos = weaponItem.node.getPosition();
          var startR = 100;
          var isSyn = false;
          var synKey = ''; //被合成的装备key
          //检测是否可以外合成

          var itemArr = this.removeWeaponList.children;

          for (var i = 0; i < itemArr.length; i++) {
            var item = itemArr[i];

            if (item.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
              error: Error()
            }), WeaponItem) : WeaponItem)) {
              //是否未武器  非格子
              var wpos = item.getChildByName('icon').getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              var endPos = this.preWeaponList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
              var endR = 100;

              if (Intersection2D.circleCircle(v2(startPos.x, startPos.y), startR, v2(endPos.x, endPos.y), endR)) {
                var itemCom = item.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
                  error: Error()
                }), WeaponItem) : WeaponItem); //是否可以合成 相同等级  有可以合成的下一级

                var level = weaponItem.weaponCfg.Level;
                var group = weaponItem.weaponCfg.weaponGroupNum;

                if (weaponItem.weaponCfg.tempId == itemCom.weaponCfg.tempId && (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
                  error: Error()
                }), WeaponData) : WeaponData).instance.checkWeaponByLevel(level + 1, group)) {
                  isSyn = true;
                  synKey = itemCom.weaponKey;
                }
              }
            }
          }

          if (isSyn) {
            weaponItem.node.removeFromParent(); //合成(外合成)

            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).WEAPON_UPGRADE, synKey, false);
          } else {
            weaponItem.node.parent = this.removeWeaponList;
            weaponItem.placeStatus = false;
            weaponItem.setNodeAngel();
            this.updateRemoveLayOut();
          }
        }
        /* 放置 */


        weaponPlace(weaponItem, gridObjArr) {
          weaponItem.node.parent = this.weaponList;
          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.addGridDataByWeaponId(gridObjArr, weaponItem.weaponCfg.tempId, weaponItem.weaponKey);
          var pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getItemPosByTiledObj(gridObjArr);
          weaponItem.node.setPosition(pos);
          weaponItem.placeStatus = true;
          weaponItem.setNodeAngel();
        }

        onEnable() {
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).ADD_REMOVE_WEAPON_LIST, this.onAddRemoveWeaponList, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).ADD_PRE_WEAPON_LIST, this.onAddPreWeaponList, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).WEAPON_PlACE, this.onWeaponPlace, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).WEAPON_REMOVE_REFRESH, this.initRemoveWeaponList, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).INIT_BUILD_WEAPON_POS, this.onRebuildWeaponPos, this);
        }

        onDisable() {
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).ADD_REMOVE_WEAPON_LIST, this.onAddRemoveWeaponList, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).ADD_PRE_WEAPON_LIST, this.onAddPreWeaponList, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).WEAPON_PlACE, this.onWeaponPlace, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).WEAPON_REMOVE_REFRESH, this.initRemoveWeaponList, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).INIT_BUILD_WEAPON_POS, this.onRebuildWeaponPos, this);
        }

        clear() {
          (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "preWeaponList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "removeWeaponList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=206eef875977a76b4852eff17b0de7010155be0d.js.map