System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, DEBUG, ecs, HttpRequest, NetManager, Config, MessageManager, ResLoader, Logger, RandomManager, StorageManager, SceneManager, oops, _crd, version;

  function _reportPossibleCrUseOfecs(extras) {
    _reporterNs.report("ecs", "../libs/ecs/ECS", _context.meta, extras);
  }

  function _reportPossibleCrUseOfECSRootSystem(extras) {
    _reporterNs.report("ECSRootSystem", "../libs/ecs/ECSSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLanguageManager(extras) {
    _reporterNs.report("LanguageManager", "../libs/gui/language/Language", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../libs/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../libs/network/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfig(extras) {
    _reporterNs.report("Config", "../module/config/Config", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./common/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageManager(extras) {
    _reporterNs.report("MessageManager", "./common/event/MessageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoader(extras) {
    _reporterNs.report("ResLoader", "./common/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./common/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandomManager(extras) {
    _reporterNs.report("RandomManager", "./common/random/RandomManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStorageManager(extras) {
    _reporterNs.report("StorageManager", "./common/storage/StorageManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimerManager(extras) {
    _reporterNs.report("TimerManager", "./common/timer/TimerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "./gui/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneManager(extras) {
    _reporterNs.report("SceneManager", "./gui/scene/SceneManager", _context.meta, extras);
  }

  _export("oops", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      ecs = _unresolved_2.ecs;
    }, function (_unresolved_3) {
      HttpRequest = _unresolved_3.HttpRequest;
    }, function (_unresolved_4) {
      NetManager = _unresolved_4.NetManager;
    }, function (_unresolved_5) {
      Config = _unresolved_5.Config;
    }, function (_unresolved_6) {
      MessageManager = _unresolved_6.MessageManager;
    }, function (_unresolved_7) {
      ResLoader = _unresolved_7.ResLoader;
    }, function (_unresolved_8) {
      Logger = _unresolved_8.Logger;
    }, function (_unresolved_9) {
      RandomManager = _unresolved_9.RandomManager;
    }, function (_unresolved_10) {
      StorageManager = _unresolved_10.StorageManager;
    }, function (_unresolved_11) {
      SceneManager = _unresolved_11.SceneManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbae5wzfSZGzZMuyeAetSfg", "Oops", undefined);

      /*
       * @Author: dgflash
       * @Date: 2022-02-11 09:32:47
       * @LastEditors: dgflash
       * @LastEditTime: 2023-08-21 15:19:56
       */
      __checkObsolete__(['Node']);

      /** 框架版本号 */
      _export("version", version = "1.2.0");
      /** 框架核心模块访问入口 */


      _export("oops", oops = class oops {}); // 引入oops全局变量以方便调试


      /** ----------核心模块---------- */

      /** 日志管理 */
      oops.log = _crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
        error: Error()
      }), Logger) : Logger;

      /** 游戏配置 */
      oops.config = new (_crd && Config === void 0 ? (_reportPossibleCrUseOfConfig({
        error: Error()
      }), Config) : Config)();

      /** 全局消息 */
      oops.message = (_crd && MessageManager === void 0 ? (_reportPossibleCrUseOfMessageManager({
        error: Error()
      }), MessageManager) : MessageManager).Instance;

      /** 随机工具 */
      oops.random = (_crd && RandomManager === void 0 ? (_reportPossibleCrUseOfRandomManager({
        error: Error()
      }), RandomManager) : RandomManager).instance;

      /** 本地存储 */
      oops.storage = new (_crd && StorageManager === void 0 ? (_reportPossibleCrUseOfStorageManager({
        error: Error()
      }), StorageManager) : StorageManager)();

      /** 游戏时间管理 */
      oops.timer = void 0;

      /** 游戏音乐管理 */
      oops.audio = void 0;

      /** 二维界面管理 */
      oops.gui = void 0;

      /** 资源管理 */
      oops.res = new (_crd && ResLoader === void 0 ? (_reportPossibleCrUseOfResLoader({
        error: Error()
      }), ResLoader) : ResLoader)();

      /** ----------可选模块---------- */

      /** 多语言模块 */
      oops.language = void 0;

      /** HTTP */
      oops.http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
        error: Error()
      }), HttpRequest) : HttpRequest)();

      /** WebSocket */
      oops.tcp = new (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
        error: Error()
      }), NetManager) : NetManager)();

      /** ECS */
      oops.ecs = new (_crd && ecs === void 0 ? (_reportPossibleCrUseOfecs({
        error: Error()
      }), ecs) : ecs).RootSystem();

      /** 场景管理 */
      oops.scene = new (_crd && SceneManager === void 0 ? (_reportPossibleCrUseOfSceneManager({
        error: Error()
      }), SceneManager) : SceneManager)();

      /** 持久根节点 */
      oops.persistRootNode = null;

      if (DEBUG) {
        //@ts-ignore
        window.oops = oops;
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c0d46be4b5a52a119835577ad6b490748b497920.js.map