System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Templates, GridData, GridObj, _crd, ccclass, property;

  function _reportPossibleCrUseOfTemplates(extras) {
    _reporterNs.report("Templates", "../../manager/TemplateMgr", _context.meta, extras);
  }

  _export({
    GridData: void 0,
    GridObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      Templates = _unresolved_2.Templates;
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

        static get instance() {
          if (!this._instance) {
            this._instance = new GridData();
          }

          return this._instance;
        }

        get bagCfg() {
          return this._bagCfg;
        }

        get gridWidth() {
          return this._gridWidth;
        }

        get gridHeight() {
          return this._gredHeight;
        }

        init() {
          this.initGridMapData();
          this.initGridItemData();
        }

        initGridMapData() {
          var n = 8;
          var blockGrid = (_crd && Templates === void 0 ? (_reportPossibleCrUseOfTemplates({
            error: Error()
          }), Templates) : Templates).TbBlockGrid.getDataMap().get(this._curGrid);
          var privateGrid = blockGrid.privateGrid.map(row => row.map(String));
          var expandFactor = this.getExpandFactor(privateGrid, n);
          var expandPrivateGrid = privateGrid; // 动态扩展,逆时针增加

          var privateGridLength = privateGrid.length;
          var oldN = 0;

          for (var i = 0; i < expandFactor - 1; i++) {
            expandPrivateGrid = this.addGridItemData(privateGrid, (privateGridLength + 2) * 4 - 4);
            oldN += (privateGridLength + 2) * 4 - 4;
            privateGridLength++;
          }

          expandPrivateGrid = this.addGridItemData(expandPrivateGrid, n - oldN);
          this._bagCfg = {
            Id: blockGrid.id,
            name: blockGrid.name,
            private_gridLen: blockGrid.privateGridLen[0] + expandFactor * 2 + '_' + (blockGrid.privateGridLen[1] + expandFactor * 2),
            max_gridLen: blockGrid.maxGridLen[0] + '_' + blockGrid.maxGridLen[1],
            private_gridWidth: blockGrid.privateGridWidth[0],
            private_gredHeight: blockGrid.privateGridWidth[1],
            private_space: blockGrid.privateSpace,
            picture: parseInt(blockGrid.picture),
            private_grid: expandPrivateGrid,
            max_grid: blockGrid.maxGrid.map(row => row.map(String))
          };

          var row_col = this._bagCfg.private_gridLen.split('_');

          this._gridMapData = this._bagCfg.private_grid;
          this._gridWidth = this._bagCfg.private_gridWidth;
          this._gredHeight = this._bagCfg.private_gredHeight;
          this._space = this._bagCfg.private_space;
          this._gridColLen = Number(row_col[0]);
          this._gridRowLen = Number(row_col[1]);
        }

        initGridItemData() {}

        getExpandFactor(matrix, n) {
          if (n == 0) return 0;
          var expandFactor = 1; // 扩展因子

          var count = (2 + matrix.length) * 4 - 4;

          while (count < n) {
            expandFactor++;
            count += (expandFactor * 2 + matrix.length) * 4 - 4;
          }

          return expandFactor;
        }
        /**增加角色的背包格子 */


        addGridItemData(matrix, n) {
          if (n == 0) return matrix;
          matrix = this.expandMatrix(matrix, 1);
          var top = 0;
          var bottom = matrix.length - 1;
          var left = 0;
          var right = matrix[0].length - 1;
          var count = 0;

          while (top <= bottom && left <= right) {
            // 从左到右（底部行）
            for (var i = left; i <= right; i++) {
              if (count > 0 && count <= n) {
                matrix[bottom][i] = '0';
              }

              count++;
            }

            bottom--; // 缩小底部边界
            // 从下到上（最右侧列）

            for (var _i = bottom; _i >= top && left <= right; _i--) {
              if (count > 0 && count <= n) {
                matrix[_i][right] = '0';
              }

              count++;
            }

            right--; // 缩小右侧边界
            // 从右到左（顶部行）

            for (var _i2 = right; _i2 >= left && top <= bottom; _i2--) {
              if (count > 0 && count <= n) {
                matrix[top][_i2] = '0';
              }

              count++;
            }

            top++; // 缩小顶部边界
            // 从上到下（最左侧列）

            for (var _i3 = top; _i3 <= bottom && left <= right; _i3++) {
              if (count > 0 && count <= n) {
                matrix[_i3][left] = '0';
              }

              count++;
            }

            left++; // 缩小左侧边界
          }

          if (n == matrix.length * 4 - 4) {
            matrix[matrix.length - 1][0] = '0';
          }

          return matrix;
        }

      });

      //是否为格子编辑模式
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
//# sourceMappingURL=7a466fd4d932d290b19f5d81490099b97b4b2334.js.map