System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, WeaponObj, GridObj, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, WeaponManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    WeaponObj: void 0,
    GridObj: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65682MJVnZGraMI1vNG6Som", "WeaponManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WeaponManager", WeaponManager = (_dec = ccclass('WeaponManager'), _dec2 = property(Node), _dec(_class = (_class2 = class WeaponManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "weaponList", _descriptor, this);
        }

        init() {
          this.initWeaponList();
        }

        initWeaponList() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _export("WeaponObj", WeaponObj = class WeaponObj {
        constructor() {
          this.id = '';
          //唯一id
          this.wid = 0;
          //武器id
          this.gid = 0;
          //格子表id
          this.data = [];
        } //位置数据


      });

      _export("GridObj", GridObj = class GridObj {
        constructor() {
          this.row = 0;
          //行
          this.col = 0;
        }

        //列
        toString() {
          return "GridObj { row: " + this.row + ", col: " + this.col + " }";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9530bb5decc75fd1a85e28ccff3d71cbee66facc.js.map