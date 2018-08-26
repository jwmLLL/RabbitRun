"use strict";
cc._RF.push(module, '6d8d9+rjs9OwqQKhy3nU2eV', 'StartGame');
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