import { Rect, Size, Vec2, Vec3 } from "cc";
import { WeaponData } from "./WeaponData";
import { Templates } from "../manager/TemplateMgr";
import { BlockUtil } from "../Util";
// import { re } from "mathjs";

export interface BagModel {
    ClassName?: string;
    Id: number;
    name: string;
    private_gridLen: string;
    max_gridLen: string;
    private_gridWidth: number;
    private_gredHeight: number;
    private_space: number;
    //武器资源缩放大小
    picture: number;
    //拥有格子数据
    private_grid: Array<Array<string>>;
    //最大格子数据
    max_grid: Array<Array<string>>;
}

export class GridData {
    private _curGrid = 100;//当前位置表id
    private _gridMapData: Array<Array<string>> = [['0', '0', '0'], ['0', '0', '0'], ['0', '0', '0']];  //格子地图数据  0:有格子 '':没有格子   value=>武器唯一id
    private _bagCfg: BagModel = null!;//背包配置数据
    private _gridRowLen = 3; //格子行长度(每行多少个)
    private _gridColLen = 3; //格子列长度(每列多少个)
    private _gridWidth = 94;//格子宽度
    private _gredHeight = 94;//格子高度
    private _space = 10;//格子间隔
    private _gridItemData: Map<string, WeaponObj> = new Map();//携带的武器数据  key=>武器唯一id
    private _curWeaponTildeIndex: Array<number> = [];//当前武器位置索引

    private _gridEditMode: boolean = false;//是否为格子编辑模式

    public get gridEditMode() {
        return this._gridEditMode;
    }

    public set gridEditMode(value: boolean) {
        this._gridEditMode = value;
    }

    public get iconScale() {
        return this._bagCfg.picture;
    }
    public get space() {
        return this._space;
    }

    public get bagCfg() {
        return this._bagCfg;
    }

    public get curWeaponTildeIndex() {
        return this._curWeaponTildeIndex;
    }

    public set curWeaponTildeIndex(value: Array<number>) {
        this._curWeaponTildeIndex = value;
    }

    public get gridWidth() {
        return this._gridWidth;
    }

    public get gridHeight() {
        return this._gredHeight;
    }

    public init() {
        this.initGridMapData();
        this.initGridItemData();
    }

    /* 初始化格子数据 */
    private initGridMapData() {
        const n = 12;   // TODO: 增加人数
        const blockGrid = Templates.TbBlockGrid.getDataMap().get(this._curGrid)!;
        const privateGrid = blockGrid.privateGrid.map(row => row.map(String));
        const expandFactor = this.getExpandFactor(privateGrid, n);
        let expandPrivateGrid: string[][] = privateGrid;

        // 动态扩展,逆时针增加
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
            private_gridLen: (blockGrid.privateGridLen[0] + expandFactor * 2) + '_' + (blockGrid.privateGridLen[1] + expandFactor * 2),
            max_gridLen: blockGrid.maxGridLen[0] + '_' + blockGrid.maxGridLen[1],
            private_gridWidth: blockGrid.privateGridWidth[0],
            private_gredHeight: blockGrid.privateGridWidth[1],
            private_space: blockGrid.privateSpace,
            picture: parseInt(blockGrid.picture),
            private_grid: expandPrivateGrid,
            max_grid: blockGrid.maxGrid.map(row => row.map(String))
        }
        let row_col = this._bagCfg.private_gridLen.split('_');
        this._gridMapData = this._bagCfg.private_grid;
        this._gridWidth = this._bagCfg.private_gridWidth;
        this._gredHeight = this._bagCfg.private_gredHeight;
        this._space = this._bagCfg.private_space;
        this._gridColLen = Number(row_col[0]);
        this._gridRowLen = Number(row_col[1]);
    }

    /* 初始携带的武器数据 */
    private initGridItemData() {
        //调试 初始携带武器数据
        //this.addWeaponItem(1008);

        //初始化地图格子数据
        this._gridItemData.forEach((weaponObj, key) => {
            let data = weaponObj.data;
            for (let i = 0; i < data.length; i++) {
                const gridObj = data[i];
                this._gridMapData[gridObj.row][gridObj.col] = key;
            }
        })
        // console.log('携带武器数据', this._gridItemData);
        // console.log('初始格子数据', this._gridMapData);
    }

    /** 获取扩展因子 */
    private getExpandFactor(matrix: string[][], n: number): number {
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
    private addGridItemData(matrix: string[][], n: number): string[][] {
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
    private expandMatrix(matrix: string[][], n: number): string[][] {
        const m = matrix.length;
        const originalCols = matrix[0].length;

        // 计算扩展后的行列数
        const expandedRows = m + 2 * n;
        const expandedCols = originalCols + 2 * n;

        // 创建扩展后的数组，并初始化为 0
        let expanded: string[][] = [];
        for (let i = 0; i < expandedRows; i++) {
            expanded.push(new Array(expandedCols).fill(0));
        }

        // 将原始数组复制到扩展数组的中心位置
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < originalCols; j++) {
                expanded[i + n][j + n] = matrix[i][j];
            }
        }

        // 扩展四周边界
        for (let i = 0; i < n; i++) {
            // 上方 n 行
            for (let j = 0; j < expandedCols; j++) {
                expanded[i][j] = '';
            }
            // 下方 n 行
            for (let j = 0; j < expandedCols; j++) {
                expanded[expandedRows - 1 - i][j] = '';
            }
        }

        for (let j = 0; j < n; j++) {
            // 左侧 n 列（包括上下已填充的 n 行）
            for (let i = 0; i < expandedRows; i++) {
                expanded[i][j] = '';
            }
            // 右侧 n 列（包括上下已填充的 n 行）
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
    private addWeaponItem(wid: number) {
        let weaponCfg = WeaponData.instance.getWeaponCfgById(wid);
        if (weaponCfg == null) {
            return;
        }
        let weaponObj = new WeaponObj();
        weaponObj.id = BlockUtil.getUuid(10);
        weaponObj.gid = this._curGrid;
        weaponObj.wid = wid;
        let points = weaponCfg.Points;
        let data: Array<GridObj> = [];
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
    public setRebuildGridMapData(value: Array<Array<string>>) {
        let row = value.length;
        let col = value[0].length;
        this._gridMapData = value;
        this._bagCfg.private_gridLen = row + '_' + col;
        this._gridColLen = row;
        this._gridRowLen = col;
        //设置武器位置数据
        this._gridItemData.forEach((weaponObj, key) => {
            let data: Array<GridObj> = [];
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
        })
    }

    /* 获取最大背包尺寸 */
    public getMaxGridMapSize() {
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
    public getGridMapSize() {
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
    public getGridSizeByRowCol(rowLen: number, colLen: number) {
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
    public getGridMapData() {
        return this._gridMapData;
    }

    /* 获取携带的武器位置数据 */
    private getGridItemData() {
        return Array.from(this._gridItemData.values());
    }

    /* 获取携带的武器唯一键值 */
    public getGridItemDataKeys() {
        return Array.from(this._gridItemData.keys());
    }

    /*获取携带的武器Map数据  */
    public getGridItemMapData() {
        return this._gridItemData;
    }

    /**
     * 通过位置组获取位置中点坐标
     * @param gridObjArr 
     */
    public getItemPosByTiledObj(gridObjArr: Array<GridObj>) {
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
    public getGridPosByTiled(gridObj: GridObj) {
        let posX = gridObj.col * this._gridWidth + this._gridWidth / 2 + gridObj.col * this._space;
        let posY = gridObj.row * this._gredHeight + this._gredHeight / 2 + gridObj.row * this._space;
        return new Vec3(posX, -posY);
    }

    /**
     * 通过位置获取位置索引
     * @param row 
     * @param col  
     */
    private getGridIndexByTiled(row: number, col: number) {
        return row * this._gridRowLen + col;
    }

    /**
     * 通过位置索引获取位置
     * @param index 
     */
    public getGridTiledByIndex(index: number) {
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
    public deletGridDataByWeaponId(id: string) {
        if (this._gridItemData.has(id)) {
            let weaponObj = this._gridItemData.get(id)!;
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
    public addGridDataByWeaponId(gridObjArr: Array<GridObj>, wid: number, weaponKey: string) {
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
    public updateGridItemData(weaponKey: string, wid: number) {
        if (this._gridItemData.has(weaponKey)) {
            let weaponObj = this._gridItemData.get(weaponKey)!;
            weaponObj.wid = wid;
        }
    }

    /**
     * 通过坐标获取位置
     * @param pos 
     */
    private getTiledByPos(pos: Vec3) {
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
    private getTiledIndexByPos(pos: Vec3) {
        let gridObj = this.getTiledByPos(pos);
        if (gridObj.col < 0 || gridObj.row < 0 || gridObj.col > (this._gridRowLen - 1) || gridObj.row > (this._gridColLen - 1)) {
            return -1
        }
        return this.getGridIndexByTiled(gridObj.row, gridObj.col);
    }

    /* 检测武器id是否相同 */
    public checkSameWeapoIdByKey(weaponKey: string, wid: number) {
        if (this._gridItemData.has(weaponKey)) {
            let weaponObj = this._gridItemData.get(weaponKey)!;
            if (wid == weaponObj.wid) {
                return true;
            }
        }
        return false;
    }

    /* 间隔触摸点是否在位置上 */
    public checkPointinGrid(touchPos: Vec2, gridObjArr: Array<GridObj>) {
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
    public getGridBgIndexByTiled(row: number, col: number) {
        let row_col = this._bagCfg.max_gridLen.split('_');
        return row * Number(row_col[1]) + col;
    }

    public clear() {
        this._gridItemData.clear();
        this._curWeaponTildeIndex = [];
        this._bagCfg = null!;
        this._gridEditMode = false;
    }

    private static _instance: GridData = null!;
    public static get instance(): GridData {
        if (!this._instance) {
            this._instance = new GridData();
        }
        return this._instance;
    }

}

export class WeaponObj {
    id: string = '';//唯一id
    wid: number = 0;//武器id
    gid: number = 0;//格子表id
    data: Array<GridObj> = [];//位置数据
}

export class GridObj {
    row: number = 0;//行
    col: number = 0;//列
    toString(): string {
        return `GridObj { row: ${this.row}, col: ${this.col} }`;
    }
}