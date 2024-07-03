import { resources, JsonAsset } from "cc";
import { DEBUG } from "cc/env";
import { Tables, TempConstCar, TempConstCommon, TempHeroLevel, TempWeapon } from "../schema";

export class TemplateMgr {

    private static sInstance: TemplateMgr = null!;

    public static instance() {
        if (!TemplateMgr.sInstance) {
            TemplateMgr.sInstance = new TemplateMgr();
        }
        if (DEBUG) {
            // @ts-ignore
            window["TemplateMgr"] = TemplateMgr;
        }
        return TemplateMgr.sInstance;
    }

    /** 后面需要保证table初始化完成，加载配置成功后再进行游戏加载 */
    public templates: Tables = null!;

    /** 武器等级数据 */
    private weaponLevelDatas: {[weaponId:number] : {[level:number] : TempWeapon}} = {};

    /** 英雄等级数据 */
    private heroLevelDatas: {[heroId:number] : {[level:number] : TempHeroLevel}} = {};

    public init(cb: Function) {
        console.log("开始加载策划配置");
        let selfThis = this;
        resources.loadDir<JsonAsset>("template",
            function (err, assets) {
                if (err) {
                    console.error(err.message || err);
                    return;
                }

                let jsons: any = {};

                assets.forEach(element => {
                    jsons[element.name] = element.json;
                });

                let tables = new Tables((fileName) => {
                    return jsons[fileName];
                });

                console.log("配置加载完成");
                // console.log("测试输出 = " + tables.TbItem.get(10000)!.name);
                selfThis.templates = tables;
                Templates = tables;

                //二次加工数据
                selfThis.initWeaponLevelDatas();
                selfThis.initHeroLevelDatas();

                cb();
            })
    }

    /************************************* 武器 ************************************/

    //初始化武器等级数据
    private initWeaponLevelDatas():void {
        this.weaponLevelDatas = {};
        const list = Templates.TbWeapon.getDataList();
        for (let i = 0; i < list.length; i++) {
            const data = list[i];
            const weaponId = data.weaponId;
            const level = data.level;
            let dic = this.weaponLevelDatas[weaponId];
            if (!dic) {
                dic = {};
                this.weaponLevelDatas[weaponId] = dic;
            }
            dic[level] = data;
        }
    }

    //获取武器等级数据
    public getWeaponLevelData(weaponId:number, level:number):TempWeapon {
        let dic = this.weaponLevelDatas[weaponId];
        if (!dic) {
            return null!;
        }
        const data = dic[level];
        if (!data) {
            return null!;
        }
        return data;
    }

    /************************************* 英雄 ************************************/

    //初始化英雄等级数据
    private initHeroLevelDatas():void {
        this.heroLevelDatas = {};
        const list = Templates.TbHeroLevel.getDataList();
        for (let i = 0; i < list.length; i++) {
            const data = list[i];
            const heroId = data.heroId;
            const level = data.level;
            let dic = this.heroLevelDatas[heroId];
            if (!dic) {
                dic = {};
                this.heroLevelDatas[heroId] = dic;
            }
            dic[level] = data;
        }
    }

    //获取英雄等级数据
    public getHeroLevelData(heroId:number, level:number):TempHeroLevel {
        let dic = this.heroLevelDatas[heroId];
        if (!dic) {
            return null!;
        }
        const data = dic[level];
        if (!data) {
            return null!;
        }
        return data;
    }

    /************************************* 其他 ************************************/

    //todo
    /**
     * 开车常量表
     * @returns 
     */
    getConstCarTemp(): TempConstCar {
        return Templates.TbConstCar.getDataList()[0];
    }

    /**
     * 通用常量表
     * @returns 
     */
    getConstCommonTemp(): TempConstCommon {
        return Templates.TbConstCommon.getDataList()[0];
    }


    // 根据章数和关卡获取对应僵尸
    public getStageByChapterId(cid: number, sid: number): Array<number> {
        const tbStageSummary = Templates.TbStageSummary.getDataList();
        const tbChapterSummary = Templates.TbStage.getDataList();
        const cidArr: number[] = [];
        for (let i = 0; i < tbStageSummary.length; i++) {
            if (tbStageSummary[i].chapterId == cid) {
                cidArr.push(tbStageSummary[i].id);
            }
        }

        const sidArr: number[] = [];
        for (let i = 0; i < cidArr.length; i++) {
            if (cidArr[i] == sid) {
                for (let j = 0; j < tbChapterSummary.length; j++) {
                    if (tbChapterSummary[j].cid == sid) {
                        sidArr.push(tbChapterSummary[j].id);
                    }
                }
                break;
            }
        }
        return sidArr;
    }
}

// 缩短代码
export let Templates: Tables = TemplateMgr.instance().templates;