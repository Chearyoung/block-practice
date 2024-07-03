System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, GridData, GridObj, _crd, ccclass, property;

  _export({
    GridData: void 0,
    GridObj: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44457dPbUtP4JT29mrIhAnq", "GridData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GridData", GridData = class GridData {
        constructor() {
          this._curGrid = 100;
          //当前位置表id
          this._gridMapData = [['0', '0', '0'], ['0', '0', '0'], ['0', '0', '0']];
          //格子地图数据  0:有格子 '':没有格子   value=>武器唯一id
          this._bagCfg = null;
          //背包配置数据
          this._gridRowLen = 3;
          //格子行长度(每行多少个)
          this._gridColLen = 3;
          //格子列长度(每列多少个)
          this._gridWidth = 94;
          //格子宽度
          this._gredHeight = 94;
          //格子高度
          this._space = 10;
          //格子间隔
          this._curWeaponTildeIndex = [];
          //当前武器位置索引
          this._gridEditMode = false;
        }

        //是否为格子编辑模式
        get gridWidth() {
          return this._gridWidth;
        }

        get gridHeight() {
          return this._gredHeight;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new GridData();
          }

          return this._instance;
        }

      });

      GridData._instance = null;

      _export("GridObj", GridObj = class GridObj extends Component {
        constructor() {
          super(...arguments);
          this.row = 0;
          this.col = 0;
        }

        toString() {
          return "GridObj { row: " + this.row + ", col: " + this.col + " }";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2850b8b17f0e42ece4fac6fa4ce421bd2224392.js.map