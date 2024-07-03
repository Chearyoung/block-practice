System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, Size, GridItem, GridBgItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, GridManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGridItem(extras) {
    _reporterNs.report("GridItem", "../Grid/GridItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridBgItem(extras) {
    _reporterNs.report("GridBgItem", "../Grid/GridBgItem", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Size = _cc.Size;
    }, function (_unresolved_2) {
      GridItem = _unresolved_2.GridItem;
    }, function (_unresolved_3) {
      GridBgItem = _unresolved_3.GridBgItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbb1b4km3xGN77JENLK0fbL", "GridManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Size', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridManager", GridManager = (_dec = ccclass('GridManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec(_class = (_class2 = class GridManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "allGridList", _descriptor, this);

          _initializerDefineProperty(this, "gridList", _descriptor2, this);

          _initializerDefineProperty(this, "gridPreab", _descriptor3, this);

          _initializerDefineProperty(this, "gridBgPreab", _descriptor4, this);

          _initializerDefineProperty(this, "label", _descriptor5, this);

          this.size = new Size(510, 510);
          this._padding = 90;
          this._gridData = [['', '0', '0', '0', '0', ''], ['', '0', '0', '0', '0', ''], ['', '0', '0', '0', '0', ''], ['', '0', '0', '0', '0', '']];
          this._maxGrid = [['0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0']];
        }

        onLoad() {}

        start() {}

        init() {
          this.label.getComponent(Label).string = "修改文字";
          this.initGridList();
          this.initAllGridList();
        }

        initGridList() {
          this.gridList.removeAllChildren();

          for (let i = 0; i < this._gridData.length; i++) {
            const element = this._gridData[i];

            for (let j = 0; j < element.length; j++) {
              const item = element[j];
              let gridItem = instantiate(this.gridPreab);
              gridItem.parent = this.gridList;
              gridItem.getComponent(_crd && GridItem === void 0 ? (_reportPossibleCrUseOfGridItem({
                error: Error()
              }), GridItem) : GridItem).init(i, j, item);
            }
          }
        }

        initAllGridList() {
          for (let i = 0; i < this._maxGrid.length; i++) {
            const element = this._maxGrid[i];

            for (let j = 0; j < element.length; j++) {
              const item = element[j];
              let gridBgItem = instantiate(this.gridBgPreab);
              gridBgItem.parent = this.allGridList;
              gridBgItem.getComponent(_crd && GridBgItem === void 0 ? (_reportPossibleCrUseOfGridBgItem({
                error: Error()
              }), GridBgItem) : GridBgItem).init(i, j, item);
            }
          }
        }

        update(dt) {// console.log(dt);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "allGridList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gridList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gridPreab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gridBgPreab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec6], {
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
//# sourceMappingURL=1bbe73e968c8e8965c82ff1b8d09e3f5f75cb417.js.map