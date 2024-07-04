System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Rect, Size, Vec3, WeaponData, Templates, BlockUtil, GridData, WeaponObj, GridObj, _crd;

  function _reportPossibleCrUseOfWeaponData(extras) {
    _reporterNs.report("WeaponData", "./WeaponData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTemplates(extras) {
    _reporterNs.report("Templates", "../manager/TemplateMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBlockUtil(extras) {
    _reporterNs.report("BlockUtil", "../Util", _context.meta, extras);
  }

  _export({
    GridData: void 0,
    WeaponObj: void 0,
    GridObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Rect = _cc.Rect;
      Size = _cc.Size;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      WeaponData = _unresolved_2.WeaponData;
    }, function (_unresolved_3) {
      Templates = _unresolved_3.Templates;
    }, function (_unresolved_4) {
      BlockUtil = _unresolved_4.BlockUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe537oi94JPVo69/FDHGzhg", "GridData", undefined);

      __checkObsolete__(['Rect', 'Size', 'Vec2', 'Vec3']);

      // import { re } from "mathjs";
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
          this._gridItemData = new Map();
          //携带的武器数据  key=>武器唯一id
          this._curWeaponTildeIndex = [];
          //当前武器位置索引
          this._gridEditMode = false;
        }

        //是否为格子编辑模式
        get gridEditMode() {
          return this._gridEditMode;
        }

        set gridEditMode(value) {
          this._gridEditMode = value;
        }

        get iconScale() {
          return this._bagCfg.picture;
        }

        get space() {
          return this._space;
        }

        get bagCfg() {
          return this._bagCfg;
        }

        get curWeaponTildeIndex() {
          return this._curWeaponTildeIndex;
        }

        set curWeaponTildeIndex(value) {
          this._curWeaponTildeIndex = value;
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
        /* 初始化格子数据 */


        initGridMapData() {
          const n = 12; // TODO: 增加人数

          const blockGrid = (_crd && Templates === void 0 ? (_reportPossibleCrUseOfTemplates({
            error: Error()
          }), Templates) : Templates).TbBlockGrid.getDataMap().get(this._curGrid);
          const privateGrid = blockGrid.privateGrid.map(row => row.map(String));
          const expandFactor = this.getExpandFactor(privateGrid, n);
          let expandPrivateGrid = privateGrid; // 动态扩展,逆时针增加

          let privateGridLength = privateGrid.length;
          let oldN = 0;

          for (let i = 0; i < expandFactor - 1; i++) {
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

          let row_col = this._bagCfg.private_gridLen.split('_');

          this._gridMapData = this._bagCfg.private_grid;
          this._gridWidth = this._bagCfg.private_gridWidth;
          this._gredHeight = this._bagCfg.private_gredHeight;
          this._space = this._bagCfg.private_space;
          this._gridColLen = Number(row_col[0]);
          this._gridRowLen = Number(row_col[1]);
        }
        /* 初始携带的武器数据 */


        initGridItemData() {
          //调试 初始携带武器数据
          //this.addWeaponItem(1008);
          //初始化地图格子数据
          this._gridItemData.forEach((weaponObj, key) => {
            let data = weaponObj.data;

            for (let i = 0; i < data.length; i++) {
              const gridObj = data[i];
              this._gridMapData[gridObj.row][gridObj.col] = key;
            }
          }); // console.log('携带武器数据', this._gridItemData);
          // console.log('初始格子数据', this._gridMapData);

        }
        /** 获取扩展因子 */


        getExpandFactor(matrix, n) {
          if (n == 0) return 0;
          let expandFactor = 1; // 扩展因子

          let count = (2 + matrix.length) * 4 - 4;

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
          let top = 0;
          let bottom = matrix.length - 1;
          let left = 0;
          let right = matrix[0].length - 1;
          let count = 0;

          while (top <= bottom && left <= right) {
            // 从左到右（底部行）
            for (let i = left; i <= right; i++) {
              if (count > 0 && count <= n) {
                matrix[bottom][i] = '0';
              }

              count++;
            }

            bottom--; // 缩小底部边界
            // 从下到上（最右侧列）

            for (let i = bottom; i >= top && left <= right; i--) {
              if (count > 0 && count <= n) {
                matrix[i][right] = '0';
              }

              count++;
            }

            right--; // 缩小右侧边界
            // 从右到左（顶部行）

            for (let i = right; i >= left && top <= bottom; i--) {
              if (count > 0 && count <= n) {
                matrix[top][i] = '0';
              }

              count++;
            }

            top++; // 缩小顶部边界
            // 从上到下（最左侧列）

            for (let i = top; i <= bottom && left <= right; i++) {
              if (count > 0 && count <= n) {
                matrix[i][left] = '0';
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
        /**扩展二维数组 */


        expandMatrix(matrix, n) {
          const m = matrix.length;
          const originalCols = matrix[0].length; // 计算扩展后的行列数

          const expandedRows = m + 2 * n;
          const expandedCols = originalCols + 2 * n; // 创建扩展后的数组，并初始化为 0

          let expanded = [];

          for (let i = 0; i < expandedRows; i++) {
            expanded.push(new Array(expandedCols).fill(0));
          } // 将原始数组复制到扩展数组的中心位置


          for (let i = 0; i < m; i++) {
            for (let j = 0; j < originalCols; j++) {
              expanded[i + n][j + n] = matrix[i][j];
            }
          } // 扩展四周边界


          for (let i = 0; i < n; i++) {
            // 上方 n 行
            for (let j = 0; j < expandedCols; j++) {
              expanded[i][j] = '';
            } // 下方 n 行


            for (let j = 0; j < expandedCols; j++) {
              expanded[expandedRows - 1 - i][j] = '';
            }
          }

          for (let j = 0; j < n; j++) {
            // 左侧 n 列（包括上下已填充的 n 行）
            for (let i = 0; i < expandedRows; i++) {
              expanded[i][j] = '';
            } // 右侧 n 列（包括上下已填充的 n 行）


            for (let i = 0; i < expandedRows; i++) {
              expanded[i][expandedCols - 1 - j] = '';
            }
          }

          return expanded;
        }
        /**
         * 添加携带的武器id
         * @param wid 
         */


        addWeaponItem(wid) {
          let weaponCfg = (_crd && WeaponData === void 0 ? (_reportPossibleCrUseOfWeaponData({
            error: Error()
          }), WeaponData) : WeaponData).instance.getWeaponCfgById(wid);

          if (weaponCfg == null) {
            return;
          }

          let weaponObj = new WeaponObj();
          weaponObj.id = (_crd && BlockUtil === void 0 ? (_reportPossibleCrUseOfBlockUtil({
            error: Error()
          }), BlockUtil) : BlockUtil).getUuid(10);
          weaponObj.gid = this._curGrid;
          weaponObj.wid = wid;
          let points = weaponCfg.Points;
          let data = [];

          for (let i = 0; i < points.length; i++) {
            const element = points[i];

            for (let j = 0; j < element.length; j++) {
              let gridObj = new GridObj();
              gridObj.row = i;
              gridObj.col = j;
              data.push(gridObj);
            }
          }

          weaponObj.data = data;

          this._gridItemData.set(weaponObj.id, weaponObj);
        }
        /* 设置重组格子数据 */


        setRebuildGridMapData(value) {
          let row = value.length;
          let col = value[0].length;
          this._gridMapData = value;
          this._bagCfg.private_gridLen = row + '_' + col;
          this._gridColLen = row;
          this._gridRowLen = col; //设置武器位置数据

          this._gridItemData.forEach((weaponObj, key) => {
            let data = [];

            for (let i = 0; i < value.length; i++) {
              const element = value[i];

              for (let j = 0; j < element.length; j++) {
                const weaponKey = element[j];

                if (weaponKey == key) {
                  let gridObj = new GridObj();
                  gridObj.row = i;
                  gridObj.col = j;
                  data.push(gridObj);
                }
              }
            }

            weaponObj.data = data;
          });
        }
        /* 获取最大背包尺寸 */


        getMaxGridMapSize() {
          let size = new Size();
          let bagCfg = this.bagCfg;
          let width = bagCfg.private_gridWidth;
          let height = bagCfg.private_gredHeight;
          let space = bagCfg.private_space;
          let row_col = bagCfg.max_gridLen.split('_');
          let rowLen = Number(row_col[0]);
          let colLen = Number(row_col[1]);
          let w = colLen * width + (colLen - 1) * space;
          let h = rowLen * height + (rowLen - 1) * space;
          size.width = w;
          size.height = h;
          return size;
        }
        /* 获取背包尺寸 */


        getGridMapSize() {
          let size = new Size();
          let bagCfg = this.bagCfg;
          let width = bagCfg.private_gridWidth;
          let height = bagCfg.private_gredHeight;
          let space = bagCfg.private_space;
          let row_col = bagCfg.private_gridLen.split('_');
          let rowLen = Number(row_col[1]);
          let colLen = Number(row_col[0]);
          let w = rowLen * width + (rowLen - 1) * space;
          let h = colLen * height + (colLen - 1) * space;
          size.width = w;
          size.height = h;
          return size;
        }
        /**
         * 通过行列数量获取尺寸
         * @param rowLen 
         * @param colLen 
         */


        getGridSizeByRowCol(rowLen, colLen) {
          let size = new Size();
          let bagCfg = this.bagCfg;
          let width = bagCfg.private_gridWidth;
          let height = bagCfg.private_gredHeight;
          let space = bagCfg.private_space;
          let w = rowLen * width + (rowLen - 1) * space;
          let h = colLen * height + (colLen - 1) * space;
          size.width = w;
          size.height = h;
          return size;
        }
        /* 获取格子数据 */


        getGridMapData() {
          return this._gridMapData;
        }
        /* 获取携带的武器位置数据 */


        getGridItemData() {
          return Array.from(this._gridItemData.values());
        }
        /* 获取携带的武器唯一键值 */


        getGridItemDataKeys() {
          return Array.from(this._gridItemData.keys());
        }
        /*获取携带的武器Map数据  */


        getGridItemMapData() {
          return this._gridItemData;
        }
        /**
         * 通过位置组获取位置中点坐标
         * @param gridObjArr 
         */


        getItemPosByTiledObj(gridObjArr) {
          let startPos = this.getGridPosByTiled(gridObjArr[0]);
          let endPos = this.getGridPosByTiled(gridObjArr[gridObjArr.length - 1]);
          let pos = new Vec3(0, 0, 0);
          pos.x = (startPos.x + endPos.x) / 2;
          pos.y = (startPos.y + endPos.y) / 2;
          return pos;
        }
        /**
         * 通过位置获取坐标
         * @param gridObj 
         * @returns 
         */


        getGridPosByTiled(gridObj) {
          let posX = gridObj.col * this._gridWidth + this._gridWidth / 2 + gridObj.col * this._space;
          let posY = gridObj.row * this._gredHeight + this._gredHeight / 2 + gridObj.row * this._space;
          return new Vec3(posX, -posY);
        }
        /**
         * 通过位置获取位置索引
         * @param row 
         * @param col  
         */


        getGridIndexByTiled(row, col) {
          return row * this._gridRowLen + col;
        }
        /**
         * 通过位置索引获取位置
         * @param index 
         */


        getGridTiledByIndex(index) {
          let row = Math.floor(index / this._gridRowLen);
          let col = index % this._gridRowLen;
          let gridObj = new GridObj();
          gridObj.row = row;
          gridObj.col = col;
          return gridObj;
        }
        /**
         * 通过武器唯一id 删除位置数据
         * @param id   武器唯一id
         */


        deletGridDataByWeaponId(id) {
          if (this._gridItemData.has(id)) {
            let weaponObj = this._gridItemData.get(id);

            let gridObjArr = weaponObj.data;

            for (let i = 0; i < gridObjArr.length; i++) {
              const gridObj = gridObjArr[i];
              this._gridMapData[gridObj.row][gridObj.col] = '0';
            }

            this._gridItemData.delete(id);
          }
        }
        /**
         * 添加放置数据
         * @param gridObjArr 
         * @param wid 
         */


        addGridDataByWeaponId(gridObjArr, wid, weaponKey) {
          let weaponObj = new WeaponObj();
          weaponObj.id = weaponKey;
          weaponObj.gid = this._curGrid;
          weaponObj.wid = wid;
          weaponObj.data = gridObjArr;

          this._gridItemData.set(weaponObj.id, weaponObj);

          for (let i = 0; i < gridObjArr.length; i++) {
            const element = gridObjArr[i];
            this._gridMapData[element.row][element.col] = weaponObj.id;
          }
        }
        /* 合成更新 */


        updateGridItemData(weaponKey, wid) {
          if (this._gridItemData.has(weaponKey)) {
            let weaponObj = this._gridItemData.get(weaponKey);

            weaponObj.wid = wid;
          }
        }
        /**
         * 通过坐标获取位置
         * @param pos 
         */


        getTiledByPos(pos) {
          let tiledX = pos.x > 0 ? Math.floor((pos.x - this._gridWidth / 2) / (this._gridWidth + this._space)) : 3;
          let tiledY = pos.y < 0 ? Math.floor((Math.abs(pos.y) - this._gredHeight / 2) / (this._gredHeight + this._space)) : 3;
          let gridObj = new GridObj();
          gridObj.row = tiledY;
          gridObj.col = tiledX;
          return gridObj;
        }
        /**
         * 通过位置获取位置索引
         * @param pos 
         */


        getTiledIndexByPos(pos) {
          let gridObj = this.getTiledByPos(pos);

          if (gridObj.col < 0 || gridObj.row < 0 || gridObj.col > this._gridRowLen - 1 || gridObj.row > this._gridColLen - 1) {
            return -1;
          }

          return this.getGridIndexByTiled(gridObj.row, gridObj.col);
        }
        /* 检测武器id是否相同 */


        checkSameWeapoIdByKey(weaponKey, wid) {
          if (this._gridItemData.has(weaponKey)) {
            let weaponObj = this._gridItemData.get(weaponKey);

            if (wid == weaponObj.wid) {
              return true;
            }
          }

          return false;
        }
        /* 间隔触摸点是否在位置上 */


        checkPointinGrid(touchPos, gridObjArr) {
          let isTouch = false;

          for (let i = 0; i < gridObjArr.length; i++) {
            const gridObj = gridObjArr[i];
            let pos = this.getGridPosByTiled(gridObj);
            let rect = new Rect(pos.x - this._gridWidth / 2, pos.y - this.gridHeight / 2, this.gridWidth, this.gridHeight);

            if (rect.contains(touchPos)) {
              isTouch = true;
              break;
            }
          }

          return isTouch;
        }
        /**
        * 通过位置获取位置索引
        * @param row 
        * @param col 
        */


        getGridBgIndexByTiled(row, col) {
          let row_col = this._bagCfg.max_gridLen.split('_');

          return row * Number(row_col[1]) + col;
        }

        clear() {
          this._gridItemData.clear();

          this._curWeaponTildeIndex = [];
          this._bagCfg = null;
          this._gridEditMode = false;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new GridData();
          }

          return this._instance;
        }

      });

      GridData._instance = null;

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
          return `GridObj { row: ${this.row}, col: ${this.col} }`;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2850b8b17f0e42ece4fac6fa4ce421bd2224392.js.map