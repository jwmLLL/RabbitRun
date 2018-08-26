(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/util/UtilTool.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2363boj6NRGhKCnDxq76p4C', 'UtilTool', __filename);
// scripts/util/UtilTool.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 *
 * 工具类
 */
var UtilTool = {
    isPrint: true,

    log: function log(str) {
        if (UtilTool.isPrint) {
            console.log(" rabbitRun  " + str);
        }
    }
};

exports.default = UtilTool;
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
        //# sourceMappingURL=UtilTool.js.map
        