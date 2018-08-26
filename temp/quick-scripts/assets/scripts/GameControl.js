(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/GameControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7866agziABPg5N2pWyWDG4d', 'GameControl', __filename);
// scripts/GameControl.js

"use strict";

var _UtilTool = require("./util/UtilTool");

var _UtilTool2 = _interopRequireDefault(_UtilTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropEnum = require("PropEnum");

cc.Class({
    extends: cc.Component,

    properties: {
        bgNode: {
            default: null,
            type: cc.Node
        },
        playerNode: {
            default: null,
            type: cc.Node
        }

    },

    start: function start() {
        this.bgMove = this.bgNode.getComponent("BgView");
        this.player = this.playerNode.getComponent("Player");

        _UtilTool2.default.log("this.player.rabbit.getBoundingBoxToWorld()   " + this.player.rabbit.getBoundingBoxToWorld());
        _UtilTool2.default.log("this.bgMove.propArr[i][j]   " + this.bgMove.propArr[0][4].getBoundingBoxToWorld());
    },


    btnClickEvent: function btnClickEvent(event, customData) {
        console.log(" GameControl customData : " + customData);
        switch (customData) {
            case 'jump_1':
                this.bgMove.startMove(1);
                break;
            case 'jump_2':
                this.bgMove.startMove(2);
                break;
        }

        this.player.rabbitJump(1);

        // return new Promise(function (resolve,reject) {
        //     if (true){
        //         resolve(value);
        //     }else {
        //         reject(value);
        //     }
        // })
    },

    update: function update(dt) {
        var len1 = this.bgMove.propArr.length;
        var len2 = this.bgMove.propArr[0].length;

        for (var i = 0; i < len1; i++) {
            for (var j = 0; j < len2; j++) {
                var item = this.bgMove.propArr[i][j];
                if (this.player.rabbit.getBoundingBoxToWorld().intersects(item.getBoundingBoxToWorld())) {
                    // UtilTool.log(" item 22222   tag  : " + item.name);
                    this.judgeCollision(item);
                }
            }
        }
    },
    judgeCollision: function judgeCollision(item) {
        var tag = parseInt(item.name);
        _UtilTool2.default.log("PropEnum.stone  " + PropEnum.stone);
        switch (tag) {
            case PropEnum.stone:

                break;
            case PropEnum.wood:

                break;
            case PropEnum.rottenWood:
                _UtilTool2.default.log("碰到朽木");
                // this.unscheduleUpdate(this);
                break;
            case PropEnum.null:
                _UtilTool2.default.log("碰到空的");
                // this.unscheduleUpdate(this);
                break;

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
        //# sourceMappingURL=GameControl.js.map
        