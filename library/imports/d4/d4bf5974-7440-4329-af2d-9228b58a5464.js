"use strict";
cc._RF.push(module, 'd4bf5l0dEBDKa8tkii1ilRk', 'BgView');
// scripts/view/BgView.js

"use strict";

var UtilTool = require("UtilTool");
var Config = require("Config");

cc.Class({
    extends: cc.Component,

    properties: {
        background1: {
            default: null,
            type: cc.Node
        },
        background2: {
            default: null,
            type: cc.Node
        },
        propPrefab: {
            default: [],
            type: cc.Prefab
        }

    },

    start: function start() {
        this.propLen = this.propPrefab.length;

        this.addProp(this.background1);
        this.addProp(this.background2);
    },


    //开始移动背景  step  移动的步数
    startMove: function startMove(step) {
        UtilTool.log(step);

        var moveBy = cc.moveBy(Config.stepTime, cc.v2(-Config.stepDis * step, 0));
        this.background1.runAction(moveBy);
        this.background2.runAction(moveBy.clone());
    },


    //新增道具
    addProp: function addProp(parent) {

        parent.removeAllChildren();
        for (var i = 0; i < Config.totalProp; i++) {
            var ranIndex = Math.ceil(Math.random() * 10) % this.propLen;
            var prop = cc.instantiate(this.propPrefab[ranIndex]);
            prop.setPosition(cc.v2(-Config.screenWidth / 2 + Config.propWidth * (i + 0.5), 0));
            parent.addChild(prop);
        }
    },
    update: function update(dt) {

        if (this.background1.x <= -Config.screenWidth) {
            this.addProp(this.background1);
            // this.background1.x = 0;
            UtilTool.log(this.background1.x);
            this.background1.x = this.background2.x + Config.screenWidth;
        }
        if (this.background2.x <= -Config.screenWidth) {
            this.addProp(this.background2);
            this.background2.x = this.background1.x + Config.screenWidth;
            UtilTool.log("this.background2.x = " + this.background2.x);
        }
    }
});

cc._RF.pop();