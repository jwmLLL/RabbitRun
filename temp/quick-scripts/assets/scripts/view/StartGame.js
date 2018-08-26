(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/view/StartGame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6d8d9+rjs9OwqQKhy3nU2eV', 'StartGame', __filename);
// scripts/view/StartGame.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        gameNode: {
            default: null,
            type: cc.Node
        }

    },

    start: function start() {},
    startGame: function startGame(event, data) {

        this.node.active = false;
        this.gameNode.getComponent("GameControl").startUpdate();
    }
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
        //# sourceMappingURL=StartGame.js.map
        