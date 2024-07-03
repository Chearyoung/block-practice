System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EventConstant;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e56e7zgmWFNWoonAY6s8sdd", "EventConstant", undefined);

      /**
       * 事件常量
       */
      _export("EventConstant", EventConstant = {
        /** 界面跳转 */
        EVENT_JUMP_LAYER: "event_jump_layer",

        /** 界面跳转 */
        EVENT_GOTO_LOGIN_SCENE: "event_goto_login_scene",

        /******************************* 战斗相关 ******************************/

        /** 点击场内角色 */
        Event_Battle_ClickBattleRole: 'Event_Battle_ClickBattleRole',

        /** 点击TouchUI */
        Event_Battle_ClickTouchUI: 'Event_Battle_ClickTouchUI',

        /** 刷新波次 */
        Event_Battle_WaveNum: 'Event_Battle_WaveNum',

        /** 刷新塔防战时间 */
        Event_Battle_TdTime: 'Event_Battle_TdTime',

        /******************************* UI相关 ******************************/

        /** 车减少耐久度 */
        Event_UI_CarDamaged: 'Event_UI_CarDamaged',

        /** 车信息相关 */
        Event_UI_CarInfo: 'Event_UI_CarInfo',

        /** 更新车的油 */
        Event_UI_OilLevel: 'Event_UI_OilLevel',

        /** 游戏暂停 */
        Event_UI_PauseGame: 'Event_UI_PauseGame',

        /** 游戏恢复 */
        Event_UI_ResumeGame: 'Event_UI_ResumeGame',

        /** 游戏失败 */
        Event_UI_FailGame: 'Event_UI_FailGame',

        /** 打开肉鸽选择界面 */
        Event_UI_OpenRogue: 'Event_UI_OpenRogue',

        /** 相机模式 */
        Event_Camera_Model: 'Event_Camera_Model',

        /** 动态设置开车常量 */
        Event_Battle_SetCarMoveConstant: 'Event_Battle_SetCarMoveConstant',

        /** 设置暂停界面的已拥有技能 */
        Event_Battle_SetPauseItem: 'Event_Battle_SetPauseItem',

        /******************************* block相关 ******************************/
        SAVE_GAME_DATA: 'saveGameData',
        // 保存游戏数据
        SCREEN_VIBRATOR: 'screenVibrator',
        // 屏幕震动
        GAME_TOUCH_START: 'gameTouchStart',
        GAME_TOUCH_MOVE: 'gameTouchMove',
        GAME_TOUCH_END: 'gameTouchEnd',
        GAME_TOUCH_CANCLE: 'gameTouchCancle',
        GAME_TAP_BTN: 'gameTapBtn',
        GAME_WIN_FAIL: 'gameWinFail',
        // 游戏胜利结束
        GAME_OVER: 'gameOver',
        // 游戏结束
        GAME_BATTLE: 'gameBattle',
        // 游戏战斗
        GAME_BATTLE_START: 'gameBattleStart',
        // 游戏战斗开始
        SET_BATTLE_BTN_STATUS: 'setBattleBtnStatus',
        // 设置战斗按钮状态
        CREATE_SKILL_EFFECT: 'createSkillEffect',
        // 技能效果
        INIT_BUILD_GRID_LIST: 'initBuildGridList',
        // 初始化重组格子列表
        INIT_BUILD_WEAPON_POS: 'initBuildWeaponPos',
        // 初始化重组武器位置
        WEAPON_MOVE: 'weaponMove',
        // 武器移动
        WEAPON_ICON_STATUS_INIT: 'weaponIconStatusInit',
        // 武器图标状态初始化
        WEAPON_ICON_STATUS: 'weaponIconStatus',
        // 武器图标状态
        WEAPON_UPGRADE: 'weaponGrade',
        // 武器升级
        WEAPON_SHAKE: 'weaponShake',
        // 武器抖动
        WEAPON_PlACE: 'weaponPlace',
        // 武器放置完成
        WEAPON_REMOVE: 'weaponRemove',
        // 武器卸下
        WEAPON_CHANGE_COIN: 'weaponChangeCoin',
        // 武器转换金币
        WEAPON_PROGRESS_BAR: 'weaponProgressBar',
        // 武器进度条
        ADD_REMOVE_WEAPON_LIST: 'addRemoveWeaponList',
        // 添加卸下武器列表
        ADD_PRE_WEAPON_LIST: 'addPreWeaponList',
        // 添加到临时武器列表
        WEAPON_REMOVE_REFRESH: 'weaponRemoveRefresh',
        // 武器卸下刷新
        HERO_HURT: 'heroHurt',
        // 英雄受伤
        INIT_HERO_SKILL: 'initHeroSkill',
        // 初始化英雄技能
        UPDATE_HERO_HP: 'updateHeroHp',
        // 更新英雄血量
        INSERT_HERO_CIRCLE_OBJ: 'insertHeroCircleObj',
        // 添加英雄对象
        INSERT_SKILL_RELEASE_CIRCLE_OBJ: 'insertSkillReleaseCircleObj',
        // 添加技能释放范围对象
        INSERT_QUARD_TREE_RECT_CIRCLE: 'insertQuardTreeRectCircle',
        // 添加四叉树检测对象
        DELETE_QUARD_TREE_OBJ: 'deleteQuardTreeObj',
        // 删除四叉树对象
        CHECK_QUARD_TREE_OBJ: 'checkQuardTreeObj',
        // 检测四叉树对象
        REFRESH_BOSS_HP: 'refreshBossHp',
        // 刷新boss血量值
        CREATE_DAMAGER_NUM: 'createDamageNum',
        SHOW_MONSTER_DIE_EFFECT: 'showMonsterDieEffect',
        // 显示怪物死亡特效
        SHOW_HERO_HP: 'showHeroHp',
        // 显示英雄血条
        SHOW_MONSTER_HP: 'showMonsterHp',
        // 显示怪物血条
        SHOW_MONSTER_SHADOW: 'showMonsterShadow',
        // 显示怪物阴影
        HERO_ANIM: 'heroAnim',
        // 英雄动画
        CREATE_DROP_BOX: 'createDropBox',
        // 掉落宝箱
        RESERT_SELECT_BAG: 'resertSelectBag',
        // 重新调整背包
        UPDATE_MONSTER_PROGRESS: 'updateMonsterProgress',
        // 更新怪物进度
        SHOW_HIDE_SKILL_LIST: 'showHideSkillList',
        SHOW_HIDE_PLACE_LIST: 'showHidePlaceList',
        PLACE_GRID_START: 'placeGridStart',
        // 放置格子开始
        PLACE_GRID_MOVE: 'placeGridMove',
        // 放置格子移动
        PLACE_GRID_END: 'placeGridEnd',
        // 放置格子结束
        CLEAR_AREA_DATA: 'clearAreaData',
        // 清除区域数据
        PLACE_GRID_FINISH: 'placeGridFinish' // 放置完成

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f4276738e7dac56ba5536ef19e4a9b2e81c074b.js.map