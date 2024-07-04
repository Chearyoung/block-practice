System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, TempItem, TempBubble, TempConstCar, TempConstCommon, TempHero, TempHeroSkin, TempHeroLevel, TempHeroBreak, TempHeroStar, TempHeroSkill, TempWeapon, TempSkill, TempSkillEffect, TempBuff, TempBattleAttr, TempEnemyPrototype, TempEnemy, TempChapterSummary, TempStageSummary, TempStage, TempCar, TempFormula, TempObstacle, TempBullet, TempRogueSkill, TempAccessory, TempBlockGrid, TempBlockItem, TempBlockRefreshLevel, TempBlockRefreshLibrary, TempRoguePara, TempPublicRogueSkill, TempState, TempStageTd, TempCreature, TempStageTdb, TempMonsterGroup, Tables, _crd, temp;

  _export({
    TempItem: void 0,
    TempBubble: void 0,
    TempConstCar: void 0,
    TempConstCommon: void 0,
    TempHero: void 0,
    TempHeroSkin: void 0,
    TempHeroLevel: void 0,
    TempHeroBreak: void 0,
    TempHeroStar: void 0,
    TempHeroSkill: void 0,
    TempWeapon: void 0,
    TempSkill: void 0,
    TempSkillEffect: void 0,
    TempBuff: void 0,
    TempBattleAttr: void 0,
    TempEnemyPrototype: void 0,
    TempEnemy: void 0,
    TempChapterSummary: void 0,
    TempStageSummary: void 0,
    TempStage: void 0,
    TempCar: void 0,
    TempFormula: void 0,
    TempObstacle: void 0,
    TempBullet: void 0,
    TempRogueSkill: void 0,
    TempAccessory: void 0,
    TempBlockGrid: void 0,
    TempBlockItem: void 0,
    TempBlockRefreshLevel: void 0,
    TempBlockRefreshLibrary: void 0,
    TempRoguePara: void 0,
    TempPublicRogueSkill: void 0,
    TempState: void 0,
    TempStageTd: void 0,
    TempCreature: void 0,
    TempStageTdb: void 0,
    TempMonsterGroup: void 0,
    Tables: void 0,
    temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb54dWXzw5FCJZR2AJQaJdE", "schema", undefined);

      (function (_temp64) {
        let EQuality = /*#__PURE__*/function (EQuality) {
          EQuality[EQuality["White"] = 1] = "White";
          EQuality[EQuality["Green"] = 2] = "Green";
          EQuality[EQuality["Blue"] = 3] = "Blue";
          EQuality[EQuality["Purple"] = 4] = "Purple";
          EQuality[EQuality["Orange"] = 5] = "Orange";
          EQuality[EQuality["Red"] = 6] = "Red";
          return EQuality;
        }({});

        _temp64.EQuality = EQuality;
      })(temp || _export("temp", temp = {}));

      (function (_temp) {
        let EWeaponType = /*#__PURE__*/function (EWeaponType) {
          EWeaponType[EWeaponType["Short"] = 1] = "Short";
          EWeaponType[EWeaponType["Long"] = 2] = "Long";
          return EWeaponType;
        }({});

        _temp.EWeaponType = EWeaponType;
      })(temp || _export("temp", temp = {}));

      (function (_temp2) {
        let EWeaponShowType = /*#__PURE__*/function (EWeaponShowType) {
          EWeaponShowType[EWeaponShowType["NotShow"] = 0] = "NotShow";
          EWeaponShowType[EWeaponShowType["Cold"] = 1] = "Cold";
          EWeaponShowType[EWeaponShowType["Gun"] = 2] = "Gun";
          EWeaponShowType[EWeaponShowType["Jet"] = 3] = "Jet";
          EWeaponShowType[EWeaponShowType["Laser"] = 4] = "Laser";
          return EWeaponShowType;
        }({});

        _temp2.EWeaponShowType = EWeaponShowType;
      })(temp || _export("temp", temp = {}));

      (function (_temp3) {
        let EWeaponAttackType = /*#__PURE__*/function (EWeaponAttackType) {
          EWeaponAttackType[EWeaponAttackType["Skill"] = 1] = "Skill";
          EWeaponAttackType[EWeaponAttackType["Bullet"] = 2] = "Bullet";
          return EWeaponAttackType;
        }({});

        _temp3.EWeaponAttackType = EWeaponAttackType;
      })(temp || _export("temp", temp = {}));

      (function (_temp4) {
        let ESkillCaller = /*#__PURE__*/function (ESkillCaller) {
          ESkillCaller[ESkillCaller["Public"] = 0] = "Public";
          ESkillCaller[ESkillCaller["Weapon"] = 1] = "Weapon";
          ESkillCaller[ESkillCaller["Hero"] = 2] = "Hero";
          ESkillCaller[ESkillCaller["Monster"] = 3] = "Monster";
          ESkillCaller[ESkillCaller["Creature"] = 4] = "Creature";
          return ESkillCaller;
        }({});

        _temp4.ESkillCaller = ESkillCaller;
      })(temp || _export("temp", temp = {}));

      (function (_temp5) {
        let ESkillType = /*#__PURE__*/function (ESkillType) {
          ESkillType[ESkillType["Active"] = 1] = "Active";
          ESkillType[ESkillType["PassiveTrigger"] = 2] = "PassiveTrigger";
          ESkillType[ESkillType["PassivePara"] = 4] = "PassivePara";
          return ESkillType;
        }({});

        _temp5.ESkillType = ESkillType;
      })(temp || _export("temp", temp = {}));

      (function (_temp6) {
        let EPassiveParaType = /*#__PURE__*/function (EPassiveParaType) {
          EPassiveParaType[EPassiveParaType["NoParaType"] = 0] = "NoParaType";
          EPassiveParaType[EPassiveParaType["Weapon"] = 1] = "Weapon";
          EPassiveParaType[EPassiveParaType["Bullet"] = 2] = "Bullet";
          EPassiveParaType[EPassiveParaType["Skill"] = 3] = "Skill";
          EPassiveParaType[EPassiveParaType["SkillEffect"] = 4] = "SkillEffect";
          EPassiveParaType[EPassiveParaType["Buff"] = 5] = "Buff";
          EPassiveParaType[EPassiveParaType["Creature"] = 6] = "Creature";
          return EPassiveParaType;
        }({});

        _temp6.EPassiveParaType = EPassiveParaType;
      })(temp || _export("temp", temp = {}));

      (function (_temp7) {
        let ETriggerCondition = /*#__PURE__*/function (ETriggerCondition) {
          ETriggerCondition[ETriggerCondition["NoCondition"] = 0] = "NoCondition";
          ETriggerCondition[ETriggerCondition["WeaponAttack"] = 1] = "WeaponAttack";
          ETriggerCondition[ETriggerCondition["Block"] = 2] = "Block";
          ETriggerCondition[ETriggerCondition["SkillEffect"] = 3] = "SkillEffect";
          ETriggerCondition[ETriggerCondition["Reload"] = 4] = "Reload";
          ETriggerCondition[ETriggerCondition["CreatureDie"] = 5] = "CreatureDie";
          ETriggerCondition[ETriggerCondition["BuffEnd"] = 6] = "BuffEnd";
          ETriggerCondition[ETriggerCondition["BattleStart"] = 7] = "BattleStart";
          return ETriggerCondition;
        }({});

        _temp7.ETriggerCondition = ETriggerCondition;
      })(temp || _export("temp", temp = {}));

      (function (_temp8) {
        let ESkillEffectType = /*#__PURE__*/function (ESkillEffectType) {
          ESkillEffectType[ESkillEffectType["WeaponDam"] = 1] = "WeaponDam";
          ESkillEffectType[ESkillEffectType["SkillDam"] = 2] = "SkillDam";
          ESkillEffectType[ESkillEffectType["ConductDam"] = 3] = "ConductDam";
          ESkillEffectType[ESkillEffectType["RefractionDam"] = 4] = "RefractionDam";
          ESkillEffectType[ESkillEffectType["SkillHeal"] = 5] = "SkillHeal";
          ESkillEffectType[ESkillEffectType["AddBuff"] = 6] = "AddBuff";
          ESkillEffectType[ESkillEffectType["Call"] = 7] = "Call";
          return ESkillEffectType;
        }({});

        _temp8.ESkillEffectType = ESkillEffectType;
      })(temp || _export("temp", temp = {}));

      (function (_temp9) {
        let ESkillEffectRangeType = /*#__PURE__*/function (ESkillEffectRangeType) {
          ESkillEffectRangeType[ESkillEffectRangeType["CurrentTarget"] = 1] = "CurrentTarget";
          ESkillEffectRangeType[ESkillEffectRangeType["EntireField"] = 2] = "EntireField";
          ESkillEffectRangeType[ESkillEffectRangeType["Toucher"] = 3] = "Toucher";
          ESkillEffectRangeType[ESkillEffectRangeType["Rectangle"] = 4] = "Rectangle";
          ESkillEffectRangeType[ESkillEffectRangeType["Circular"] = 5] = "Circular";
          ESkillEffectRangeType[ESkillEffectRangeType["Self"] = 7] = "Self";
          ESkillEffectRangeType[ESkillEffectRangeType["Origin"] = 8] = "Origin";
          return ESkillEffectRangeType;
        }({});

        _temp9.ESkillEffectRangeType = ESkillEffectRangeType;
      })(temp || _export("temp", temp = {}));

      (function (_temp10) {
        let EEffectTargetCamp = /*#__PURE__*/function (EEffectTargetCamp) {
          EEffectTargetCamp[EEffectTargetCamp["NoCamp"] = 0] = "NoCamp";
          EEffectTargetCamp[EEffectTargetCamp["Teammate"] = 1] = "Teammate";
          EEffectTargetCamp[EEffectTargetCamp["Enemy"] = 2] = "Enemy";
          return EEffectTargetCamp;
        }({});

        _temp10.EEffectTargetCamp = EEffectTargetCamp;
      })(temp || _export("temp", temp = {}));

      (function (_temp11) {
        let EEffectTargetScreen = /*#__PURE__*/function (EEffectTargetScreen) {
          EEffectTargetScreen[EEffectTargetScreen["NotScreen"] = 0] = "NotScreen";
          EEffectTargetScreen[EEffectTargetScreen["All"] = 1] = "All";
          EEffectTargetScreen[EEffectTargetScreen["HpLowestPer"] = 2] = "HpLowestPer";
          EEffectTargetScreen[EEffectTargetScreen["Nearest"] = 3] = "Nearest";
          EEffectTargetScreen[EEffectTargetScreen["Random"] = 4] = "Random";
          return EEffectTargetScreen;
        }({});

        _temp11.EEffectTargetScreen = EEffectTargetScreen;
      })(temp || _export("temp", temp = {}));

      (function (_temp12) {
        let EBuffType = /*#__PURE__*/function (EBuffType) {
          EBuffType[EBuffType["Positive"] = 1] = "Positive";
          EBuffType[EBuffType["Negative"] = 2] = "Negative";
          return EBuffType;
        }({});

        _temp12.EBuffType = EBuffType;
      })(temp || _export("temp", temp = {}));

      (function (_temp13) {
        let EBuffSame = /*#__PURE__*/function (EBuffSame) {
          EBuffSame[EBuffSame["Invalid"] = 1] = "Invalid";
          EBuffSame[EBuffSame["Refresh"] = 2] = "Refresh";
          EBuffSame[EBuffSame["Overlay"] = 3] = "Overlay";
          return EBuffSame;
        }({});

        _temp13.EBuffSame = EBuffSame;
      })(temp || _export("temp", temp = {}));

      (function (_temp14) {
        let EAttrValueType = /*#__PURE__*/function (EAttrValueType) {
          EAttrValueType[EAttrValueType["INT"] = 1] = "INT";
          EAttrValueType[EAttrValueType["PERW"] = 2] = "PERW";
          return EAttrValueType;
        }({});

        _temp14.EAttrValueType = EAttrValueType;
      })(temp || _export("temp", temp = {}));

      (function (_temp15) {
        let EMonsterType = /*#__PURE__*/function (EMonsterType) {
          EMonsterType[EMonsterType["NoType"] = 0] = "NoType";
          EMonsterType[EMonsterType["NORMAL"] = 1] = "NORMAL";
          EMonsterType[EMonsterType["ELITE"] = 2] = "ELITE";
          EMonsterType[EMonsterType["BOSS"] = 3] = "BOSS";
          return EMonsterType;
        }({});

        _temp15.EMonsterType = EMonsterType;
      })(temp || _export("temp", temp = {}));

      (function (_temp16) {
        let EMoveType = /*#__PURE__*/function (EMoveType) {
          EMoveType[EMoveType["Ground"] = 1] = "Ground";
          EMoveType[EMoveType["Flying"] = 2] = "Flying";
          return EMoveType;
        }({});

        _temp16.EMoveType = EMoveType;
      })(temp || _export("temp", temp = {}));

      (function (_temp17) {
        let ETrajectoryType = /*#__PURE__*/function (ETrajectoryType) {
          ETrajectoryType[ETrajectoryType["Line"] = 1] = "Line";
          ETrajectoryType[ETrajectoryType["Aim"] = 2] = "Aim";
          ETrajectoryType[ETrajectoryType["Jump"] = 3] = "Jump";
          return ETrajectoryType;
        }({});

        _temp17.ETrajectoryType = ETrajectoryType;
      })(temp || _export("temp", temp = {}));

      (function (_temp18) {
        let EBulletAfterCollide = /*#__PURE__*/function (EBulletAfterCollide) {
          EBulletAfterCollide[EBulletAfterCollide["Remove"] = 0] = "Remove";
          EBulletAfterCollide[EBulletAfterCollide["Pass"] = 1] = "Pass";
          EBulletAfterCollide[EBulletAfterCollide["Bounce"] = 2] = "Bounce";
          return EBulletAfterCollide;
        }({});

        _temp18.EBulletAfterCollide = EBulletAfterCollide;
      })(temp || _export("temp", temp = {}));

      (function (_temp19) {
        let ERogueGroup = /*#__PURE__*/function (ERogueGroup) {
          ERogueGroup[ERogueGroup["Public"] = 1] = "Public";
          ERogueGroup[ERogueGroup["Weapon"] = 2] = "Weapon";
          ERogueGroup[ERogueGroup["Accessor"] = 3] = "Accessor";
          return ERogueGroup;
        }({});

        _temp19.ERogueGroup = ERogueGroup;
      })(temp || _export("temp", temp = {}));

      (function (_temp20) {
        let EAccessoryReachType = /*#__PURE__*/function (EAccessoryReachType) {
          EAccessoryReachType[EAccessoryReachType["NoAdd"] = 0] = "NoAdd";
          EAccessoryReachType[EAccessoryReachType["Transverse"] = 1] = "Transverse";
          EAccessoryReachType[EAccessoryReachType["Direction"] = 2] = "Direction";
          EAccessoryReachType[EAccessoryReachType["Surround"] = 3] = "Surround";
          return EAccessoryReachType;
        }({});

        _temp20.EAccessoryReachType = EAccessoryReachType;
      })(temp || _export("temp", temp = {}));

      (function (_temp21) {
        let EBlockItemType = /*#__PURE__*/function (EBlockItemType) {
          EBlockItemType[EBlockItemType["Weapon"] = 1] = "Weapon";
          EBlockItemType[EBlockItemType["Accessory"] = 2] = "Accessory";
          EBlockItemType[EBlockItemType["Grid"] = 3] = "Grid";
          return EBlockItemType;
        }({});

        _temp21.EBlockItemType = EBlockItemType;
      })(temp || _export("temp", temp = {}));

      (function (_temp22) {
        let ECreatureDeadType = /*#__PURE__*/function (ECreatureDeadType) {
          ECreatureDeadType[ECreatureDeadType["NotNeed"] = 0] = "NotNeed";
          ECreatureDeadType[ECreatureDeadType["Hp"] = 1] = "Hp";
          ECreatureDeadType[ECreatureDeadType["Duration"] = 2] = "Duration";
          return ECreatureDeadType;
        }({});

        _temp22.ECreatureDeadType = ECreatureDeadType;
      })(temp || _export("temp", temp = {}));

      _export("TempItem", TempItem = class TempItem {
        constructor(_json_) {
          /**
           * 这是id
           */
          this.id = void 0;

          /**
           * 名字
           */
          this.name = void 0;

          /**
           * 描述
           */
          this.desc = void 0;

          /**
           * 价格
           */
          this.price = void 0;

          /**
           * 引用当前表
           */
          this.upgradeToItemId = void 0;
          this.upgradeToItemId_ref = void 0;

          /**
           * 过期时间
           */
          this.expireTime = void 0;

          /**
           * 能否批量使用
           */
          this.batchUseable = void 0;

          /**
           * 道具兑换配置
           */
          this.exchangeStream = void 0;
          this.exchangeList = void 0;

          /**
           * 道具兑换配置
           */
          this.exchangeColumn = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.price === undefined) {
            throw new Error();
          }

          this.price = _json_.price;

          if (_json_.upgrade_to_item_id === undefined) {
            throw new Error();
          }

          this.upgradeToItemId = _json_.upgrade_to_item_id;

          if (_json_.expire_time != undefined) {
            this.expireTime = _json_.expire_time;
          } else {
            this.expireTime = undefined;
          }

          if (_json_.batch_useable === undefined) {
            throw new Error();
          }

          this.batchUseable = _json_.batch_useable;

          if (_json_.exchange_stream === undefined) {
            throw new Error();
          }

          this.exchangeStream = new temp.ItemExchange(_json_.exchange_stream);

          if (_json_.exchange_list === undefined) {
            throw new Error();
          }

          {
            this.exchangeList = [];

            for (let _ele0 of _json_.exchange_list) {
              let _e0;

              _e0 = new temp.ItemExchange(_ele0);
              this.exchangeList.push(_e0);
            }
          }

          if (_json_.exchange_column === undefined) {
            throw new Error();
          }

          this.exchangeColumn = new temp.ItemExchange(_json_.exchange_column);
        }

        resolve(tables) {
          var _this$exchangeStream, _this$exchangeColumn;

          this.upgradeToItemId_ref = tables.TbItem.get(this.upgradeToItemId);
          (_this$exchangeStream = this.exchangeStream) == null || _this$exchangeStream.resolve(tables);

          for (let _e of this.exchangeList) {
            _e == null || _e.resolve(tables);
          }

          (_this$exchangeColumn = this.exchangeColumn) == null || _this$exchangeColumn.resolve(tables);
        }

      });

      (function (_temp23) {
        class ItemExchange {
          constructor(_json_) {
            /**
             * 道具id
             */
            this.id = void 0;

            /**
             * 道具数量
             */
            this.num = void 0;

            if (_json_.id === undefined) {
              throw new Error();
            }

            this.id = _json_.id;

            if (_json_.num === undefined) {
              throw new Error();
            }

            this.num = _json_.num;
          }

          resolve(tables) {}

        }

        _temp23.ItemExchange = ItemExchange;
      })(temp || _export("temp", temp = {}));

      _export("TempBubble", TempBubble = class TempBubble {
        constructor(_json_) {
          /**
           * 这是id
           */
          this.idd = void 0;

          /**
           * 名字
           */
          this.name = void 0;

          if (_json_.idd === undefined) {
            throw new Error();
          }

          {
            this.idd = [];

            for (let _ele0 of _json_.idd) {
              let _e0;

              _e0 = _ele0;
              this.idd.push(_e0);
            }
          }

          if (_json_.name === undefined) {
            throw new Error();
          }

          {
            this.name = [];

            for (let _ele0 of _json_.name) {
              let _e0;

              _e0 = _ele0;
              this.name.push(_e0);
            }
          }
        }

        resolve(tables) {}

      });

      _export("TempConstCar", TempConstCar = class TempConstCar {
        constructor(_json_) {
          /**
           * 摄像机角度
           */
          this.cameraOrthoHeight = void 0;

          /**
           * 基础速度
           */
          this.speedv1 = void 0;

          /**
           * 最快速度
           */
          this.speedv2 = void 0;

          /**
           * 加速度
           */
          this.acc = void 0;

          /**
           * 侧向移动速度
           */
          this.speedv3 = void 0;

          /**
           * 车辆在界面中的相对位置
           */
          this.carStartPoint = void 0;

          /**
           * 弯道纵向速度
           */
          this.speedv4 = void 0;

          /**
           * 弯道横向速度
           */
          this.speedv5 = void 0;

          /**
           * 摇杆透明度
           */
          this.joystickAlpha = void 0;

          /**
           * 抖动强度
           */
          this.shakeIntensity = void 0;

          /**
           * 持续抖动间隔
           */
          this.shakeFrequency = void 0;

          /**
           * 抖动次数
           */
          this.shakeCount = void 0;

          /**
           * 刷怪点和车距离
           */
          this.spawnPointDis = void 0;

          /**
           * 单位时间连续撞击僵尸数量
           */
          this.killCount = void 0;

          /**
           * 判定周期
           */
          this.timeInterval = void 0;

          /**
           * 正反馈CD
           */
          this.posCD = void 0;

          /**
           * 每次正反馈车旋转几圈
           */
          this.rotaCount = void 0;

          /**
           * 每次正反馈车旋转一圈的时间
           */
          this.rotaFrequency = void 0;

          /**
           * 1单位距离等于多少px
           */
          this.unitToPixel = void 0;

          /**
           * 1单位距离消耗多少油
           */
          this.oilConsumption = void 0;

          /**
           * 每只怪刷新间隔
           */
          this.enemyDelay = void 0;

          if (_json_.cameraOrthoHeight === undefined) {
            throw new Error();
          }

          this.cameraOrthoHeight = _json_.cameraOrthoHeight;

          if (_json_.speedv1 === undefined) {
            throw new Error();
          }

          this.speedv1 = _json_.speedv1;

          if (_json_.speedv2 === undefined) {
            throw new Error();
          }

          this.speedv2 = _json_.speedv2;

          if (_json_.acc === undefined) {
            throw new Error();
          }

          this.acc = _json_.acc;

          if (_json_.speedv3 === undefined) {
            throw new Error();
          }

          this.speedv3 = _json_.speedv3;

          if (_json_.carStartPoint === undefined) {
            throw new Error();
          }

          this.carStartPoint = new temp.Vec2(_json_.carStartPoint);

          if (_json_.speedv4 === undefined) {
            throw new Error();
          }

          this.speedv4 = _json_.speedv4;

          if (_json_.speedv5 === undefined) {
            throw new Error();
          }

          this.speedv5 = _json_.speedv5;

          if (_json_.joystickAlpha === undefined) {
            throw new Error();
          }

          this.joystickAlpha = _json_.joystickAlpha;

          if (_json_.shakeIntensity === undefined) {
            throw new Error();
          }

          this.shakeIntensity = _json_.shakeIntensity;

          if (_json_.shakeFrequency === undefined) {
            throw new Error();
          }

          this.shakeFrequency = _json_.shakeFrequency;

          if (_json_.shakeCount === undefined) {
            throw new Error();
          }

          this.shakeCount = _json_.shakeCount;

          if (_json_.spawnPointDis === undefined) {
            throw new Error();
          }

          this.spawnPointDis = _json_.spawnPointDis;

          if (_json_.killCount === undefined) {
            throw new Error();
          }

          this.killCount = _json_.killCount;

          if (_json_.timeInterval === undefined) {
            throw new Error();
          }

          this.timeInterval = _json_.timeInterval;

          if (_json_.posCD === undefined) {
            throw new Error();
          }

          this.posCD = _json_.posCD;

          if (_json_.rotaCount === undefined) {
            throw new Error();
          }

          this.rotaCount = _json_.rotaCount;

          if (_json_.rotaFrequency === undefined) {
            throw new Error();
          }

          this.rotaFrequency = _json_.rotaFrequency;

          if (_json_.unitToPixel === undefined) {
            throw new Error();
          }

          this.unitToPixel = _json_.unitToPixel;

          if (_json_.oilConsumption === undefined) {
            throw new Error();
          }

          this.oilConsumption = _json_.oilConsumption;

          if (_json_.enemyDelay === undefined) {
            throw new Error();
          }

          this.enemyDelay = _json_.enemyDelay;
        }

        resolve(tables) {
          var _this$carStartPoint;

          (_this$carStartPoint = this.carStartPoint) == null || _this$carStartPoint.resolve(tables);
        }

      });

      (function (_temp24) {
        class Vec2 {
          constructor(_json_) {
            /**
             * x坐标
             */
            this.x = void 0;

            /**
             * y坐标
             */
            this.y = void 0;

            if (_json_.x === undefined) {
              throw new Error();
            }

            this.x = _json_.x;

            if (_json_.y === undefined) {
              throw new Error();
            }

            this.y = _json_.y;
          }

          resolve(tables) {}

        }

        _temp24.Vec2 = Vec2;
      })(temp || _export("temp", temp = {}));

      _export("TempConstCommon", TempConstCommon = class TempConstCommon {
        constructor(_json_) {
          /**
           * 测试输出
           */
          this.testlog = void 0;

          /**
           * 公式关键词
           */
          this.formulaKeyWods = void 0;

          if (_json_.testlog === undefined) {
            throw new Error();
          }

          this.testlog = _json_.testlog;

          if (_json_.formulaKeyWods === undefined) {
            throw new Error();
          }

          {
            this.formulaKeyWods = [];

            for (let _ele0 of _json_.formulaKeyWods) {
              let _e0;

              _e0 = _ele0;
              this.formulaKeyWods.push(_e0);
            }
          }
        }

        resolve(tables) {}

      });

      _export("TempHero", TempHero = class TempHero {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 英雄ID
           */
          this.heroId = void 0;

          /**
           * 英雄名称
           */
          this.name = void 0;

          /**
           * 英雄描述
           */
          this.desc = void 0;

          /**
           * 英雄图标
           */
          this.icon = void 0;

          /**
           * 英雄阵营
           */
          this.camp = void 0;

          /**
           * 英雄品质
           */
          this.quality = void 0;

          /**
           * 基础移动速度（单位:像素/秒）
           */
          this.baseSpeed = void 0;

          /**
           * 默认武器
           */
          this.defaultWeapon = void 0;

          /**
           * 默认皮肤
           */
          this.defaultSkin = void 0;

          /**
           * 碎片拆分
           */
          this.debrisGet = void 0;

          /**
           * 怒气技能
           */
          this.skill = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.heroId === undefined) {
            throw new Error();
          }

          this.heroId = _json_.heroId;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;

          if (_json_.camp === undefined) {
            throw new Error();
          }

          this.camp = _json_.camp;

          if (_json_.quality === undefined) {
            throw new Error();
          }

          this.quality = _json_.quality;

          if (_json_.baseSpeed === undefined) {
            throw new Error();
          }

          this.baseSpeed = _json_.baseSpeed;

          if (_json_.defaultWeapon === undefined) {
            throw new Error();
          }

          this.defaultWeapon = _json_.defaultWeapon;

          if (_json_.defaultSkin === undefined) {
            throw new Error();
          }

          this.defaultSkin = _json_.defaultSkin;

          if (_json_.debrisGet === undefined) {
            throw new Error();
          }

          {
            this.debrisGet = [];

            for (let _ele0 of _json_.debrisGet) {
              let _e0;

              _e0 = new temp.IdNum(_ele0);
              this.debrisGet.push(_e0);
            }
          }

          if (_json_.skill === undefined) {
            throw new Error();
          }

          {
            this.skill = [];

            for (let _ele0 of _json_.skill) {
              let _e0;

              _e0 = _ele0;
              this.skill.push(_e0);
            }
          }
        }

        resolve(tables) {
          for (let _e of this.debrisGet) {
            _e == null || _e.resolve(tables);
          }
        }

      });

      (function (_temp25) {
        class IdNum {
          constructor(_json_) {
            /**
             * 道具id
             */
            this.id = void 0;

            /**
             * 道具数量
             */
            this.num = void 0;

            if (_json_.id === undefined) {
              throw new Error();
            }

            this.id = _json_.id;

            if (_json_.num === undefined) {
              throw new Error();
            }

            this.num = _json_.num;
          }

          resolve(tables) {}

        }

        _temp25.IdNum = IdNum;
      })(temp || _export("temp", temp = {}));

      _export("TempHeroSkin", TempHeroSkin = class TempHeroSkin {
        constructor(_json_) {
          /**
           * 皮肤ID
           */
          this.id = void 0;

          /**
           * 皮肤名称
           */
          this.name = void 0;

          /**
           * 皮肤描述
           */
          this.desc = void 0;

          /**
           * 皮肤资源
           */
          this.icon = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;
        }

        resolve(tables) {}

      });

      _export("TempHeroLevel", TempHeroLevel = class TempHeroLevel {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 英雄ID
           */
          this.heroId = void 0;

          /**
           * 英雄等级
           */
          this.level = void 0;

          /**
           * 升级消耗
           */
          this.need = void 0;

          /**
           * 英雄属性
           */
          this.attr = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.heroId === undefined) {
            throw new Error();
          }

          this.heroId = _json_.heroId;

          if (_json_.level === undefined) {
            throw new Error();
          }

          this.level = _json_.level;

          if (_json_.need === undefined) {
            throw new Error();
          }

          {
            this.need = [];

            for (let _ele0 of _json_.need) {
              let _e0;

              _e0 = new temp.IdNum(_ele0);
              this.need.push(_e0);
            }
          }

          if (_json_.attr === undefined) {
            throw new Error();
          }

          this.attr = new Map();

          for (var _entry0_ of _json_.attr) {
            let _k0;

            _k0 = _entry0_[0];

            let _v0;

            _v0 = _entry0_[1];
            this.attr.set(_k0, _v0);
          }
        }

        resolve(tables) {
          for (let _e of this.need) {
            _e == null || _e.resolve(tables);
          }
        }

      });

      _export("TempHeroBreak", TempHeroBreak = class TempHeroBreak {
        constructor(_json_) {
          /**
           * 英雄ID
           */
          this.id = void 0;

          /**
           * 英雄突破等级
           */
          this.breakLv = void 0;

          /**
           * 突破消耗
           */
          this.need = void 0;

          /**
           * 英雄属性
           */
          this.attribute = void 0;

          /**
           * 突破奖励
           */
          this.reward = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.breakLv === undefined) {
            throw new Error();
          }

          this.breakLv = _json_.breakLv;

          if (_json_.need === undefined) {
            throw new Error();
          }

          {
            this.need = [];

            for (let _ele0 of _json_.need) {
              let _e0;

              _e0 = new temp.IdNum(_ele0);
              this.need.push(_e0);
            }
          }

          if (_json_.attribute === undefined) {
            throw new Error();
          }

          {
            this.attribute = [];

            for (let _ele0 of _json_.attribute) {
              let _e0;

              _e0 = new temp.AttrVal(_ele0);
              this.attribute.push(_e0);
            }
          }

          if (_json_.reward === undefined) {
            throw new Error();
          }

          {
            this.reward = [];

            for (let _ele0 of _json_.reward) {
              let _e0;

              _e0 = new temp.IdNum(_ele0);
              this.reward.push(_e0);
            }
          }
        }

        resolve(tables) {
          for (let _e of this.need) {
            _e == null || _e.resolve(tables);
          }

          for (let _e of this.attribute) {
            _e == null || _e.resolve(tables);
          }

          for (let _e of this.reward) {
            _e == null || _e.resolve(tables);
          }
        }

      });

      (function (_temp26) {
        class AttrVal {
          constructor(_json_) {
            /**
             * 属性id
             */
            this.attr = void 0;

            /**
             * 属性值
             */
            this.val = void 0;

            if (_json_.attr === undefined) {
              throw new Error();
            }

            this.attr = _json_.attr;

            if (_json_.val === undefined) {
              throw new Error();
            }

            this.val = _json_.val;
          }

          resolve(tables) {}

        }

        _temp26.AttrVal = AttrVal;
      })(temp || _export("temp", temp = {}));

      _export("TempHeroStar", TempHeroStar = class TempHeroStar {
        constructor(_json_) {
          /**
           * 英雄ID
           */
          this.id = void 0;

          /**
           * 英雄星级
           */
          this.star = void 0;

          /**
           * 升星消耗
           */
          this.need = void 0;

          /**
           * 英雄属性
           */
          this.attribute = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.star === undefined) {
            throw new Error();
          }

          this.star = _json_.star;

          if (_json_.need === undefined) {
            throw new Error();
          }

          {
            this.need = [];

            for (let _ele0 of _json_.need) {
              let _e0;

              _e0 = new temp.IdNum(_ele0);
              this.need.push(_e0);
            }
          }

          if (_json_.attribute === undefined) {
            throw new Error();
          }

          {
            this.attribute = [];

            for (let _ele0 of _json_.attribute) {
              let _e0;

              _e0 = new temp.AttrVal(_ele0);
              this.attribute.push(_e0);
            }
          }
        }

        resolve(tables) {
          for (let _e of this.need) {
            _e == null || _e.resolve(tables);
          }

          for (let _e of this.attribute) {
            _e == null || _e.resolve(tables);
          }
        }

      });

      _export("TempHeroSkill", TempHeroSkill = class TempHeroSkill {
        constructor(_json_) {
          /**
           * 技能组ID
           */
          this.id = void 0;

          /**
           * 技能等级
           */
          this.level = void 0;

          /**
           * 星级解锁
           */
          this.starlevel = void 0;

          /**
           * 技能效果
           */
          this.effect = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.level === undefined) {
            throw new Error();
          }

          this.level = _json_.level;

          if (_json_.starlevel === undefined) {
            throw new Error();
          }

          this.starlevel = _json_.starlevel;

          if (_json_.effect === undefined) {
            throw new Error();
          }

          this.effect = _json_.effect;
        }

        resolve(tables) {}

      });

      _export("TempWeapon", TempWeapon = class TempWeapon {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 武器ID
           */
          this.weaponId = void 0;

          /**
           * 武器等级
           */
          this.level = void 0;

          /**
           * 武器名称
           */
          this.name = void 0;

          /**
           * 武器描述
           */
          this.desc = void 0;

          /**
           * 武器图标
           */
          this.icon = void 0;

          /**
           * 武器外显
           */
          this.resource = void 0;

          /**
           * 武器类型
           */
          this.type = void 0;

          /**
           * 界面展示类型
           */
          this.showType = void 0;

          /**
           * 是否需要引导
           */
          this.ifGuide = void 0;

          /**
           * 警戒范围
           */
          this.warnRange = void 0;

          /**
           * 攻击/射击时间间隔（单位：ms)
           */
          this.interval = void 0;

          /**
           * 攻击/射击距离
           */
          this.distance = void 0;

          /**
           * 弹匣容量
           */
          this.magazine = void 0;

          /**
           * 换弹时间（单位：ms)
           */
          this.changeTime = void 0;

          /**
           * 攻击效果触发时间（万分比）
           */
          this.triggerTime = void 0;

          /**
           * 能量恢复
           */
          this.energyGet = void 0;

          /**
           * 攻击效果类型
           */
          this.attackEffect = void 0;

          /**
           * 攻击效果参数
           */
          this.attackEffectPara = void 0;

          /**
           * 武器属性
           */
          this.weaponAttribute = void 0;

          /**
           * 武器技能
           */
          this.weaponSkills = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.weaponId === undefined) {
            throw new Error();
          }

          this.weaponId = _json_.weaponId;

          if (_json_.level === undefined) {
            throw new Error();
          }

          this.level = _json_.level;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;

          if (_json_.resource === undefined) {
            throw new Error();
          }

          this.resource = _json_.resource;

          if (_json_.type === undefined) {
            throw new Error();
          }

          this.type = _json_.type;

          if (_json_.showType === undefined) {
            throw new Error();
          }

          this.showType = _json_.showType;

          if (_json_.ifGuide === undefined) {
            throw new Error();
          }

          this.ifGuide = _json_.ifGuide;

          if (_json_.warnRange === undefined) {
            throw new Error();
          }

          this.warnRange = _json_.warnRange;

          if (_json_.interval === undefined) {
            throw new Error();
          }

          this.interval = _json_.interval;

          if (_json_.distance === undefined) {
            throw new Error();
          }

          this.distance = _json_.distance;

          if (_json_.magazine === undefined) {
            throw new Error();
          }

          this.magazine = _json_.magazine;

          if (_json_.changeTime === undefined) {
            throw new Error();
          }

          this.changeTime = _json_.changeTime;

          if (_json_.triggerTime === undefined) {
            throw new Error();
          }

          this.triggerTime = _json_.triggerTime;

          if (_json_.energyGet === undefined) {
            throw new Error();
          }

          this.energyGet = _json_.energyGet;

          if (_json_.attackEffect === undefined) {
            throw new Error();
          }

          this.attackEffect = _json_.attackEffect;

          if (_json_.attackEffectPara === undefined) {
            throw new Error();
          }

          this.attackEffectPara = _json_.attackEffectPara;

          if (_json_.weaponAttribute === undefined) {
            throw new Error();
          }

          this.weaponAttribute = _json_.weaponAttribute;

          if (_json_.weaponSkills === undefined) {
            throw new Error();
          }

          this.weaponSkills = _json_.weaponSkills;
        }

        resolve(tables) {}

      });

      _export("TempSkill", TempSkill = class TempSkill {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 技能名称
           */
          this.name = void 0;

          /**
           * 技能描述
           */
          this.desc = void 0;

          /**
           * 技能图标
           */
          this.icon = void 0;

          /**
           * 技能动作
           */
          this.skillAction = void 0;

          /**
           * 技能调用单位类型
           */
          this.skillCaller = void 0;

          /**
           * 技能调用单位参数
           */
          this.skillCallerPara = void 0;

          /**
           * 技能类型
           */
          this.SkillType = void 0;

          /**
           * 被动属性类型
           */
          this.PassiveParaType = void 0;

          /**
           * 被动属性类型
           */
          this.PassiveParaPara = void 0;

          /**
           * 被动触发条件
           */
          this.triggerCondition = void 0;

          /**
           * 被动触发条件参数
           */
          this.triggerConditionPara = void 0;

          /**
           * 被动触发概率
           */
          this.triggerProbability = void 0;

          /**
           * 技能效果
           */
          this.skillEffects = void 0;

          /**
           * 技能CD
           */
          this.coolTime = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;

          if (_json_.skillAction === undefined) {
            throw new Error();
          }

          this.skillAction = _json_.skillAction;

          if (_json_.skillCaller === undefined) {
            throw new Error();
          }

          this.skillCaller = _json_.skillCaller;

          if (_json_.skillCallerPara === undefined) {
            throw new Error();
          }

          this.skillCallerPara = _json_.skillCallerPara;

          if (_json_.SkillType === undefined) {
            throw new Error();
          }

          this.SkillType = _json_.SkillType;

          if (_json_.PassiveParaType === undefined) {
            throw new Error();
          }

          this.PassiveParaType = _json_.PassiveParaType;

          if (_json_.PassiveParaPara === undefined) {
            throw new Error();
          }

          {
            this.PassiveParaPara = [];

            for (let _ele0 of _json_.PassiveParaPara) {
              let _e0;

              _e0 = _ele0;
              this.PassiveParaPara.push(_e0);
            }
          }

          if (_json_.triggerCondition === undefined) {
            throw new Error();
          }

          this.triggerCondition = _json_.triggerCondition;

          if (_json_.triggerConditionPara === undefined) {
            throw new Error();
          }

          {
            this.triggerConditionPara = [];

            for (let _ele0 of _json_.triggerConditionPara) {
              let _e0;

              _e0 = _ele0;
              this.triggerConditionPara.push(_e0);
            }
          }

          if (_json_.triggerProbability === undefined) {
            throw new Error();
          }

          this.triggerProbability = _json_.triggerProbability;

          if (_json_.skillEffects === undefined) {
            throw new Error();
          }

          {
            this.skillEffects = [];

            for (let _ele0 of _json_.skillEffects) {
              let _e0;

              _e0 = _ele0;
              this.skillEffects.push(_e0);
            }
          }

          if (_json_.coolTime === undefined) {
            throw new Error();
          }

          this.coolTime = _json_.coolTime;
        }

        resolve(tables) {}

      });

      _export("TempSkillEffect", TempSkillEffect = class TempSkillEffect {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 效果特效
           */
          this.triggerParticleEffects = void 0;

          /**
           * 技能效果
           */
          this.triggerResult = void 0;

          /**
           * 技能效果参数
           */
          this.triggerEffectPara = void 0;

          /**
           * 目标选择范围
           */
          this.targetRange = void 0;

          /**
           * 选择范围参数
           */
          this.targetRangePara = void 0;

          /**
           * 目标阵营
           */
          this.targetCamp = void 0;

          /**
           * 筛选条件
           */
          this.targetCondition = void 0;

          /**
           * 目标选择数量
           */
          this.targetNum = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.triggerParticleEffects === undefined) {
            throw new Error();
          }

          this.triggerParticleEffects = _json_.triggerParticleEffects;

          if (_json_.triggerResult === undefined) {
            throw new Error();
          }

          this.triggerResult = _json_.triggerResult;

          if (_json_.triggerEffectPara === undefined) {
            throw new Error();
          }

          {
            this.triggerEffectPara = [];

            for (let _ele0 of _json_.triggerEffectPara) {
              let _e0;

              _e0 = _ele0;
              this.triggerEffectPara.push(_e0);
            }
          }

          if (_json_.targetRange === undefined) {
            throw new Error();
          }

          this.targetRange = _json_.targetRange;

          if (_json_.targetRangePara === undefined) {
            throw new Error();
          }

          {
            this.targetRangePara = [];

            for (let _ele0 of _json_.targetRangePara) {
              let _e0;

              _e0 = _ele0;
              this.targetRangePara.push(_e0);
            }
          }

          if (_json_.targetCamp === undefined) {
            throw new Error();
          }

          this.targetCamp = _json_.targetCamp;

          if (_json_.targetCondition === undefined) {
            throw new Error();
          }

          this.targetCondition = _json_.targetCondition;

          if (_json_.targetNum === undefined) {
            throw new Error();
          }

          this.targetNum = _json_.targetNum;
        }

        resolve(tables) {}

      });

      _export("TempBuff", TempBuff = class TempBuff {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * Buff名称
           */
          this.name = void 0;

          /**
           * Buff图标
           */
          this.icon = void 0;

          /**
           * Buff特效
           */
          this.artEffect = void 0;

          /**
           * Buff类型
           */
          this.buffType = void 0;

          /**
           * Buff持续时间（ms)
           */
          this.buffDuration = void 0;

          /**
           * Buff状态
           */
          this.buffState = void 0;

          /**
           * Buff状态参数
           */
          this.buffStatePara = void 0;

          /**
           * 相同Buff处理
           */
          this.getSame = void 0;

          /**
           * 叠加上限
           */
          this.overlayLimit = void 0;

          /**
           * 是否允许被驱散
           */
          this.ifDispel = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;

          if (_json_.artEffect === undefined) {
            throw new Error();
          }

          this.artEffect = _json_.artEffect;

          if (_json_.buffType === undefined) {
            throw new Error();
          }

          this.buffType = _json_.buffType;

          if (_json_.buffDuration === undefined) {
            throw new Error();
          }

          this.buffDuration = _json_.buffDuration;

          if (_json_.buffState === undefined) {
            throw new Error();
          }

          this.buffState = _json_.buffState;

          if (_json_.buffStatePara === undefined) {
            throw new Error();
          }

          this.buffStatePara = new Map();

          for (var _entry0_ of _json_.buffStatePara) {
            let _k0;

            _k0 = _entry0_[0];

            let _v0;

            _v0 = _entry0_[1];
            this.buffStatePara.set(_k0, _v0);
          }

          if (_json_.getSame === undefined) {
            throw new Error();
          }

          this.getSame = _json_.getSame;

          if (_json_.overlayLimit === undefined) {
            throw new Error();
          }

          this.overlayLimit = _json_.overlayLimit;

          if (_json_.ifDispel === undefined) {
            throw new Error();
          }

          this.ifDispel = _json_.ifDispel;
        }

        resolve(tables) {}

      });

      _export("TempBattleAttr", TempBattleAttr = class TempBattleAttr {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 属性字段
           */
          this.name = void 0;

          /**
           * 属性描述
           */
          this.desc = void 0;

          /**
           * 属性值类型
           */
          this.attrValueType = void 0;

          /**
           * 是否是战斗内属性
           */
          this.inFight = void 0;

          /**
           * 是否公式
           */
          this.isFormula = void 0;

          /**
           * 计算属性
           */
          this.formula = void 0;

          /**
           * 显示名字
           */
          this.showName = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.attrValueType === undefined) {
            throw new Error();
          }

          this.attrValueType = _json_.attrValueType;

          if (_json_.inFight === undefined) {
            throw new Error();
          }

          this.inFight = _json_.inFight;

          if (_json_.isFormula === undefined) {
            throw new Error();
          }

          this.isFormula = _json_.isFormula;

          if (_json_.formula === undefined) {
            throw new Error();
          }

          this.formula = _json_.formula;

          if (_json_.showName === undefined) {
            throw new Error();
          }

          this.showName = _json_.showName;
        }

        resolve(tables) {}

      });

      _export("TempEnemyPrototype", TempEnemyPrototype = class TempEnemyPrototype {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 怪物名称
           */
          this.name = void 0;

          /**
           * 怪物类型
           */
          this.type = void 0;

          /**
           * 怪物行动类型
           */
          this.moveType = void 0;

          /**
           * 描述
           */
          this.desc = void 0;

          /**
           * 头像
           */
          this.icon = void 0;

          /**
           * 资源
           */
          this.resource = void 0;

          /**
           * 受击优先级
           */
          this.priority = void 0;

          /**
           * 基础移动速(单位：像素/s)
           */
          this.baseSpeed = void 0;

          /**
           * 默认武器
           */
          this.defaultWeapon = void 0;

          /**
           * 主动技能
           */
          this.activeSkills = void 0;

          /**
           * 被动技能
           */
          this.passiveSkills = void 0;

          /**
           * 开车移动速度
           */
          this.moveSpeedCar = void 0;

          /**
           * 开车腾空速度
           */
          this.jumpSpeedCar = void 0;

          /**
           * 开车腾空高度
           */
          this.jumpHeightCar = void 0;

          /**
           * 基础肉鸽值
           */
          this.baseRogue = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.type === undefined) {
            throw new Error();
          }

          this.type = _json_.type;

          if (_json_.moveType === undefined) {
            throw new Error();
          }

          this.moveType = _json_.moveType;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;

          if (_json_.resource === undefined) {
            throw new Error();
          }

          this.resource = _json_.resource;

          if (_json_.priority === undefined) {
            throw new Error();
          }

          this.priority = _json_.priority;

          if (_json_.baseSpeed === undefined) {
            throw new Error();
          }

          this.baseSpeed = _json_.baseSpeed;

          if (_json_.defaultWeapon === undefined) {
            throw new Error();
          }

          this.defaultWeapon = _json_.defaultWeapon;

          if (_json_.activeSkills === undefined) {
            throw new Error();
          }

          {
            this.activeSkills = [];

            for (let _ele0 of _json_.activeSkills) {
              let _e0;

              _e0 = _ele0;
              this.activeSkills.push(_e0);
            }
          }

          if (_json_.passiveSkills === undefined) {
            throw new Error();
          }

          {
            this.passiveSkills = [];

            for (let _ele0 of _json_.passiveSkills) {
              let _e0;

              _e0 = _ele0;
              this.passiveSkills.push(_e0);
            }
          }

          if (_json_.moveSpeedCar === undefined) {
            throw new Error();
          }

          this.moveSpeedCar = _json_.moveSpeedCar;

          if (_json_.jumpSpeedCar === undefined) {
            throw new Error();
          }

          this.jumpSpeedCar = _json_.jumpSpeedCar;

          if (_json_.jumpHeightCar === undefined) {
            throw new Error();
          }

          this.jumpHeightCar = _json_.jumpHeightCar;

          if (_json_.baseRogue === undefined) {
            throw new Error();
          }

          this.baseRogue = _json_.baseRogue;
        }

        resolve(tables) {}

      });

      _export("TempEnemy", TempEnemy = class TempEnemy {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 原型id
           */
          this.pid = void 0;
          this.pid_ref = void 0;

          /**
           * 属性
           */
          this.attr = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.pid === undefined) {
            throw new Error();
          }

          this.pid = _json_.pid;

          if (_json_.attr === undefined) {
            throw new Error();
          }

          this.attr = new Map();

          for (var _entry0_ of _json_.attr) {
            let _k0;

            _k0 = _entry0_[0];

            let _v0;

            _v0 = _entry0_[1];
            this.attr.set(_k0, _v0);
          }
        }

        resolve(tables) {
          this.pid_ref = tables.TbEnemyPrototype.get(this.pid);
        }

      });

      _export("TempChapterSummary", TempChapterSummary = class TempChapterSummary {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * name
           */
          this.name = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;
        }

        resolve(tables) {}

      });

      _export("TempStageSummary", TempStageSummary = class TempStageSummary {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 章节id
           */
          this.chapterId = void 0;
          this.chapterId_ref = void 0;

          /**
           * name
           */
          this.name = void 0;

          /**
           * 武器刷新ID
           */
          this.RefreshId = void 0;

          /**
           * 公共Rouge技能库
           */
          this.PublicRogueSkillId = void 0;

          /**
           * 初始格子长度
           */
          this.privateGridLen = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.chapterId === undefined) {
            throw new Error();
          }

          this.chapterId = _json_.chapterId;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.RefreshId === undefined) {
            throw new Error();
          }

          this.RefreshId = _json_.RefreshId;

          if (_json_.PublicRogueSkillId === undefined) {
            throw new Error();
          }

          this.PublicRogueSkillId = _json_.PublicRogueSkillId;

          if (_json_.privateGridLen === undefined) {
            throw new Error();
          }

          {
            this.privateGridLen = [];

            for (let _ele0 of _json_.privateGridLen) {
              let _e0;

              _e0 = _ele0;
              this.privateGridLen.push(_e0);
            }
          }
        }

        resolve(tables) {
          this.chapterId_ref = tables.TbChapterSummary.get(this.chapterId);
        }

      });

      _export("TempStage", TempStage = class TempStage {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 关卡id
           */
          this.cid = void 0;
          this.cid_ref = void 0;

          /**
           * 出怪点编号
           */
          this.spawnPoint = void 0;

          /**
           * 怪物编号
           */
          this.mid = void 0;
          this.mid_ref = void 0;

          /**
           * 怪物数量
           */
          this.count = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.cid === undefined) {
            throw new Error();
          }

          this.cid = _json_.cid;

          if (_json_.spawnPoint === undefined) {
            throw new Error();
          }

          this.spawnPoint = _json_.spawnPoint;

          if (_json_.mid === undefined) {
            throw new Error();
          }

          this.mid = _json_.mid;

          if (_json_.count === undefined) {
            throw new Error();
          }

          this.count = _json_.count;
        }

        resolve(tables) {
          this.cid_ref = tables.TbStageSummary.get(this.cid);
          this.mid_ref = tables.TbEnemy.get(this.mid);
        }

      });

      _export("TempCar", TempCar = class TempCar {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 美术资源
           */
          this.res = void 0;

          /**
           * 油量
           */
          this.oil = void 0;

          /**
           * 属性
           */
          this.attr = void 0;

          /**
           * 伤害系数
           */
          this.damageFactor = void 0;

          /**
           * 驻守范围
           */
          this.defendRange = void 0;

          /**
           * 上阵数量
           */
          this.heroNum = void 0;

          /**
           * 座位坐标
           */
          this.seatPosArr = void 0;

          /**
           * 防守点坐标
           */
          this.defendPosArr = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.res === undefined) {
            throw new Error();
          }

          this.res = _json_.res;

          if (_json_.oil === undefined) {
            throw new Error();
          }

          this.oil = _json_.oil;

          if (_json_.attr === undefined) {
            throw new Error();
          }

          this.attr = new Map();

          for (var _entry0_ of _json_.attr) {
            let _k0;

            _k0 = _entry0_[0];

            let _v0;

            _v0 = _entry0_[1];
            this.attr.set(_k0, _v0);
          }

          if (_json_.damageFactor === undefined) {
            throw new Error();
          }

          this.damageFactor = _json_.damageFactor;

          if (_json_.defendRange === undefined) {
            throw new Error();
          }

          this.defendRange = _json_.defendRange;

          if (_json_.heroNum === undefined) {
            throw new Error();
          }

          this.heroNum = _json_.heroNum;

          if (_json_.seatPosArr === undefined) {
            throw new Error();
          }

          {
            this.seatPosArr = [];

            for (let _ele0 of _json_.seatPosArr) {
              let _e0;

              _e0 = new temp.Vec2(_ele0);
              this.seatPosArr.push(_e0);
            }
          }

          if (_json_.defendPosArr === undefined) {
            throw new Error();
          }

          {
            this.defendPosArr = [];

            for (let _ele0 of _json_.defendPosArr) {
              let _e0;

              _e0 = new temp.Vec2(_ele0);
              this.defendPosArr.push(_e0);
            }
          }
        }

        resolve(tables) {
          for (let _e of this.seatPosArr) {
            _e == null || _e.resolve(tables);
          }

          for (let _e of this.defendPosArr) {
            _e == null || _e.resolve(tables);
          }
        }

      });

      _export("TempFormula", TempFormula = class TempFormula {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 属性字段
           */
          this.name = void 0;

          /**
           * 属性描述
           */
          this.desc = void 0;

          /**
           * 计算属性
           */
          this.formula = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.formula === undefined) {
            throw new Error();
          }

          this.formula = _json_.formula;
        }

        resolve(tables) {}

      });

      _export("TempObstacle", TempObstacle = class TempObstacle {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 美术资源
           */
          this.res = void 0;

          /**
           * 撞毁后类型
           */
          this.damageType = void 0;

          /**
           * 撞毁动画
           */
          this.damageAni = void 0;

          /**
           * 位移最小角度
           */
          this.minDispAngle = void 0;

          /**
           * 位移速度
           */
          this.speed = void 0;

          /**
           * 位移距离
           */
          this.distance = void 0;

          /**
           * 自身旋转角度
           */
          this.selfRotation = void 0;

          /**
           * 属性
           */
          this.attr = void 0;

          /**
           * 伤害系数
           */
          this.damageFactor = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.res === undefined) {
            throw new Error();
          }

          this.res = _json_.res;

          if (_json_.damageType === undefined) {
            throw new Error();
          }

          this.damageType = _json_.damageType;

          if (_json_.damageAni === undefined) {
            throw new Error();
          }

          this.damageAni = _json_.damageAni;

          if (_json_.minDispAngle === undefined) {
            throw new Error();
          }

          this.minDispAngle = _json_.minDispAngle;

          if (_json_.speed === undefined) {
            throw new Error();
          }

          this.speed = _json_.speed;

          if (_json_.distance === undefined) {
            throw new Error();
          }

          this.distance = _json_.distance;

          if (_json_.selfRotation === undefined) {
            throw new Error();
          }

          this.selfRotation = _json_.selfRotation;

          if (_json_.attr === undefined) {
            throw new Error();
          }

          this.attr = new Map();

          for (var _entry0_ of _json_.attr) {
            let _k0;

            _k0 = _entry0_[0];

            let _v0;

            _v0 = _entry0_[1];
            this.attr.set(_k0, _v0);
          }

          if (_json_.damageFactor === undefined) {
            throw new Error();
          }

          this.damageFactor = _json_.damageFactor;
        }

        resolve(tables) {}

      });

      _export("TempBullet", TempBullet = class TempBullet {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 子弹类型
           */
          this.bulletType = void 0;

          /**
           * 子弹资源
           */
          this.bulletResource = void 0;

          /**
           * 弹道数量
           */
          this.ballisticNum = void 0;

          /**
           * 弹道角度
           */
          this.ballistic = void 0;

          /**
           * 连射数量
           */
          this.fireNum = void 0;

          /**
           * 连射间隔时间（毫秒ms）
           */
          this.fireNumDisTime = void 0;

          /**
           * 子弹飞行速度
           */
          this.speed = void 0;

          /**
           * 子弹飞行轨迹
           */
          this.trajectoryType = void 0;

          /**
           * 目标阵营
           */
          this.targetCamp = void 0;

          /**
           * 技能效果
           */
          this.skillEffect = void 0;

          /**
           * 碰撞后处理
           */
          this.afterCollide = void 0;

          /**
           * 碰撞后处理参数
           */
          this.afterCollidePara = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.bulletType === undefined) {
            throw new Error();
          }

          this.bulletType = _json_.bulletType;

          if (_json_.bulletResource === undefined) {
            throw new Error();
          }

          this.bulletResource = _json_.bulletResource;

          if (_json_.ballisticNum === undefined) {
            throw new Error();
          }

          this.ballisticNum = _json_.ballisticNum;

          if (_json_.ballistic === undefined) {
            throw new Error();
          }

          this.ballistic = _json_.ballistic;

          if (_json_.fireNum === undefined) {
            throw new Error();
          }

          this.fireNum = _json_.fireNum;

          if (_json_.fireNumDisTime === undefined) {
            throw new Error();
          }

          this.fireNumDisTime = _json_.fireNumDisTime;

          if (_json_.speed === undefined) {
            throw new Error();
          }

          this.speed = _json_.speed;

          if (_json_.trajectoryType === undefined) {
            throw new Error();
          }

          this.trajectoryType = _json_.trajectoryType;

          if (_json_.targetCamp === undefined) {
            throw new Error();
          }

          this.targetCamp = _json_.targetCamp;

          if (_json_.skillEffect === undefined) {
            throw new Error();
          }

          this.skillEffect = _json_.skillEffect;

          if (_json_.afterCollide === undefined) {
            throw new Error();
          }

          this.afterCollide = _json_.afterCollide;

          if (_json_.afterCollidePara === undefined) {
            throw new Error();
          }

          this.afterCollidePara = _json_.afterCollidePara;
        }

        resolve(tables) {}

      });

      _export("TempRogueSkill", TempRogueSkill = class TempRogueSkill {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 技能组
           */
          this.Group = void 0;

          /**
           * 组别参数
           */
          this.GroupPara = void 0;

          /**
           * 前置ID
           */
          this.preId = void 0;

          /**
           * 互斥ID
           */
          this.repelId = void 0;

          /**
           * 名称
           */
          this.name = void 0;

          /**
           * 品质
           */
          this.quality = void 0;

          /**
           * 描述
           */
          this.desc = void 0;

          /**
           * 随机权重
           */
          this.weight = void 0;

          /**
           * 解锁技能ID
           */
          this.targetRangePara = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.Group === undefined) {
            throw new Error();
          }

          this.Group = _json_.Group;

          if (_json_.GroupPara === undefined) {
            throw new Error();
          }

          this.GroupPara = _json_.GroupPara;

          if (_json_.preId === undefined) {
            throw new Error();
          }

          {
            this.preId = [];

            for (let _ele0 of _json_.preId) {
              let _e0;

              _e0 = _ele0;
              this.preId.push(_e0);
            }
          }

          if (_json_.repelId === undefined) {
            throw new Error();
          }

          {
            this.repelId = [];

            for (let _ele0 of _json_.repelId) {
              let _e0;

              _e0 = _ele0;
              this.repelId.push(_e0);
            }
          }

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.quality === undefined) {
            throw new Error();
          }

          this.quality = _json_.quality;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.weight === undefined) {
            throw new Error();
          }

          this.weight = _json_.weight;

          if (_json_.targetRangePara === undefined) {
            throw new Error();
          }

          {
            this.targetRangePara = [];

            for (let _ele0 of _json_.targetRangePara) {
              let _e0;

              _e0 = _ele0;
              this.targetRangePara.push(_e0);
            }
          }
        }

        resolve(tables) {}

      });

      _export("TempAccessory", TempAccessory = class TempAccessory {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 配件ID
           */
          this.accessoryId = void 0;

          /**
           * 配件等级
           */
          this.level = void 0;

          /**
           * 配件名称
           */
          this.name = void 0;

          /**
           * 配件描述
           */
          this.desc = void 0;

          /**
           * 配件图标
           */
          this.icon = void 0;

          /**
           * 配件形状
           */
          this.shape = void 0;

          /**
           * 配件基础技能
           */
          this.accessorySkills = void 0;

          /**
           * 增幅范围
           */
          this.reachType = void 0;

          /**
           * 增幅数量
           */
          this.reachNum = void 0;

          /**
           * 增幅技能
           */
          this.reachSkills = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.accessoryId === undefined) {
            throw new Error();
          }

          this.accessoryId = _json_.accessoryId;

          if (_json_.level === undefined) {
            throw new Error();
          }

          this.level = _json_.level;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;

          if (_json_.shape === undefined) {
            throw new Error();
          }

          this.shape = _json_.shape;

          if (_json_.accessorySkills === undefined) {
            throw new Error();
          }

          this.accessorySkills = _json_.accessorySkills;

          if (_json_.reachType === undefined) {
            throw new Error();
          }

          this.reachType = _json_.reachType;

          if (_json_.reachNum === undefined) {
            throw new Error();
          }

          this.reachNum = _json_.reachNum;

          if (_json_.reachSkills === undefined) {
            throw new Error();
          }

          this.reachSkills = _json_.reachSkills;
        }

        resolve(tables) {}

      });

      _export("TempBlockGrid", TempBlockGrid = class TempBlockGrid {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 名字
           */
          this.name = void 0;

          /**
           * 初始格子长度
           */
          this.privateGridLen = void 0;

          /**
           * 最大格子长度
           */
          this.maxGridLen = void 0;

          /**
           * 格子宽度高度
           */
          this.privateGridWidth = void 0;

          /**
           * 图片
           */
          this.picture = void 0;

          /**
           * 空隙
           */
          this.privateSpace = void 0;

          /**
           * 初始格子
           */
          this.privateGrid = void 0;

          /**
           * 初始格子
           */
          this.maxGrid = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.privateGridLen === undefined) {
            throw new Error();
          }

          {
            this.privateGridLen = [];

            for (let _ele0 of _json_.privateGridLen) {
              let _e0;

              _e0 = _ele0;
              this.privateGridLen.push(_e0);
            }
          }

          if (_json_.maxGridLen === undefined) {
            throw new Error();
          }

          {
            this.maxGridLen = [];

            for (let _ele0 of _json_.maxGridLen) {
              let _e0;

              _e0 = _ele0;
              this.maxGridLen.push(_e0);
            }
          }

          if (_json_.privateGridWidth === undefined) {
            throw new Error();
          }

          {
            this.privateGridWidth = [];

            for (let _ele0 of _json_.privateGridWidth) {
              let _e0;

              _e0 = _ele0;
              this.privateGridWidth.push(_e0);
            }
          }

          if (_json_.picture === undefined) {
            throw new Error();
          }

          this.picture = _json_.picture;

          if (_json_.privateSpace === undefined) {
            throw new Error();
          }

          this.privateSpace = _json_.privateSpace;

          if (_json_.privateGrid === undefined) {
            throw new Error();
          }

          {
            this.privateGrid = [];

            for (let _ele0 of _json_.privateGrid) {
              let _e0;

              {
                _e0 = [];

                for (let _ele1 of _ele0) {
                  let _e1;

                  _e1 = _ele1;

                  _e0.push(_e1);
                }
              }
              ;
              this.privateGrid.push(_e0);
            }
          }

          if (_json_.maxGrid === undefined) {
            throw new Error();
          }

          {
            this.maxGrid = [];

            for (let _ele0 of _json_.maxGrid) {
              let _e0;

              {
                _e0 = [];

                for (let _ele1 of _ele0) {
                  let _e1;

                  _e1 = _ele1;

                  _e0.push(_e1);
                }
              }
              ;
              this.maxGrid.push(_e0);
            }
          }
        }

        resolve(tables) {}

      });

      _export("TempBlockItem", TempBlockItem = class TempBlockItem {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 名字
           */
          this.name = void 0;

          /**
           * 道具图标
           */
          this.icon = void 0;

          /**
           * 道具类型
           */
          this.type = void 0;

          /**
           * 分组
           */
          this.group = void 0;

          /**
           * 等级
           */
          this.level = void 0;

          /**
           * 对应道具id
           */
          this.targetId = void 0;

          /**
           * Block道具类型
           */
          this.shapeType = void 0;

          /**
           * Block道具类型参数
           */
          this.shapeTypePara = void 0;

          /**
           * 合成后物品ID
           */
          this.compoundId = void 0;

          /**
           * 随机权重
           */
          this.optionsNum = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.icon === undefined) {
            throw new Error();
          }

          this.icon = _json_.icon;

          if (_json_.type === undefined) {
            throw new Error();
          }

          this.type = _json_.type;

          if (_json_.group === undefined) {
            throw new Error();
          }

          this.group = _json_.group;

          if (_json_.level === undefined) {
            throw new Error();
          }

          this.level = _json_.level;

          if (_json_.targetId === undefined) {
            throw new Error();
          }

          this.targetId = _json_.targetId;

          if (_json_.shapeType === undefined) {
            throw new Error();
          }

          {
            this.shapeType = [];

            for (let _ele0 of _json_.shapeType) {
              let _e0;

              _e0 = _ele0;
              this.shapeType.push(_e0);
            }
          }

          if (_json_.shapeTypePara === undefined) {
            throw new Error();
          }

          {
            this.shapeTypePara = [];

            for (let _ele0 of _json_.shapeTypePara) {
              let _e0;

              {
                _e0 = [];

                for (let _ele1 of _ele0) {
                  let _e1;

                  _e1 = _ele1;

                  _e0.push(_e1);
                }
              }
              ;
              this.shapeTypePara.push(_e0);
            }
          }

          if (_json_.compoundId === undefined) {
            throw new Error();
          }

          this.compoundId = _json_.compoundId;

          if (_json_.optionsNum === undefined) {
            throw new Error();
          }

          this.optionsNum = _json_.optionsNum;
        }

        resolve(tables) {}

      });

      _export("TempBlockRefreshLevel", TempBlockRefreshLevel = class TempBlockRefreshLevel {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 刷新ID
           */
          this.refreshId = void 0;

          /**
           * 刷新等级
           */
          this.refreshLevel = void 0;

          /**
           * BlockItem等级
           */
          this.blockItemLevel = void 0;

          /**
           * 刷新权重
           */
          this.weight = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.refreshId === undefined) {
            throw new Error();
          }

          this.refreshId = _json_.refreshId;

          if (_json_.refreshLevel === undefined) {
            throw new Error();
          }

          this.refreshLevel = _json_.refreshLevel;

          if (_json_.blockItemLevel === undefined) {
            throw new Error();
          }

          this.blockItemLevel = _json_.blockItemLevel;

          if (_json_.weight === undefined) {
            throw new Error();
          }

          this.weight = _json_.weight;
        }

        resolve(tables) {}

      });

      _export("TempBlockRefreshLibrary", TempBlockRefreshLibrary = class TempBlockRefreshLibrary {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * BlockItem等级
           */
          this.blockItemLevel = void 0;

          /**
           * Block道具ID
           */
          this.blockItemId = void 0;

          /**
           * 刷新权重
           */
          this.weight = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.blockItemLevel === undefined) {
            throw new Error();
          }

          this.blockItemLevel = _json_.blockItemLevel;

          if (_json_.blockItemId === undefined) {
            throw new Error();
          }

          this.blockItemId = _json_.blockItemId;

          if (_json_.weight === undefined) {
            throw new Error();
          }

          this.weight = _json_.weight;
        }

        resolve(tables) {}

      });

      _export("TempRoguePara", TempRoguePara = class TempRoguePara {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 参数
           */
          this.para = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.para === undefined) {
            throw new Error();
          }

          this.para = _json_.para;
        }

        resolve(tables) {}

      });

      _export("TempPublicRogueSkill", TempPublicRogueSkill = class TempPublicRogueSkill {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 技能组
           */
          this.Group = void 0;

          /**
           * 前置ID
           */
          this.preId = void 0;

          /**
           * 互斥ID
           */
          this.repelId = void 0;

          /**
           * 名称
           */
          this.name = void 0;

          /**
           * 品质
           */
          this.quality = void 0;

          /**
           * 描述
           */
          this.desc = void 0;

          /**
           * 随机权重
           */
          this.weight = void 0;

          /**
           * 解锁技能ID
           */
          this.targetRangePara = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.Group === undefined) {
            throw new Error();
          }

          this.Group = _json_.Group;

          if (_json_.preId === undefined) {
            throw new Error();
          }

          {
            this.preId = [];

            for (let _ele0 of _json_.preId) {
              let _e0;

              _e0 = _ele0;
              this.preId.push(_e0);
            }
          }

          if (_json_.repelId === undefined) {
            throw new Error();
          }

          {
            this.repelId = [];

            for (let _ele0 of _json_.repelId) {
              let _e0;

              _e0 = _ele0;
              this.repelId.push(_e0);
            }
          }

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.quality === undefined) {
            throw new Error();
          }

          this.quality = _json_.quality;

          if (_json_.desc === undefined) {
            throw new Error();
          }

          this.desc = _json_.desc;

          if (_json_.weight === undefined) {
            throw new Error();
          }

          this.weight = _json_.weight;

          if (_json_.targetRangePara === undefined) {
            throw new Error();
          }

          {
            this.targetRangePara = [];

            for (let _ele0 of _json_.targetRangePara) {
              let _e0;

              _e0 = _ele0;
              this.targetRangePara.push(_e0);
            }
          }
        }

        resolve(tables) {}

      });

      _export("TempState", TempState = class TempState {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 状态互斥
           */
          this.stateExclusion = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.stateExclusion === undefined) {
            throw new Error();
          }

          {
            this.stateExclusion = [];

            for (let _ele0 of _json_.stateExclusion) {
              let _e0;

              _e0 = _ele0;
              this.stateExclusion.push(_e0);
            }
          }
        }

        resolve(tables) {}

      });

      _export("TempStageTd", TempStageTd = class TempStageTd {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 关卡id
           */
          this.cid = void 0;
          this.cid_ref = void 0;

          /**
           * 波次
           */
          this.wave = void 0;

          /**
           * 刷新时间
           */
          this.refreshTime = void 0;

          /**
           * 出怪点编号
           */
          this.spawnPoint = void 0;

          /**
           * 刷怪半径
           */
          this.radius = void 0;

          /**
           * 怪物编号
           */
          this.mid = void 0;
          this.mid_ref = void 0;

          /**
           * 怪物数量
           */
          this.count = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.cid === undefined) {
            throw new Error();
          }

          this.cid = _json_.cid;

          if (_json_.wave === undefined) {
            throw new Error();
          }

          this.wave = _json_.wave;

          if (_json_.refreshTime === undefined) {
            throw new Error();
          }

          this.refreshTime = _json_.refreshTime;

          if (_json_.spawnPoint === undefined) {
            throw new Error();
          }

          this.spawnPoint = _json_.spawnPoint;

          if (_json_.radius === undefined) {
            throw new Error();
          }

          this.radius = _json_.radius;

          if (_json_.mid === undefined) {
            throw new Error();
          }

          this.mid = _json_.mid;

          if (_json_.count === undefined) {
            throw new Error();
          }

          this.count = _json_.count;
        }

        resolve(tables) {
          this.cid_ref = tables.TbStageSummary.get(this.cid);
          this.mid_ref = tables.TbEnemy.get(this.mid);
        }

      });

      _export("TempCreature", TempCreature = class TempCreature {
        constructor(_json_) {
          /**
           * id
           */
          this.id = void 0;

          /**
           * 召唤物名称
           */
          this.name = void 0;

          /**
           * 行动类型
           */
          this.moveType = void 0;

          /**
           * 资源
           */
          this.resource = void 0;

          /**
           * 是否可被攻击
           */
          this.ifAttack = void 0;

          /**
           * 基础移动速(单位：像素/s)
           */
          this.baseSpeed = void 0;

          /**
           * 默认武器
           */
          this.defaultWeapon = void 0;

          /**
           * 主动技能
           */
          this.activeSkills = void 0;

          /**
           * 被动技能
           */
          this.passiveSkills = void 0;

          /**
           * 召唤物死亡类型
           */
          this.dieType = void 0;

          /**
           * 召唤物死亡类型参数
           */
          this.dieTypePara = void 0;

          /**
           * 召唤物属性继承参数
           */
          this.attrInherit = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.name === undefined) {
            throw new Error();
          }

          this.name = _json_.name;

          if (_json_.moveType === undefined) {
            throw new Error();
          }

          this.moveType = _json_.moveType;

          if (_json_.resource === undefined) {
            throw new Error();
          }

          this.resource = _json_.resource;

          if (_json_.ifAttack === undefined) {
            throw new Error();
          }

          this.ifAttack = _json_.ifAttack;

          if (_json_.baseSpeed === undefined) {
            throw new Error();
          }

          this.baseSpeed = _json_.baseSpeed;

          if (_json_.defaultWeapon === undefined) {
            throw new Error();
          }

          this.defaultWeapon = _json_.defaultWeapon;

          if (_json_.activeSkills === undefined) {
            throw new Error();
          }

          {
            this.activeSkills = [];

            for (let _ele0 of _json_.activeSkills) {
              let _e0;

              _e0 = _ele0;
              this.activeSkills.push(_e0);
            }
          }

          if (_json_.passiveSkills === undefined) {
            throw new Error();
          }

          {
            this.passiveSkills = [];

            for (let _ele0 of _json_.passiveSkills) {
              let _e0;

              _e0 = _ele0;
              this.passiveSkills.push(_e0);
            }
          }

          if (_json_.dieType === undefined) {
            throw new Error();
          }

          this.dieType = _json_.dieType;

          if (_json_.dieTypePara === undefined) {
            throw new Error();
          }

          this.dieTypePara = _json_.dieTypePara;

          if (_json_.attrInherit === undefined) {
            throw new Error();
          }

          this.attrInherit = new Map();

          for (var _entry0_ of _json_.attrInherit) {
            let _k0;

            _k0 = _entry0_[0];

            let _v0;

            _v0 = _entry0_[1];
            this.attrInherit.set(_k0, _v0);
          }
        }

        resolve(tables) {}

      });

      _export("TempStageTdb", TempStageTdb = class TempStageTdb {
        constructor(_json_) {
          /**
           * ID
           */
          this.id = void 0;

          /**
           * 关卡id
           */
          this.cid = void 0;
          this.cid_ref = void 0;

          /**
           * 波次
           */
          this.wave = void 0;

          /**
           * 波次之间的时间间隔
           */
          this.waveInterval = void 0;

          /**
           * 怪物组ID
           */
          this.monsterGroup = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.cid === undefined) {
            throw new Error();
          }

          this.cid = _json_.cid;

          if (_json_.wave === undefined) {
            throw new Error();
          }

          this.wave = _json_.wave;

          if (_json_.waveInterval === undefined) {
            throw new Error();
          }

          this.waveInterval = _json_.waveInterval;

          if (_json_.monsterGroup === undefined) {
            throw new Error();
          }

          {
            this.monsterGroup = [];

            for (let _ele0 of _json_.monsterGroup) {
              let _e0;

              _e0 = _ele0;
              this.monsterGroup.push(_e0);
            }
          }
        }

        resolve(tables) {
          this.cid_ref = tables.TbStageSummary.get(this.cid);
        }

      });

      _export("TempMonsterGroup", TempMonsterGroup = class TempMonsterGroup {
        constructor(_json_) {
          /**
           * 怪物组ID
           */
          this.id = void 0;

          /**
           * 刷新开始时间
           */
          this.startTime = void 0;

          /**
           * 刷新间隔
           */
          this.refreshInterval = void 0;

          /**
           * 怪物ID
           */
          this.mid = void 0;
          this.mid_ref = void 0;

          /**
           * 怪物数量
           */
          this.count = void 0;

          /**
           * 随机刷新点
           */
          this.spawnPoint = void 0;

          if (_json_.id === undefined) {
            throw new Error();
          }

          this.id = _json_.id;

          if (_json_.startTime === undefined) {
            throw new Error();
          }

          this.startTime = _json_.startTime;

          if (_json_.refreshInterval === undefined) {
            throw new Error();
          }

          this.refreshInterval = _json_.refreshInterval;

          if (_json_.mid === undefined) {
            throw new Error();
          }

          this.mid = _json_.mid;

          if (_json_.count === undefined) {
            throw new Error();
          }

          this.count = _json_.count;

          if (_json_.spawnPoint === undefined) {
            throw new Error();
          }

          {
            this.spawnPoint = [];

            for (let _ele0 of _json_.spawnPoint) {
              let _e0;

              _e0 = _ele0;
              this.spawnPoint.push(_e0);
            }
          }
        }

        resolve(tables) {
          this.mid_ref = tables.TbEnemy.get(this.mid);
        }

      });

      (function (_temp27) {
        class TbItem {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempItem(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp27.TbItem = TbItem;
      })(temp || _export("temp", temp = {}));

      (function (_temp28) {
        class TbBubble {
          constructor(_json_) {
            this._dataList = void 0;
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBubble(_json2_);

              this._dataList.push(_v);
            }
          }

          getDataList() {
            return this._dataList;
          }

          get(index) {
            return this._dataList[index];
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp28.TbBubble = TbBubble;
      })(temp || _export("temp", temp = {}));

      (function (_temp29) {
        class TbConstCar {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempConstCar(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.cameraOrthoHeight, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp29.TbConstCar = TbConstCar;
      })(temp || _export("temp", temp = {}));

      (function (_temp30) {
        class TbConstCommon {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempConstCommon(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.testlog, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp30.TbConstCommon = TbConstCommon;
      })(temp || _export("temp", temp = {}));

      (function (_temp31) {
        class TbHero {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempHero(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp31.TbHero = TbHero;
      })(temp || _export("temp", temp = {}));

      (function (_temp32) {
        class TbHeroSkin {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempHeroSkin(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp32.TbHeroSkin = TbHeroSkin;
      })(temp || _export("temp", temp = {}));

      (function (_temp33) {
        class TbHeroLevel {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempHeroLevel(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp33.TbHeroLevel = TbHeroLevel;
      })(temp || _export("temp", temp = {}));

      (function (_temp34) {
        class TbHeroBreak {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempHeroBreak(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp34.TbHeroBreak = TbHeroBreak;
      })(temp || _export("temp", temp = {}));

      (function (_temp35) {
        class TbHeroStar {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempHeroStar(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp35.TbHeroStar = TbHeroStar;
      })(temp || _export("temp", temp = {}));

      (function (_temp36) {
        class TbHeroSkill {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempHeroSkill(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp36.TbHeroSkill = TbHeroSkill;
      })(temp || _export("temp", temp = {}));

      (function (_temp37) {
        class TbWeapon {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempWeapon(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp37.TbWeapon = TbWeapon;
      })(temp || _export("temp", temp = {}));

      (function (_temp38) {
        class TbSkill {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempSkill(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp38.TbSkill = TbSkill;
      })(temp || _export("temp", temp = {}));

      (function (_temp39) {
        class TbSkillEffect {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempSkillEffect(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp39.TbSkillEffect = TbSkillEffect;
      })(temp || _export("temp", temp = {}));

      (function (_temp40) {
        class TbBuff {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBuff(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp40.TbBuff = TbBuff;
      })(temp || _export("temp", temp = {}));

      (function (_temp41) {
        class TbBattleAttr {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBattleAttr(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp41.TbBattleAttr = TbBattleAttr;
      })(temp || _export("temp", temp = {}));

      (function (_temp42) {
        class TbEnemyPrototype {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempEnemyPrototype(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp42.TbEnemyPrototype = TbEnemyPrototype;
      })(temp || _export("temp", temp = {}));

      (function (_temp43) {
        class TbEnemy {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempEnemy(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp43.TbEnemy = TbEnemy;
      })(temp || _export("temp", temp = {}));

      (function (_temp44) {
        class TbChapterSummary {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempChapterSummary(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp44.TbChapterSummary = TbChapterSummary;
      })(temp || _export("temp", temp = {}));

      (function (_temp45) {
        class TbStageSummary {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempStageSummary(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp45.TbStageSummary = TbStageSummary;
      })(temp || _export("temp", temp = {}));

      (function (_temp46) {
        class TbStage {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempStage(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp46.TbStage = TbStage;
      })(temp || _export("temp", temp = {}));

      (function (_temp47) {
        class TbCar {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempCar(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp47.TbCar = TbCar;
      })(temp || _export("temp", temp = {}));

      (function (_temp48) {
        class TbFormula {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempFormula(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp48.TbFormula = TbFormula;
      })(temp || _export("temp", temp = {}));

      (function (_temp49) {
        class TbObstacle {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempObstacle(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp49.TbObstacle = TbObstacle;
      })(temp || _export("temp", temp = {}));

      (function (_temp50) {
        class TbBullet {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBullet(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp50.TbBullet = TbBullet;
      })(temp || _export("temp", temp = {}));

      (function (_temp51) {
        class TbRogueSkill {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempRogueSkill(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp51.TbRogueSkill = TbRogueSkill;
      })(temp || _export("temp", temp = {}));

      (function (_temp52) {
        class TbAccessory {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempAccessory(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp52.TbAccessory = TbAccessory;
      })(temp || _export("temp", temp = {}));

      (function (_temp53) {
        class TbBlockGrid {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBlockGrid(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp53.TbBlockGrid = TbBlockGrid;
      })(temp || _export("temp", temp = {}));

      (function (_temp54) {
        class TbBlockItem {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBlockItem(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp54.TbBlockItem = TbBlockItem;
      })(temp || _export("temp", temp = {}));

      (function (_temp55) {
        class TbBlockRefreshLevel {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBlockRefreshLevel(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp55.TbBlockRefreshLevel = TbBlockRefreshLevel;
      })(temp || _export("temp", temp = {}));

      (function (_temp56) {
        class TbBlockRefreshLibrary {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempBlockRefreshLibrary(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp56.TbBlockRefreshLibrary = TbBlockRefreshLibrary;
      })(temp || _export("temp", temp = {}));

      (function (_temp57) {
        class TbRoguePara {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempRoguePara(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp57.TbRoguePara = TbRoguePara;
      })(temp || _export("temp", temp = {}));

      (function (_temp58) {
        class TbPublicRogueSkill {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempPublicRogueSkill(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp58.TbPublicRogueSkill = TbPublicRogueSkill;
      })(temp || _export("temp", temp = {}));

      (function (_temp59) {
        class TbState {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempState(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp59.TbState = TbState;
      })(temp || _export("temp", temp = {}));

      (function (_temp60) {
        class TbStageTd {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempStageTd(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp60.TbStageTd = TbStageTd;
      })(temp || _export("temp", temp = {}));

      (function (_temp61) {
        class TbCreature {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempCreature(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp61.TbCreature = TbCreature;
      })(temp || _export("temp", temp = {}));

      (function (_temp62) {
        class TbStageTdb {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempStageTdb(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp62.TbStageTdb = TbStageTdb;
      })(temp || _export("temp", temp = {}));

      (function (_temp63) {
        class TbMonsterGroup {
          constructor(_json_) {
            this._dataMap = void 0;
            this._dataList = void 0;
            this._dataMap = new Map();
            this._dataList = [];

            for (var _json2_ of _json_) {
              let _v;

              _v = new TempMonsterGroup(_json2_);

              this._dataList.push(_v);

              this._dataMap.set(_v.id, _v);
            }
          }

          getDataMap() {
            return this._dataMap;
          }

          getDataList() {
            return this._dataList;
          }

          get(key) {
            return this._dataMap.get(key);
          }

          resolve(tables) {
            for (let data of this._dataList) {
              data.resolve(tables);
            }
          }

        }

        _temp63.TbMonsterGroup = TbMonsterGroup;
      })(temp || _export("temp", temp = {}));

      _export("Tables", Tables = class Tables {
        /**
         * 测试表
         */
        get TbItem() {
          return this._TbItem;
        }

        /**
         * 测试表
         */
        get TbBubble() {
          return this._TbBubble;
        }

        get TbConstCar() {
          return this._TbConstCar;
        }

        get TbConstCommon() {
          return this._TbConstCommon;
        }

        get TbHero() {
          return this._TbHero;
        }

        get TbHeroSkin() {
          return this._TbHeroSkin;
        }

        get TbHeroLevel() {
          return this._TbHeroLevel;
        }

        get TbHeroBreak() {
          return this._TbHeroBreak;
        }

        get TbHeroStar() {
          return this._TbHeroStar;
        }

        get TbHeroSkill() {
          return this._TbHeroSkill;
        }

        get TbWeapon() {
          return this._TbWeapon;
        }

        get TbSkill() {
          return this._TbSkill;
        }

        get TbSkillEffect() {
          return this._TbSkillEffect;
        }

        get TbBuff() {
          return this._TbBuff;
        }

        get TbBattleAttr() {
          return this._TbBattleAttr;
        }

        get TbEnemyPrototype() {
          return this._TbEnemyPrototype;
        }

        get TbEnemy() {
          return this._TbEnemy;
        }

        get TbChapterSummary() {
          return this._TbChapterSummary;
        }

        get TbStageSummary() {
          return this._TbStageSummary;
        }

        get TbStage() {
          return this._TbStage;
        }

        get TbCar() {
          return this._TbCar;
        }

        get TbFormula() {
          return this._TbFormula;
        }

        get TbObstacle() {
          return this._TbObstacle;
        }

        get TbBullet() {
          return this._TbBullet;
        }

        get TbRogueSkill() {
          return this._TbRogueSkill;
        }

        get TbAccessory() {
          return this._TbAccessory;
        }

        get TbBlockGrid() {
          return this._TbBlockGrid;
        }

        get TbBlockItem() {
          return this._TbBlockItem;
        }

        get TbBlockRefreshLevel() {
          return this._TbBlockRefreshLevel;
        }

        get TbBlockRefreshLibrary() {
          return this._TbBlockRefreshLibrary;
        }

        get TbRoguePara() {
          return this._TbRoguePara;
        }

        get TbPublicRogueSkill() {
          return this._TbPublicRogueSkill;
        }

        get TbState() {
          return this._TbState;
        }

        get TbStageTd() {
          return this._TbStageTd;
        }

        get TbCreature() {
          return this._TbCreature;
        }

        get TbStageTdb() {
          return this._TbStageTdb;
        }

        get TbMonsterGroup() {
          return this._TbMonsterGroup;
        }

        constructor(loader) {
          this._TbItem = void 0;
          this._TbBubble = void 0;
          this._TbConstCar = void 0;
          this._TbConstCommon = void 0;
          this._TbHero = void 0;
          this._TbHeroSkin = void 0;
          this._TbHeroLevel = void 0;
          this._TbHeroBreak = void 0;
          this._TbHeroStar = void 0;
          this._TbHeroSkill = void 0;
          this._TbWeapon = void 0;
          this._TbSkill = void 0;
          this._TbSkillEffect = void 0;
          this._TbBuff = void 0;
          this._TbBattleAttr = void 0;
          this._TbEnemyPrototype = void 0;
          this._TbEnemy = void 0;
          this._TbChapterSummary = void 0;
          this._TbStageSummary = void 0;
          this._TbStage = void 0;
          this._TbCar = void 0;
          this._TbFormula = void 0;
          this._TbObstacle = void 0;
          this._TbBullet = void 0;
          this._TbRogueSkill = void 0;
          this._TbAccessory = void 0;
          this._TbBlockGrid = void 0;
          this._TbBlockItem = void 0;
          this._TbBlockRefreshLevel = void 0;
          this._TbBlockRefreshLibrary = void 0;
          this._TbRoguePara = void 0;
          this._TbPublicRogueSkill = void 0;
          this._TbState = void 0;
          this._TbStageTd = void 0;
          this._TbCreature = void 0;
          this._TbStageTdb = void 0;
          this._TbMonsterGroup = void 0;
          this._TbItem = new temp.TbItem(loader('temp_tbitem'));
          this._TbBubble = new temp.TbBubble(loader('temp_tbbubble'));
          this._TbConstCar = new temp.TbConstCar(loader('temp_tbconstcar'));
          this._TbConstCommon = new temp.TbConstCommon(loader('temp_tbconstcommon'));
          this._TbHero = new temp.TbHero(loader('temp_tbhero'));
          this._TbHeroSkin = new temp.TbHeroSkin(loader('temp_tbheroskin'));
          this._TbHeroLevel = new temp.TbHeroLevel(loader('temp_tbherolevel'));
          this._TbHeroBreak = new temp.TbHeroBreak(loader('temp_tbherobreak'));
          this._TbHeroStar = new temp.TbHeroStar(loader('temp_tbherostar'));
          this._TbHeroSkill = new temp.TbHeroSkill(loader('temp_tbheroskill'));
          this._TbWeapon = new temp.TbWeapon(loader('temp_tbweapon'));
          this._TbSkill = new temp.TbSkill(loader('temp_tbskill'));
          this._TbSkillEffect = new temp.TbSkillEffect(loader('temp_tbskilleffect'));
          this._TbBuff = new temp.TbBuff(loader('temp_tbbuff'));
          this._TbBattleAttr = new temp.TbBattleAttr(loader('temp_tbbattleattr'));
          this._TbEnemyPrototype = new temp.TbEnemyPrototype(loader('temp_tbenemyprototype'));
          this._TbEnemy = new temp.TbEnemy(loader('temp_tbenemy'));
          this._TbChapterSummary = new temp.TbChapterSummary(loader('temp_tbchaptersummary'));
          this._TbStageSummary = new temp.TbStageSummary(loader('temp_tbstagesummary'));
          this._TbStage = new temp.TbStage(loader('temp_tbstage'));
          this._TbCar = new temp.TbCar(loader('temp_tbcar'));
          this._TbFormula = new temp.TbFormula(loader('temp_tbformula'));
          this._TbObstacle = new temp.TbObstacle(loader('temp_tbobstacle'));
          this._TbBullet = new temp.TbBullet(loader('temp_tbbullet'));
          this._TbRogueSkill = new temp.TbRogueSkill(loader('temp_tbrogueskill'));
          this._TbAccessory = new temp.TbAccessory(loader('temp_tbaccessory'));
          this._TbBlockGrid = new temp.TbBlockGrid(loader('temp_tbblockgrid'));
          this._TbBlockItem = new temp.TbBlockItem(loader('temp_tbblockitem'));
          this._TbBlockRefreshLevel = new temp.TbBlockRefreshLevel(loader('temp_tbblockrefreshlevel'));
          this._TbBlockRefreshLibrary = new temp.TbBlockRefreshLibrary(loader('temp_tbblockrefreshlibrary'));
          this._TbRoguePara = new temp.TbRoguePara(loader('temp_tbroguepara'));
          this._TbPublicRogueSkill = new temp.TbPublicRogueSkill(loader('temp_tbpublicrogueskill'));
          this._TbState = new temp.TbState(loader('temp_tbstate'));
          this._TbStageTd = new temp.TbStageTd(loader('temp_tbstagetd'));
          this._TbCreature = new temp.TbCreature(loader('temp_tbcreature'));
          this._TbStageTdb = new temp.TbStageTdb(loader('temp_tbstagetdb'));
          this._TbMonsterGroup = new temp.TbMonsterGroup(loader('temp_tbmonstergroup'));

          this._TbItem.resolve(this);

          this._TbBubble.resolve(this);

          this._TbConstCar.resolve(this);

          this._TbConstCommon.resolve(this);

          this._TbHero.resolve(this);

          this._TbHeroSkin.resolve(this);

          this._TbHeroLevel.resolve(this);

          this._TbHeroBreak.resolve(this);

          this._TbHeroStar.resolve(this);

          this._TbHeroSkill.resolve(this);

          this._TbWeapon.resolve(this);

          this._TbSkill.resolve(this);

          this._TbSkillEffect.resolve(this);

          this._TbBuff.resolve(this);

          this._TbBattleAttr.resolve(this);

          this._TbEnemyPrototype.resolve(this);

          this._TbEnemy.resolve(this);

          this._TbChapterSummary.resolve(this);

          this._TbStageSummary.resolve(this);

          this._TbStage.resolve(this);

          this._TbCar.resolve(this);

          this._TbFormula.resolve(this);

          this._TbObstacle.resolve(this);

          this._TbBullet.resolve(this);

          this._TbRogueSkill.resolve(this);

          this._TbAccessory.resolve(this);

          this._TbBlockGrid.resolve(this);

          this._TbBlockItem.resolve(this);

          this._TbBlockRefreshLevel.resolve(this);

          this._TbBlockRefreshLibrary.resolve(this);

          this._TbRoguePara.resolve(this);

          this._TbPublicRogueSkill.resolve(this);

          this._TbState.resolve(this);

          this._TbStageTd.resolve(this);

          this._TbCreature.resolve(this);

          this._TbStageTdb.resolve(this);

          this._TbMonsterGroup.resolve(this);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=972050f44b75ef7fde82c2c2a8c54bbd62826a30.js.map