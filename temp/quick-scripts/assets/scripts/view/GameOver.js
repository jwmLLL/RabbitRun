(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/view/GameOver.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '213e4Vn63lCGpmuUBE9Ipt6', 'GameOver', __filename);
// scripts/view/GameOver.js

"use strict";

var Config = require("Config");
cc.Class({
    extends: cc.Component,

    properties: {
        label_score: {
            default: null,
            type: cc.Label
        },
        gameNode: {
            default: null,
            type: cc.Node
        }
    },

    start: function start() {},


    btnClickEvent: function btnClickEvent(event, customData) {
        this.node.active = false;
        this.gameNode.getComponent("GameControl").startUpdate();
    }

    // update (dt) {},
});

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
        //# sourceMappingURL=GameOver.js.map
        