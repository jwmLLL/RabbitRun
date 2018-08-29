"use strict";
cc._RF.push(module, '213e4Vn63lCGpmuUBE9Ipt6', 'GameOver');
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