"use strict";
cc._RF.push(module, '2363boj6NRGhKCnDxq76p4C', 'UtilTool');
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