"use strict";
cc._RF.push(module, '1001diCPblOM7rdc3hPXHep', 'Player');
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