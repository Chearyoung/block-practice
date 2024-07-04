System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, DEBUG, Tables, TemplateMgr, _crd, Templates;

  function _reportPossibleCrUseOfTables(extras) {
    _reporterNs.report("Tables", "../schema", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTempConstCar(extras) {
    _reporterNs.report("TempConstCar", "../schema", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTempConstCommon(extras) {
    _reporterNs.report("TempConstCommon", "../schema", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTempHeroLevel(extras) {
    _reporterNs.report("TempHeroLevel", "../schema", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTempWeapon(extras) {
    _reporterNs.report("TempWeapon", "../schema", _context.meta, extras);
  }

  _export("TemplateMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      Tables = _unresolved_2.Tables;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee9a1OQpcFKDqJvuwV+oyrd", "TemplateMgr", undefined);

      __checkObsolete__(['resources', 'JsonAsset']);

      _export("TemplateMgr", TemplateMgr = class TemplateMgr {
        constructor() {
          /** 后面需要保证table初始化完成，加载配置成功后再进行游戏加载 */
          this.templates = null;

          /** 武器等级数据 */
          this.weaponLevelDatas = {};

          /** 英雄等级数据 */
          this.heroLevelDatas = {};
        }

        static instance() {
          if (!TemplateMgr.sInstance) {
            TemplateMgr.sInstance = new TemplateMgr();
          }

          if (DEBUG) {
            // @ts-ignore
            window["TemplateMgr"] = TemplateMgr;
          }

          return TemplateMgr.sInstance;
        }

        init(cb) {
          console.log("开始加载策划配置");
          var selfThis = this;
          resources.loadDir("template", function (err, assets) {
            if (err) {
              console.error(err.message || err);
              return;
            }

            var jsons = {};
            assets.forEach(element => {
              jsons[element.name] = element.json;
            });
            var tables = new (_crd && Tables === void 0 ? (_reportPossibleCrUseOfTables({
              error: Error()
            }), Tables) : Tables)(fileName => {
              return jsons[fileName];
            });
            console.log("配置加载完成"); // console.log("测试输出 = " + tables.TbItem.get(10000)!.name);

            selfThis.templates = tables;

            _export("Templates", Templates = tables); //二次加工数据


            selfThis.initWeaponLevelDatas();
            selfThis.initHeroLevelDatas();
            cb();
          });
        }
        /************************************* 武器 ************************************/
        //初始化武器等级数据


        initWeaponLevelDatas() {
          this.weaponLevelDatas = {};
          var list = Templates.TbWeapon.getDataList();

          for (var i = 0; i < list.length; i++) {
            var data = list[i];
            var _weaponId = data.weaponId;
            var _level = data.level;
            var dic = this.weaponLevelDatas[_weaponId];

            if (!dic) {
              dic = {};
              this.weaponLevelDatas[_weaponId] = dic;
            }

            dic[_level] = data;
          }
        } //获取武器等级数据


        getWeaponLevelData(weaponId, level) {
          var dic = this.weaponLevelDatas[weaponId];

          if (!dic) {
            return null;
          }

          var data = dic[level];

          if (!data) {
            return null;
          }

          return data;
        }
        /************************************* 英雄 ************************************/
        //初始化英雄等级数据


        initHeroLevelDatas() {
          this.heroLevelDatas = {};
          var list = Templates.TbHeroLevel.getDataList();

          for (var i = 0; i < list.length; i++) {
            var data = list[i];
            var _heroId = data.heroId;
            var _level2 = data.level;
            var dic = this.heroLevelDatas[_heroId];

            if (!dic) {
              dic = {};
              this.heroLevelDatas[_heroId] = dic;
            }

            dic[_level2] = data;
          }
        } //获取英雄等级数据


        getHeroLevelData(heroId, level) {
          var dic = this.heroLevelDatas[heroId];

          if (!dic) {
            return null;
          }

          var data = dic[level];

          if (!data) {
            return null;
          }

          return data;
        }
        /************************************* 其他 ************************************/
        //todo

        /**
         * 开车常量表
         * @returns 
         */


        getConstCarTemp() {
          return Templates.TbConstCar.getDataList()[0];
        }
        /**
         * 通用常量表
         * @returns 
         */


        getConstCommonTemp() {
          return Templates.TbConstCommon.getDataList()[0];
        } // 根据章数和关卡获取对应僵尸


        getStageByChapterId(cid, sid) {
          var tbStageSummary = Templates.TbStageSummary.getDataList();
          var tbChapterSummary = Templates.TbStage.getDataList();
          var cidArr = [];

          for (var i = 0; i < tbStageSummary.length; i++) {
            if (tbStageSummary[i].chapterId == cid) {
              cidArr.push(tbStageSummary[i].id);
            }
          }

          var sidArr = [];

          for (var _i = 0; _i < cidArr.length; _i++) {
            if (cidArr[_i] == sid) {
              for (var j = 0; j < tbChapterSummary.length; j++) {
                if (tbChapterSummary[j].cid == sid) {
                  sidArr.push(tbChapterSummary[j].id);
                }
              }

              break;
            }
          }

          return sidArr;
        }

      }); // 缩短代码


      TemplateMgr.sInstance = null;

      _export("Templates", Templates = TemplateMgr.instance().templates);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60d7c718b913b6b7e9d22cddda249a4b80503d9d.js.map