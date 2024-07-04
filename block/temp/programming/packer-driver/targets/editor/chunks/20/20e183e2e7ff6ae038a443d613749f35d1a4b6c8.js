System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Constants, _crd;

  _export("Constants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38f6antDZNCibijc56rqZbp", "Constants", undefined);

      _export("Constants", Constants = class Constants {});

      //动态加载预制体路径
      Constants.toastPath = 'prefab/Popup/Common/toast';
      //提示路径
      Constants.weaponPath = 'prefabs/weaponItem';
      //武器路径
      Constants.weaponBgPath = 'prefabs/weaponBgItem';
      //格子路径
      Constants.battSkillPath = 'prefab/block/skillBulletItem';
      //技能子弹路径
      Constants.battlePath = 'prefab/block/';
      //英雄路径
      Constants.synPath = 'prefab/block/synEffect';
      //英雄路径
      //动态资源路径
      Constants.itemPath = 'Game/Item/';
      //道具路径
      Constants.weaponIconPath = 'images/weapon/';
      //道具路径
      Constants.gridPath = 'icon/block/grid/';
      //格子路径
      //弹窗
      Constants.PopupUI = {
        ChapterPopup: "prefab/block/popup/chapterPopup",
        //章节界面
        GamePopup: "prefab/block/popup/gamePopup",
        //游戏界面
        GameOverPopup: "prefab/block/popup/gameOverPopup",
        //游戏界面
        WeaponDetailPopup: "prefab/block/popup/weaponDetailPopup",
        //武器详情
        PausePopup: "prefab/block/popup/pausePopup",
        //暂停界面
        tipsPopup: "prefab/block/popup/tipsPopup",
        //提示界面
        SetPopup: "prefab/block/popup/setPopup",
        //设置界面
        SkillSelectPopup: "prefab/block/popup/skillSelectPopup" //技能选择界面

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20e183e2e7ff6ae038a443d613749f35d1a4b6c8.js.map