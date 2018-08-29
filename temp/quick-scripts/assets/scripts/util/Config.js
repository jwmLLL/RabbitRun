(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/util/Config.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '042c9x+FoFPgoJKSOUDTiV4', 'Config', __filename);
// scripts/util/Config.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 *常量值
 */

var Config = {};

Config.screenWidth = 1280; //设计屏幕的宽度
Config.screenHeight = 720; //设计屏幕的高度

Config.stepDis = 128; // 每步走对远
Config.stepTime = 0.5; // 每步的时间

Config.totalProp = 10;
Config.propWidth = 128;

Config.totalScore = 0;

exports.default = Config;
module.exports = exports["default"];

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Config.js.map
        