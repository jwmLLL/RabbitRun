(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/view/Player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1001diCPblOM7rdc3hPXHep', 'Player', __filename);
// scripts/view/Player.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        rabbit: {
            default: null,
            type: cc.Node
        }

    },

    start: function start() {
        this.anim = this.rabbit.getComponent(cc.Animation);
    },
    rabbitJump: function rabbitJump(setp) {
        this.anim.play("RabbitJumpAni");
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
        //# sourceMappingURL=Player.js.map
        