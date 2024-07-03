import { Vec3 } from "cc";
import { Templates } from "../../../../manager/TemplateMgr";


export interface WeaponModel {
    ClassName?: string;
    /** id */
    tempId: number;
    Name: string;
    Res: string;
    //物品组
    weaponGroupNum: number;
    itemType: string;
    /* 格子点类型 */
    Type: string;
    SkillId: number;
    Level: number;
    /* 占用位置点 */
    Points: Array<Array<number>>;
    options_num: number;
}

export class WeaponData {
    private _isSelect: boolean = false;//是否选中武器
    private _weaponCfgMapData: Map<string, WeaponModel> = new Map(); // key=> group + '|' + level 
    private _weaponGridData: Map<number, WeaponModel> = new Map();//可用格子数据

    public get isSelect() {
        return this._isSelect;
    }

    public set isSelect(value: boolean) {
        this._isSelect = value;
    }

    public init() {
        const blockItems = Templates.TbBlockItem.getDataList();
        const weaponModels: WeaponModel[] = [];
        for (let i = 0; i < blockItems.length; i++) {
            const weaponModel: WeaponModel = {
                tempId: blockItems[i].id,
                Name: blockItems[i].name,
                Res: blockItems[i].icon,// TODO:
                weaponGroupNum: blockItems[i].group,
                itemType: blockItems[i].type.toString(),//TODO: 枚举类型,
                Type: blockItems[i].shapeType[0] + '_' + blockItems[i].shapeType[1],
                SkillId: blockItems[i].targetId,
                Level: blockItems[i].level,
                Points: blockItems[i].shapeTypePara,
                options_num: blockItems[i].optionsNum
            }
            weaponModels.push(weaponModel);
        }

        for (let index = 0; index < weaponModels.length; index++) {
            const element = weaponModels[index];
            // TODO: 少一个配件
            switch (element.itemType) {
                case '1':
                    let key = element.weaponGroupNum + '|' + element.Level;
                    this._weaponCfgMapData.set(key, element);
                    break;
                case '2':
                    break;
                case '3':
                    this._weaponGridData.set(element.tempId, element);
                    break;
            }
        }
    }

    public getWeaponCfgByLevel(level: number, group: number) {
        let key = group + '|' + level;
        return this._weaponCfgMapData.get(key)
    }

    /* 通过level检测是否有该等级的装备 */
    public checkWeaponByLevel(level: number, group: number) {
        let key = group + '|' + level;
        if (this._weaponCfgMapData.has(key)) {
            return true;
        }
        return false;
    }

    public getWeaponCfgById(id: number) {
        const blockItem = Templates.TbBlockItem.getDataMap().get(id)!;
        const weaponModel: WeaponModel = {
            tempId: blockItem.id,
            Name: blockItem.name,
            Res: blockItem.icon,// TODO:
            weaponGroupNum: blockItem.group,
            itemType: blockItem.type.toString(),//TODO: 枚举类型,
            Type: blockItem.shapeType[0] + '_' + blockItem.shapeType[1],
            SkillId: blockItem.targetId,
            Level: blockItem.level,
            Points: blockItem.shapeTypePara,
            options_num: blockItem.optionsNum
        }

        return weaponModel;
    }

    private getWeaponCfgData() {
        let data = [];
        const blockItems = Templates.TbBlockItem.getDataList();
        const weaponModels: WeaponModel[] = [];
        for (let i = 0; i < blockItems.length; i++) {
            const weaponModel: WeaponModel = {
                tempId: blockItems[i].id,
                Name: blockItems[i].name,
                Res: blockItems[i].icon,// TODO:
                weaponGroupNum: blockItems[i].group,
                itemType: blockItems[i].type.toString(),//TODO: 枚举类型,
                Type: blockItems[i].shapeType[0] + '_' + blockItems[i].shapeType[1],
                SkillId: blockItems[i].targetId,
                Level: blockItems[i].level,
                Points: blockItems[i].shapeTypePara,
                options_num: blockItems[i].optionsNum
            }
            weaponModels.push(weaponModel);
        }
        for (let i = 0; i < weaponModels.length; i++) {
            const element = weaponModels[i];
            if (element.itemType) {
                data.push(element);
            }
        }

        return data;
    }

    /**
     * TODO:暂时拿的是三件
     * @returns 
     */
    public getWeaponPool() {
        let arr: Array<number> = [];
        const blockItems = Templates.TbBlockItem.getDataList();
        const weaponModels: WeaponModel[] = [];
        for (let i = 0; i < blockItems.length; i++) {
            const weaponModel: WeaponModel = {
                tempId: blockItems[i].id,
                Name: blockItems[i].name,
                Res: blockItems[i].icon,
                weaponGroupNum: blockItems[i].group,
                itemType: blockItems[i].type.toString(),//TODO: 枚举类型,
                Type: blockItems[i].shapeType[0] + '_' + blockItems[i].shapeType[1],
                SkillId: blockItems[i].targetId,
                Level: blockItems[i].level,
                Points: blockItems[i].shapeTypePara,
                options_num: blockItems[i].optionsNum
            }
            weaponModels.push(weaponModel);
        }
        for (let i = 0; i < weaponModels.length; i++) {
            const element = weaponModels[i];
            if (element.Level == 1 && element.itemType == '1') {
                arr.push(element.tempId);
                if (arr.length == 3) {
                    break;
                }
            }

        }
        return arr;
    }

    /**
     * 检测大数组数据中是否存在区域数据
     * @param matrix 大数组区域数据 (0:占有 1:未占有)
     * @param region  待检测的区域数据
     * @returns 
     */
    private countRegionOccurrences(matrix: number[][], region: number[][]): number {
        let count = 0;
        const regionRows = region.length;
        const regionCols = region[0].length;
        for (let i = 0; i <= matrix.length - regionRows; i++) {
            for (let j = 0; j <= matrix[0].length - regionCols; j++) {
                let match = true;
                for (let r = 0; r < regionRows; r++) {
                    for (let c = 0; c < regionCols; c++) {
                        if (matrix[i + r][j + c] !== region[r][c]) {
                            match = false;
                            break;
                        }
                    }
                    if (!match) {
                        break;
                    }
                }
                if (match) {
                    count++;
                }
            }
        }
        return count;
    }


    /* 通过权重获取可以放置的id  */
    public getPlaceGridIdByWeigh(matrix: number[][]) {
        let weaponData: Array<WeaponModel> = [];
        //找出可以放置的格子
        if (this._weaponGridData.size) {
            this._weaponGridData.forEach((weaponCfg, key) => {
                let count = this.countRegionOccurrences(matrix, weaponCfg.Points);
                if (count) {
                    weaponData.push(weaponCfg);
                }
            })
        }
        let placeId = 0;
        if (weaponData.length) {
            let start = 0;
            let end = 0;
            let sum = 0;
            for (let i = 0; i < weaponData.length; i++) {
                const element = weaponData[i];
                sum += element.options_num;
            }
            let rand = Math.floor(Math.random() * sum);
            let index = 0;
            weaponData.some((item, idx) => {
                end = start + item.options_num;
                if (rand >= start && rand < end) {
                    index = idx;
                    return true;
                }
                start = end;
            })
            placeId = weaponData[index].tempId;
        }
        return placeId;
    }

    clear() {
        this._isSelect = false;
    }

    private static _instance: WeaponData = null!;
    public static get instance(): WeaponData {
        if (!this._instance) {
            this._instance = new WeaponData();
        }
        return this._instance;
    }

}

export class CoinObj {
    wpos: Vec3 = new Vec3();//金币坐标
    num: number = 0;//金币数量
}


