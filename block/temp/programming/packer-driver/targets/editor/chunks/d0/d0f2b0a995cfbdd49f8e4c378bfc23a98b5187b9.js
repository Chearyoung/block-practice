System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, GridData, GridObj, _dec, _class, _crd, ccclass, property, GridItem;

  function _reportPossibleCrUseOfGridData(extras) {
    _reporterNs.report("GridData", "../Data/GridData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGridObj(extras) {
    _reporterNs.report("GridObj", "../Data/GridData", _context.meta, extras);
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
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      GridData = _unresolved_2.GridData;
      GridObj = _unresolved_2.GridObj;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4644cZiyvNFW6gp0dNa5f8N", "GridItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridItem", GridItem = (_dec = ccclass('GridItem'), _dec(_class = class GridItem extends Component {
        constructor(...args) {
          super(...args);
          this._gridObj = new (_crd && GridObj === void 0 ? (_reportPossibleCrUseOfGridObj({
            error: Error()
          }), GridObj) : GridObj)();
          this._gridValue = '0';
        }

        get gridObj() {
          return this._gridObj;
        }

        init(row, col, value) {
          this.node.getComponent(UITransform).setContentSize((_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridWidth, (_crd && GridData === void 0 ? (_reportPossibleCrUseOfGridData({
            error: Error()
          }), GridData) : GridData).instance.gridHeight);
          this._gridObj.row = row;
          this._gridObj.col = col;
          this._gridValue = value; // this.node.getComponent(UIOpacity)!.opacity = value ? 255 : 0;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0f2b0a995cfbdd49f8e4c378bfc23a98b5187b9.js.map