System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Templates, WeaponData, CoinObj, _crd;

  function _reportPossibleCrUseOfTemplates(extras) {
    _reporterNs.report("Templates", "../../../../manager/TemplateMgr", _context.meta, extras);
  }

  _export({
    WeaponData: void 0,
    CoinObj: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Templates = _unresolved_2.Templates;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91348VvqW5Bi6q8SBb34d+V", "WeaponData", undefined);

      __checkObsolete__(['Vec3']);

      _export("WeaponData", WeaponData = class WeaponData {
        constructor() {
          this._isSelect = false;
          //是否选中武器
          this._weaponCfgMapData = new Map();
          // key=> group + '|' + level 
          this._weaponGridData = new Map();
        }

        //可用格子数据
        get isSelect() {
          return this._isSelect;
        }

        set isSelect(value) {
          this._isSelect = value;
        }

        init() {
          const blockItems = (_crd && Templates === void 0 ? (_reportPossibleCrUseOfTemplates({
            error: Error()
          }), Templates) : Templates).TbBlockItem.getDataList();
          const weaponModels = [];

          for (let i = 0; i < blockItems.length; i++) {
            const weaponModel = {
              tempId: blockItems[i].id,
              Name: blockItems[i].name,
              Res: blockItems[i].icon,
              // TODO:
              weaponGroupNum: blockItems[i].group,
              itemType: blockItems[i].type.toString(),
              //TODO: 枚举类型,
              Type: blockItems[i].shapeType[0] + '_' + blockItems[i].shapeType[1],
              SkillId: blockItems[i].targetId,
              Level: blockItems[i].level,
              Points: blockItems[i].shapeTypePara,
              options_num: blockItems[i].optionsNum
            };
            weaponModels.push(weaponModel);
          }

          for (let index = 0; index < weaponModels.length; index++) {
            const element = weaponModels[index]; // TODO: 少一个配件

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

        getWeaponCfgByLevel(level, group) {
          let key = group + '|' + level;
          return this._weaponCfgMapData.get(key);
        }
        /* 通过level检测是否有该等级的装备 */


        checkWeaponByLevel(level, group) {
          let key = group + '|' + level;

          if (this._weaponCfgMapData.has(key)) {
            return true;
          }

          return false;
        }

        getWeaponCfgById(id) {
          const blockItem = (_crd && Templates === void 0 ? (_reportPossibleCrUseOfTemplates({
            error: Error()
          }), Templates) : Templates).TbBlockItem.getDataMap().get(id);
          const weaponModel = {
            tempId: blockItem.id,
            Name: blockItem.name,
            Res: blockItem.icon,
            // TODO:
            weaponGroupNum: blockItem.group,
            itemType: blockItem.type.toString(),
            //TODO: 枚举类型,
            Type: blockItem.shapeType[0] + '_' + blockItem.shapeType[1],
            SkillId: blockItem.targetId,
            Level: blockItem.level,
            Points: blockItem.shapeTypePara,
            options_num: blockItem.optionsNum
          };
          return weaponModel;
        }

        getWeaponCfgData() {
          let data = [];
          const blockItems = (_crd && Templates === void 0 ? (_reportPossibleCrUseOfTemplates({
            error: Error()
          }), Templates) : Templates).TbBlockItem.getDataList();
          const weaponModels = [];

          for (let i = 0; i < blockItems.length; i++) {
            const weaponModel = {
              tempId: blockItems[i].id,
              Name: blockItems[i].name,
              Res: blockItems[i].icon,
              // TODO:
              weaponGroupNum: blockItems[i].group,
              itemType: blockItems[i].type.toString(),
              //TODO: 枚举类型,
              Type: blockItems[i].shapeType[0] + '_' + blockItems[i].shapeType[1],
              SkillId: blockItems[i].targetId,
              Level: blockItems[i].level,
              Points: blockItems[i].shapeTypePara,
              options_num: blockItems[i].optionsNum
            };
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


        getWeaponPool() {
          let arr = [];
          const blockItems = (_crd && Templates === void 0 ? (_reportPossibleCrUseOfTemplates({
            error: Error()
          }), Templates) : Templates).TbBlockItem.getDataList();
          const weaponModels = [];

          for (let i = 0; i < blockItems.length; i++) {
            const weaponModel = {
              tempId: blockItems[i].id,
              Name: blockItems[i].name,
              Res: blockItems[i].icon,
              weaponGroupNum: blockItems[i].group,
              itemType: blockItems[i].type.toString(),
              //TODO: 枚举类型,
              Type: blockItems[i].shapeType[0] + '_' + blockItems[i].shapeType[1],
              SkillId: blockItems[i].targetId,
              Level: blockItems[i].level,
              Points: blockItems[i].shapeTypePara,
              options_num: blockItems[i].optionsNum
            };
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


        countRegionOccurrences(matrix, region) {
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


        getPlaceGridIdByWeigh(matrix) {
          let weaponData = []; //找出可以放置的格子

          if (this._weaponGridData.size) {
            this._weaponGridData.forEach((weaponCfg, key) => {
              let count = this.countRegionOccurrences(matrix, weaponCfg.Points);

              if (count) {
                weaponData.push(weaponCfg);
              }
            });
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
            });
            placeId = weaponData[index].tempId;
          }

          return placeId;
        }

        clear() {
          this._isSelect = false;
        }

        static get instance() {
          if (!this._instance) {
            this._instance = new WeaponData();
          }

          return this._instance;
        }

      });

      WeaponData._instance = null;

      _export("CoinObj", CoinObj = class CoinObj {
        constructor() {
          this.wpos = new Vec3();
          //金币坐标
          this.num = 0;
        } //金币数量


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ce1c0f263ebe02c6086dfb880266a85040cb119.js.map