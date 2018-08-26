(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/view/BgView.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd4bf5l0dEBDKa8tkii1ilRk', 'BgView', __filename);
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
        },
        propArr: []

    },
    onLoad: function onLoad() {
        this.propLen = this.propPrefab.length;
        this.ranIndex = 0;
        this.isStart = true;
    },
    start: function start() {},
    initProp: function initProp() {
        this.addProp(this.background1, 0);
        this.addProp(this.background2, 1);
    },

    //开始移动背景  step  移动的步数
    startMove: function startMove(step) {
        // UtilTool.log(step);
        var moveBy = cc.moveBy(Config.stepTime, cc.v2(-Config.stepDis * step, 0));
        this.background1.runAction(moveBy);
        this.background2.runAction(moveBy.clone());
    },


    //新增道具
    addProp: function addProp(parent, tag) {
        parent.removeAllChildren();
        var tempArr = [];
        for (var i = 0; i < Config.totalProp; i++) {
            this.ranIndex = this.getRandom();
            var prop = cc.instantiate(this.propPrefab[this.ranIndex]);
            prop.setPosition(cc.v2(-Config.screenWidth / 2 + Config.propWidth * (i + 0.5), 0));
            parent.addChild(prop);
            prop.name = "" + this.ranIndex;
            tempArr.push(prop);
        }
        this.propArr[tag] = tempArr;
    },
    getRandom: function getRandom() {
        var ranIndex = Math.ceil(Math.random() * 10) % this.propLen;
        while ((this.ranIndex == 2 || this.ranIndex == 3) && (ranIndex == 2 || ranIndex == 3)) {
            // UtilTool.log(" "+ranIndex);
            ranIndex = Math.ceil(Math.random() * 10) % this.propLen;
        }
        return ranIndex;
    },
    update: function update(dt) {
        if (this.background1.x <= -Config.screenWidth) {
            this.addProp(this.background1, 1);
            // UtilTool.log(this.background1.x);
            this.background1.x = this.background2.x + Config.screenWidth;
        }
        if (this.background2.x <= -Config.screenWidth) {
            this.addProp(this.background2, 1);
            this.background2.x = this.background1.x + Config.screenWidth;
            // UtilTool.log("this.background2.x = "+this.background2.x);
        }
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
        //# sourceMappingURL=BgView.js.map
        