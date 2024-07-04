System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, Layout, Sprite, Vec3, v3, SpriteFrame, UIOpacity, v2, Rect, game, resources, Constants, GridData, GridObj, GridBgItem, WeaponItem, BlockUtil, EventConstant, GridBgObj, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, GridMapManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../../Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBagModel(extras) {
    _reporterNs.report("BagModel", "../../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridBgItem(extras) {
    _reporterNs.report("GridBgItem", "../Grid/GridBgItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponBgItem(extras) {
    _reporterNs.report("WeaponBgItem", "../../Weapon/WeaponBgItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponItem(extras) {
    _reporterNs.report("WeaponItem", "../../Weapon/WeaponItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockUtil(extras) {
    _reporterNs.report("BlockUtil", "../../Util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventConstant(extras) {
    _reporterNs.report("EventConstant", "../../EventConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponModel(extras) {
    _reporterNs.report("WeaponModel", "../../Data/WeaponData", _context.meta, extras);
  }

  _export("GridBgObj", void 0);

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
      UITransform = _cc.UITransform;
      Layout = _cc.Layout;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      SpriteFrame = _cc.SpriteFrame;
      UIOpacity = _cc.UIOpacity;
      v2 = _cc.v2;
      Rect = _cc.Rect;
      game = _cc.game;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      Constants = _unresolved_2.Constants;
    }, function (_unresolved_3) {
      GridData = _unresolved_3.GridData;
      GridObj = _unresolved_3.GridObj;
    }, function (_unresolved_4) {
      GridBgItem = _unresolved_4.GridBgItem;
    }, function (_unresolved_5) {
      WeaponItem = _unresolved_5.WeaponItem;
    }, function (_unresolved_6) {
      BlockUtil = _unresolved_6.BlockUtil;
    }, function (_unresolved_7) {
      EventConstant = _unresolved_7.EventConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1f90CVuh9HxJDObLrmW0/c", "GridMapManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'Layout', 'Sprite', 'Vec3', 'Size', 'v3', 'SpriteFrame', 'UIOpacity', 'Vec2', 'v2', 'Rect', 'tween', 'game', 'instantiate', 'resources']); // import { oops } from '../../../../../script-oops/core/Oops';


      ({
        ccclass,
        property
      } = _decorator);

      _export("GridMapManager", GridMapManager = (_dec = ccclass('GridMapManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = class GridMapManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgs", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          _initializerDefineProperty(this, "gridList", _descriptor3, this);

          //拥有格子
          _initializerDefineProperty(this, "allGridList", _descriptor4, this);

          //所有格子列表
          _initializerDefineProperty(this, "weaponList", _descriptor5, this);

          _initializerDefineProperty(this, "removeWeaponList", _descriptor6, this);

          _initializerDefineProperty(this, "preWeaponList", _descriptor7, this);

          _initializerDefineProperty(this, "preBg", _descriptor8, this);

          this._gridRes = ['bag1', 'bag1', 'bag3', 'bag5', 'bag5', 'bag6', 'bag6', 'bag7', 'bag7', 'bag8', 'bag8', 'bag9', 'bag'];
          //背包背景图
          this._padding = 90;
          //周围内边距距离
          this.startPoint = null;
          //拥有格子gridList 
          this._isTouch = false;
          //是否被点击
          this._offfSet = new Vec3(0, 0, 0);
          //移动偏移 
          this._startPos = new Vec3(0, 0, 0);
          //weaponList初始位置
          this._placeStatus = false;
          //是否正确放置了
          this._temPos = new Vec3(0, 0, 0);
          this._temPoint = null;
          this._temAddPoint = null;
          //新增格子
          this._mainAreaKey = '1';
          //原区域key 
          this._addPlaceAreaData = new Map();
        }

        //新增放置区域数据  key=>placeAreaKey
        init() {
          this.initGridRes();
          this.initStatPoint();
        }
        /* 初始拥有格子在背景格子中的位置 */


        initStatPoint() {
          let max_gridLenArr = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.max_gridLen.split('_');
          let private_gridLenArr = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.private_gridLen.split('_');
          let startRow = Math.floor((Number(max_gridLenArr[0]) - Number(private_gridLenArr[0])) / 2);
          let startCol = Math.floor((Number(max_gridLenArr[1]) - Number(private_gridLenArr[1])) / 2);
          let gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          gridObj.row = startRow;
          gridObj.col = startCol;
          this.startPoint = gridObj;
        }
        /* 所有格子适配 */


        initAllGridRes() {
          let space = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.space;
          let size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getMaxGridMapSize();
          let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth;
          this.allGridList.getComponent(UITransform).setContentSize(size);
          this.allGridList.getComponent(Layout).spacingX = space;
          this.allGridList.getComponent(Layout).spacingY = space;
          this.bg.getComponent(UITransform).setContentSize(size.width + this._padding, size.height + this._padding);
          this.bg.getComponent(Layout).paddingTop = this._padding / 2;
          this.bg.getComponent(Layout).paddingBottom = this._padding / 2;
          this.bg.getComponent(Layout).paddingLeft = this._padding / 2;
          this.bg.getComponent(Layout).paddingRight = this._padding / 2;
          this.allGridList.getComponent(Layout).updateLayout(true);
          this.bg.getComponent(Layout).updateLayout(true);
          this.allGridList.setPosition(-size.width / 2, size.height / 2);
          this.removeWeaponList.setPosition(0, -size.height / 2 - 100);

          for (let i = 0; i < this._gridRes.length; i++) {
            const res = this._gridRes[i];
            let sprite = this.bgs[i].getComponent(Sprite);
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).gridPath + res + '/spriteFrame'; // oops.res.load(path, SpriteFrame, (err: Error | null, content: SpriteFrame) => {
            //     sprite.spriteFrame = content;
            //     let pos: Readonly<Vec3> = this.resNodePos(i, size, this._padding, gridWidth);
            //     if (!pos.equals(Vec3.ZERO)) {
            //         this.bgs[i].setPosition(pos);
            //     }
            // });

            resources.load(path, SpriteFrame, (err, content) => {
              if (err) {
                console.error('Failed to load SpriteFrame:', err);
                return;
              }

              sprite.spriteFrame = content;
              let pos = this.resNodePos(i, size, this._padding, gridWidth);

              if (!pos.equals(Vec3.ZERO)) {
                this.bgs[i].setPosition(pos);
              }
            });
          }
        }

        initGridRes() {
          let space = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.space;
          let size = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapSize();
          let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth;
          let bagCfg = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg;
          let rowColArr = bagCfg.private_gridLen.split('_');
          this.gridList.getComponent(UITransform).setContentSize(size);
          this.gridList.getComponent(Layout).spacingX = space;
          this.gridList.getComponent(Layout).spacingY = space;
          this.bg.getComponent(UITransform).setContentSize(size.width + this._padding, size.height + this._padding);
          this.bg.getComponent(Layout).paddingTop = this._padding / 2;
          this.bg.getComponent(Layout).paddingBottom = this._padding / 2;
          this.bg.getComponent(Layout).paddingLeft = this._padding / 2;
          this.bg.getComponent(Layout).paddingRight = this._padding / 2;
          this.gridList.getComponent(Layout).updateLayout(true);
          this.bg.getComponent(Layout).updateLayout(true);
          this.gridList.setPosition(-size.width / 2, size.height / 2);
          this.weaponList.setPosition(-size.width / 2, size.height / 2);
          this.preWeaponList.setPosition(-size.width / 2, size.height / 2);
          this.weaponList.getComponent(UITransform).setContentSize(size.width, size.height);
          this.preWeaponList.getComponent(UITransform).setContentSize(size.width, size.height);
          let offerY = Number(rowColArr[0]) > 5 ? 100 : 200;
          this.removeWeaponList.setPosition(0, -size.height / 2 - offerY);

          for (let i = 0; i < this._gridRes.length; i++) {
            const res = this._gridRes[i];
            let sprite = this.bgs[i].getComponent(Sprite);
            let path = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).gridPath + res + '/spriteFrame'; // oops.res.load(path, SpriteFrame, (err: Error | null, content: SpriteFrame) => {
            //     sprite.spriteFrame = content;
            //     let pos: Readonly<Vec3> = this.resNodePos(i, size, this._padding, gridWidth);
            //     if (!pos.equals(Vec3.ZERO)) {
            //         this.bgs[i].setPosition(pos);
            //     }
            // });

            resources.load(path, SpriteFrame, (err, content) => {
              if (err) {
                console.error('Failed to load SpriteFrame:', err);
                return;
              }

              sprite.spriteFrame = content;
              let pos = this.resNodePos(i, size, this._padding, gridWidth);

              if (!pos.equals(Vec3.ZERO)) {
                this.bgs[i].setPosition(pos);
              }
            });
          }
        }

        resNodePos(i, size, padding, gridWidth) {
          let pos = Vec3.ZERO;

          switch (i) {
            case 0:
              pos = v3(-(size.width - 100) / 2, -size.height / 2 - 10, 0);
              break;

            case 1:
              pos = v3((size.width - 100) / 2, -size.height / 2 - 10, 0);
              break;

            case 2:
              pos = v3(0, size.height / 2 + padding / 2 - padding / 2 / 3, 0);
              break;

            case 3:
              pos = v3(size.width / 2 + padding / 2 / 3, size.height / 2, 0);
              break;

            case 4:
              pos = v3(-(size.width / 2 + padding / 2 / 3), size.height / 2, 0);
              break;

            case 5:
              pos = v3(-(gridWidth / 2 + gridWidth) + 10, size.height / 2 + padding / 2, 0);
              break;

            case 6:
              pos = v3(gridWidth / 2 + gridWidth - 10, size.height / 2 + padding / 2, 0);
              break;

            case 7:
              pos = v3(-size.width / 2 - padding / 4, -size.height / 2 + gridWidth / 2 + padding / 4, 0);
              break;

            case 8:
              pos = v3(size.width / 2 + padding / 4, -size.height / 2 + gridWidth / 2 + padding / 4, 0);
              break;

            case 9:
              pos = v3(-(size.width / 2 + padding / 2 / 3), size.height / 2 - 30, 0);
              break;

            case 10:
              pos = v3(size.width / 2 + padding / 2 / 3, size.height / 2 - 30, 0);
              break;

            case 11:
              pos = v3(0, size.height / 2 - padding / 2 + 20, 0);
              this.bgs[i].getComponent(UITransform).width = size.width;
              break;
          }

          return pos;
        }
        /* 设置节点透明度 */


        setNodeOpacity(value) {
          this.weaponList.getComponent(UIOpacity).opacity = value;

          for (let i = 0; i < this.removeWeaponList.children.length; i++) {
            const element = this.removeWeaponList.children[i];

            if (element.getComponent(_crd && WeaponItem === void 0 ? (_reportPossibleCrUseOfWeaponItem({
              error: Error()
            }), WeaponItem) : WeaponItem)) {
              element.getComponent(UIOpacity).opacity = value;
            }
          }
        }
        /* 设置区域占位key */


        setMainPlaceAreaKey(startGridObj) {
          let gripObjArr = this.getGridMapObjArr();
          let items = this.allGridList.children;
          let data = [];

          for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj = gripObjArr[index];
            let griddata = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridMapData();
            let value = griddata[subGridObj.row][subGridObj.col];
            let row = startGridObj.row + subGridObj.row;
            let col = startGridObj.col + subGridObj.col;
            let newGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
              error: Error()
            }), GridObj) : GridObj)();
            newGridObj.row = row;
            newGridObj.col = col;
            data.push(newGridObj);
            let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
            let gridBgItem = items[newIndex];
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).placeAreaKey = this._mainAreaKey;
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).gridValue = value;
          }

          let gridBgObj = new GridBgObj();
          gridBgObj.item = this.weaponList;
          gridBgObj.data = data;

          this._addPlaceAreaData.set(this._mainAreaKey, gridBgObj);
        }
        /* 设置新增格子区域的占位key */


        setAddPlaceAreaKey(weaponBgItem) {
          let startGridObj = this._temAddPoint;
          let gripObjArr = this.getPointGridObjArr(weaponBgItem.weaponCfg);
          let items = this.allGridList.children;
          let data = [];

          for (let index = 0; index < gripObjArr.length; index++) {
            const subGridObj = gripObjArr[index];
            let row = startGridObj.row + subGridObj.row;
            let col = startGridObj.col + subGridObj.col;
            let newGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
              error: Error()
            }), GridObj) : GridObj)();
            newGridObj.row = row;
            newGridObj.col = col;
            data.push(newGridObj);
            let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
            let gridBgItem = items[newIndex];
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).placeAreaKey = weaponBgItem.weaponKey;
          }

          let gridBgObj = new GridBgObj();
          gridBgObj.item = weaponBgItem.node;
          gridBgObj.data = data;

          this._addPlaceAreaData.set(weaponBgItem.weaponKey, gridBgObj);
        }
        /* 清除区域key 和区域值 */


        delPlaceAreaKey(key) {
          let items = this.allGridList.children;

          for (let index = 0; index < items.length; index++) {
            const gridBgItem = items[index];
            gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).delPlaceAreaKey(key);
          }
        }
        /**获取格子连接状态 */


        getConnectStatus(gridObj) {
          let bagCfg = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg;
          let row_col = bagCfg.max_gridLen.split('_');
          let rowLen = Number(row_col[0]);
          let colLen = Number(row_col[1]); // 边界检查

          if (gridObj.row < 0 || gridObj.col < 0 || gridObj.row >= rowLen || gridObj.col >= colLen) {
            return false;
          } // 获取网格在列表中的索引


          let index = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridBgIndexByTiled(gridObj.row, gridObj.col);

          if (index === -1 || index >= this.allGridList.children.length) {
            return false;
          } // 获取对应的网格项


          let item = this.allGridList.children[index];

          if (!item || !item.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
            error: Error()
          }), GridBgItem) : GridBgItem)) {
            return false;
          } // 检查是否和主区域相连


          return item.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
            error: Error()
          }), GridBgItem) : GridBgItem).placeAreaKey === this._mainAreaKey;
        }
        /* 检测新增区域数据是否相连 */


        checkAddAreaGridData() {
          let isConnected = true; // 默认连接

          let item = null;

          for (let [key, gridBgObj] of this._addPlaceAreaData) {
            if (key !== this._mainAreaKey) {
              item = gridBgObj.item;
              let data = gridBgObj.data;
              let isConnect = false; // 定义四个方向的偏移量

              const directions = [{
                row: -1,
                col: 0
              }, // 上
              {
                row: 1,
                col: 0
              }, // 下
              {
                row: 0,
                col: -1
              }, // 左
              {
                row: 0,
                col: 1
              } // 右
              ]; // 检查每个方向上的连接状态

              for (let direction of directions) {
                for (let gridObj of data) {
                  let checkObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                    error: Error()
                  }), GridObj) : GridObj)();
                  checkObj.row = gridObj.row + direction.row;
                  checkObj.col = gridObj.col + direction.col;

                  if (this.getConnectStatus(checkObj)) {
                    isConnect = true;
                    break;
                  }
                }

                if (isConnect) {
                  break;
                }
              }

              if (!isConnect) {
                // 只要有一块不连接就不重新调整格子
                game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
                  error: Error()
                }), EventConstant) : EventConstant).ADD_REMOVE_WEAPON_LIST, item);

                this._addPlaceAreaData.delete(key);

                this.delPlaceAreaKey(key);
                isConnected = false;
                break;
              }
            }
          }

          if (isConnected) {
            item.destroy();
            this.rebuildGridData();
          }
        }
        /* 重组拥有格子数据 */


        rebuildGridData() {
          let data = [];

          this._addPlaceAreaData.forEach((gridBgObj, key) => {
            let gridObjArr = gridBgObj.data;
            data = data.concat(gridObjArr);
          });

          let rowMinMax = [];
          let colMinMax = [];
          data.sort((x, y) => {
            return x.row - y.row;
          });
          rowMinMax.push(data[0].row);
          rowMinMax.push(data[data.length - 1].row);
          data.sort((x, y) => {
            return x.col - y.col;
          });
          colMinMax.push(data[0].col);
          colMinMax.push(data[data.length - 1].col); //重组新格子数据

          let newdata = [];
          let items = this.allGridList.children;

          for (let i = rowMinMax[0]; i <= rowMinMax[1]; i++) {
            let rowData = [];

            for (let j = colMinMax[0]; j <= colMinMax[1]; j++) {
              let index = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                error: Error()
              }), GridData) : GridData).instance.getGridBgIndexByTiled(i, j);
              let gridBgItem = items[index];
              let value = gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).placeAreaKey ? gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).gridValue : '';
              rowData.push(value);
            }

            newdata.push(rowData);
          }

          (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.setRebuildGridMapData(newdata);
          game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).INIT_BUILD_GRID_LIST);
          game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).INIT_BUILD_WEAPON_POS);
          this.startPoint.row = rowMinMax[0];
          this.startPoint.col = colMinMax[0];
        }
        /* 放置新增格子开始 */


        onPlaceGridStart(weaponBgItem) {
          if (!this.allGridList.active) {
            this.initAllGridListPlaceValue();
            (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridEditMode = true;
            this.gridList.parent = this.preBg;
            weaponBgItem.node.parent = this.node;
            this.allGridList.active = true; //设置透明度

            this.setNodeOpacity(100);
            this.initAllGridRes();
            this.node.parent.getComponent(UITransform).height = this.allGridList.getComponent(UITransform).height;
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).SHOW_HIDE_PLACE_LIST, true); //设置拥有格子列表位置

            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridPosByTiled(this.startPoint);
            let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
            let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
            let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridWidth;
            let gridHeight = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridHeight;
            this.gridList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.weaponList.setPosition(newPos.x - gridWidth / 2, newPos.y + gridHeight / 2);
            this.setMainPlaceAreaKey(this.startPoint);
          }

          this.delPlaceAreaKey(weaponBgItem.weaponKey);
        }
        /* 放置新增格子移动 */


        onPlaceGridMove(weaponBgItem) {
          weaponBgItem.node.parent = this.node;
          this.initAllGridListTips();
          let firstGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          firstGridObj.row = 0;
          firstGridObj.col = 0;
          let tieldPos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridPosByTiled(firstGridObj);
          let wpos = weaponBgItem.point.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
          let checkPos = this.allGridList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
          let items = this.allGridList.children;
          let all_row_col = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.max_gridLen.split('_');
          this._placeStatus = false;

          for (let i = 0; i < items.length; i++) {
            const element = items[i];
            let gridObj = element.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).gridObj;
            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridPosByTiled(gridObj);
            let width = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridWidth;
            let height = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridHeight;
            let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);

            if (rect.contains(v2(checkPos.x, checkPos.y))) {
              let gripObjArr = this.getPointGridObjArr(weaponBgItem.weaponCfg);
              let placeArr = []; //0 为未放置

              for (let index = 0; index < gripObjArr.length; index++) {
                const subGridObj = gripObjArr[index];
                let row = gridObj.row + subGridObj.row;
                let col = gridObj.col + subGridObj.col;

                if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                  let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                    error: Error()
                  }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
                  let gridBgItem = items[newIndex]; //检测格子占用

                  if (!gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                    error: Error()
                  }), GridBgItem) : GridBgItem).placeAreaKey) {
                    gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                      error: Error()
                    }), GridBgItem) : GridBgItem).setTipsGreen();
                    placeArr.push(1);
                  } else {
                    placeArr.push(0);
                  }
                } else {
                  placeArr.push(0);
                }
              }

              if (placeArr.includes(0)) {
                this._placeStatus = false;
              } else {
                this._placeStatus = true; //设置新坐标

                let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
                let startPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                let points = weaponBgItem.weaponCfg.Points;
                let data = [];

                for (let n = 0; n < points.length; n++) {
                  const element = points[n];

                  for (let m = 0; m < element.length; m++) {
                    let gridObj1 = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                      error: Error()
                    }), GridObj) : GridObj)();
                    gridObj1.row = n;
                    gridObj1.col = m;
                    data.push(gridObj1);
                  }
                }

                const endGridObj = data[data.length - 1];
                let newEndObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                newEndObj.row = gridObj.row + endGridObj.row;
                newEndObj.col = gridObj.col + endGridObj.col;
                let pos1 = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.getGridPosByTiled(newEndObj);
                let wpos1 = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos1);
                let endPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos1);
                let centePos = new Vec3(0, 0, 0);
                centePos.x = (startPos.x + endPos.x) / 2;
                centePos.y = (startPos.y + endPos.y) / 2;
                this._temPos = centePos;
                this._temAddPoint = (_crd && BlockUtil === void 0 ? (_reportPossibleCrUseOfBlockUtil({
                  error: Error()
                }), BlockUtil) : BlockUtil).clone(gridObj);
              }

              break;
            }
          }
        }
        /* 放置新增格子完成 */


        onPlaceGridEnd(weaponBgItem) {
          let item = weaponBgItem.node;
          this.initAllGridListTips();

          if (this._placeStatus) {
            item.setPosition(this._temPos);
            this.setAddPlaceAreaKey(weaponBgItem);
          } else {
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).ADD_REMOVE_WEAPON_LIST, item);

            this._addPlaceAreaData.delete(weaponBgItem.weaponKey);
          }

          this._placeStatus = false;
        }
        /* 放置格子确定 */


        onPlaceGridFinish() {
          if (this.allGridList.active) {
            this.checkAddAreaGridData();
            (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridEditMode = false;
            this.allGridList.active = false;
            this.gridList.parent = this.bg; //设置透明度

            this.setNodeOpacity(255);
            this.initGridRes();
            game.emit((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
              error: Error()
            }), EventConstant) : EventConstant).SHOW_HIDE_PLACE_LIST, false);
          }
        }
        /* 获取拥有格子里的第一个有格子的数据 */


        getFirstGridObj() {
          let gridMapData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();
          let gripObjArr = [];
          let gripObj = null;

          for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                gripObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gripObj.row = i;
                gripObj.col = j;
                break;
              }
            }

            if (gripObj) {
              break;
            }
          }

          return gripObj;
        }
        /* 获取拥有格子的位置数据 */


        getGridMapObjArr() {
          let gridMapData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();
          let gripObjArr = [];

          for (let i = 0; i < gridMapData.length; i++) {
            const element = gridMapData[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                let gripObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gripObj.row = i;
                gripObj.col = j;
                gripObjArr.push(gripObj);
              }
            }
          }

          return gripObjArr;
        }

        getPointGridObjArr(weaponCfg) {
          let point = weaponCfg.Points;
          let gripObjArr = [];

          for (let i = 0; i < point.length; i++) {
            const element = point[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                let gripObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gripObj.row = i;
                gripObj.col = j;
                gripObjArr.push(gripObj);
              }
            }
          }

          return gripObjArr;
        }
        /* 初始格子颜色 */


        initAllGridListTips() {
          let items = this.allGridList.children;

          for (let index = 0; index < items.length; index++) {
            const gridBg = items[index];
            gridBg.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).setTipsDefault();
          }
        }
        /* 初始格子占有 */


        initAllGridListPlaceValue() {
          let items = this.allGridList.children;

          for (let index = 0; index < items.length; index++) {
            const gridBg = items[index];
            gridBg.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).placeAreaKey = '';
          }
        }
        /* 检测坐标是否在格子中 */


        checkAllGridListByPos(checkPos) {
          let items = this.allGridList.children;
          let all_row_col = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.bagCfg.max_gridLen.split('_');
          this._placeStatus = false;

          for (let i = 0; i < items.length; i++) {
            const element = items[i];
            let gridObj = element.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
              error: Error()
            }), GridBgItem) : GridBgItem).gridObj;
            let pos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.getGridPosByTiled(gridObj);
            let width = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridWidth;
            let height = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
              error: Error()
            }), GridData) : GridData).instance.gridHeight;
            let rect = new Rect(pos.x - width / 2, pos.y - height / 2, width, height);

            if (rect.contains(v2(checkPos.x, checkPos.y))) {
              let gripObjArr = this.getGridMapObjArr();
              let placeArr = []; //0 为未放置

              for (let index = 0; index < gripObjArr.length; index++) {
                const subGridObj = gripObjArr[index];
                let row = gridObj.row + subGridObj.row;
                let col = gridObj.col + subGridObj.col;

                if (row < Number(all_row_col[0]) && col < Number(all_row_col[1])) {
                  let newIndex = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                    error: Error()
                  }), GridData) : GridData).instance.getGridBgIndexByTiled(row, col);
                  let gridBgItem = items[newIndex]; //是否格子占用

                  if (!gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                    error: Error()
                  }), GridBgItem) : GridBgItem).placeAreaKey) {
                    gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                      error: Error()
                    }), GridBgItem) : GridBgItem).setTipsGreen();
                    placeArr.push(1);
                  } else {
                    placeArr.push(0);
                  }
                } else {
                  placeArr.push(0);
                }
              }

              if (placeArr.includes(0)) {
                this._placeStatus = false;
              } else {
                this._placeStatus = true;
                let wpos = this.allGridList.getComponent(UITransform).convertToWorldSpaceAR(pos);
                let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wpos);
                let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridWidth;
                let gridHeight = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridHeight;
                this._temPos.x = newPos.x - gridWidth / 2;
                this._temPos.y = newPos.y + gridHeight / 2;
                this._temPoint = (_crd && BlockUtil === void 0 ? (_reportPossibleCrUseOfBlockUtil({
                  error: Error()
                }), BlockUtil) : BlockUtil).clone(gridObj);
              }

              break;
            }
          }
        }
        /* 设置移动提示 */


        setGridMoveTips() {
          this.initAllGridListTips(); //检测第一个格子是否在所有格子里中

          let firstGridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          firstGridObj.row = 0;
          firstGridObj.col = 0;
          let tieldPos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridPosByTiled(firstGridObj);
          let wpos = this.gridList.getComponent(UITransform).convertToWorldSpaceAR(tieldPos);
          let pos = this.allGridList.getComponent(UITransform).convertToNodeSpaceAR(wpos);
          this.checkAllGridListByPos(pos);
        }
        /**放置已拥有的格子移动,暂时功能需求不需要 */

        /*放置拥有格子触摸点击 */


        onTouchStart(wpos) {
          //是否触摸到拥有格子列表
          let touchPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0)); //坐标在可用格子中时

          let gridData = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.getGridMapData();
          let touched = false;

          for (let i = 0; i < gridData.length; i++) {
            const element = gridData[i];

            for (let j = 0; j < element.length; j++) {
              const value = element[j];

              if (value) {
                let gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
                  error: Error()
                }), GridObj) : GridObj)();
                gridObj.row = i;
                gridObj.col = j;
                let gridPos = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.getGridPosByTiled(gridObj);
                let gridWpos = this.gridList.getComponent(UITransform).convertToWorldSpaceAR(gridPos);
                let newPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(gridWpos);
                let gridWidth = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridWidth;
                let gridHeight = (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
                  error: Error()
                }), GridData) : GridData).instance.gridHeight;
                let rect = new Rect(newPos.x - gridWidth / 2, newPos.y - gridHeight / 2, gridWidth, gridWidth);

                if (rect.contains(v2(touchPos.x, touchPos.y))) {
                  touched = true;
                  break;
                }
              }
            }

            if (touched) {
              break;
            }
          }

          if ((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridEditMode && touched) {
            this._isTouch = true;
            this._offfSet = this.weaponList.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            this._startPos = this.weaponList.getPosition();
            this.delPlaceAreaKey(this._mainAreaKey);
          }
        }
        /* 放置拥有格子移动 */


        onTouchMove(wpos) {
          if (this._isTouch) {
            let touchPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(wpos.x, wpos.y, 0));
            let pos = new Vec3(touchPos.x - this._offfSet.x, touchPos.y - this._offfSet.y);
            this.gridList.setPosition(pos);
            this.weaponList.setPosition(pos); //设置移动提示

            this.setGridMoveTips();
          }
        }
        /* 放置拥有格子完成 */


        onTouchEnd(wpos) {
          if (this._isTouch) {
            this._isTouch = false; //是否放置或还原

            if (this._placeStatus) {
              this._startPos = this._temPos;
              this.startPoint = this._temPoint;
            }

            this.gridList.setPosition(this._startPos);
            this.weaponList.setPosition(this._startPos);
            this._placeStatus = false;
            this.initAllGridListTips();
            this.setMainPlaceAreaKey(this.startPoint);
          }
        }

        onTouchCancle(wpos) {
          if (this._isTouch) {
            this._isTouch = false;
            this._placeStatus = false;
            this.gridList.setPosition(this._startPos);
            this.weaponList.setPosition(this._startPos);
            this.initAllGridListTips();
          }
        }

        onClearAreaData() {
          this._addPlaceAreaData.clear();
        }

        onEnable() {
          //放置新增格子监听
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_START, this.onPlaceGridStart, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_MOVE, this.onPlaceGridMove, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_END, this.onPlaceGridEnd, this); //放置拥有格子监听
          // game.on(EventConstant.GAME_TOUCH_START, this.onTouchStart, this);
          // game.on(EventConstant.GAME_TOUCH_MOVE, this.onTouchMove, this);
          // game.on(EventConstant.GAME_TOUCH_END, this.onTouchEnd, this);
          // game.on(EventConstant.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).CLEAR_AREA_DATA, this.onClearAreaData, this);
          game.on((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_FINISH, this.onPlaceGridFinish, this);
        }

        onDisable() {
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_START, this.onPlaceGridStart, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_MOVE, this.onPlaceGridMove, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_END, this.onPlaceGridEnd, this); // game.off(EventConstant.GAME_TOUCH_START, this.onTouchStart, this);
          // game.off(EventConstant.GAME_TOUCH_MOVE, this.onTouchMove, this);
          // game.off(EventConstant.GAME_TOUCH_END, this.onTouchEnd, this);
          // game.off(EventConstant.GAME_TOUCH_CANCLE, this.onTouchEnd, this);

          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).CLEAR_AREA_DATA, this.onClearAreaData, this);
          game.off((_crd && EventConstant === void 0 ? (_reportPossibleCrUseOfEventConstant({
            error: Error()
          }), EventConstant) : EventConstant).PLACE_GRID_FINISH, this.onPlaceGridFinish, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "allGridList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "weaponList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "removeWeaponList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "preWeaponList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "preBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _export("GridBgObj", GridBgObj = class GridBgObj {
        constructor() {
          this.data = [];
          //位置数据
          this.item = null;
        } //区域节点


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4d54e524b9ec20855bdc26ebe35ff8526f5a643.js.map