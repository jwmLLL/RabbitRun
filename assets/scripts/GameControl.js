import UtilTool from "./util/UtilTool";

const PropEnum = require("PropEnum");
const Config = require("Config");

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
        },
        gameOver: {
            default: null,
            type: cc.Node
        }

    },

    start() {
        this.bgMove = this.bgNode.getComponent("BgView");
        this.player = this.playerNode.getComponent("Player");

        this.gameOver.active = false;

    },

    startUpdate() {
        Config.totalScore = 0;
        this.everyStep = 0;
        this.schedule(this.updateCollision.bind(this), 0.4);
        this.bgMove.initProp();
    },


    btnClickEvent: function (event, customData) {
        // console.log(" GameControl customData : " + customData);
        switch (customData) {
            case 'jump_1':
                this.bgMove.startMove(1);
                this.everyStep = 1;
                break;
            case 'jump_2':
                this.bgMove.startMove(2);
                this.everyStep = 2;
                break;
        }
        this.player.rabbitJump(1);
        Config.totalScore += this.everyStep;
        // return new Promise(function (resolve,reject) {
        //     if (true){
        //         resolve(value);
        //     }else {
        //         reject(value);
        //     }
        // })
    },

    updateCollision() {
        let len1 = this.bgMove.propArr.length;
        let len2 = this.bgMove.propArr[0].length;

        for (let i = 0; i < len1; i++) {
            for (let j = 0; j < len2; j++) {
                let item = this.bgMove.propArr[i][j];
                if (this.player.rabbit.getBoundingBoxToWorld().intersects(item.getBoundingBoxToWorld())) {
                    // UtilTool.log(" item 22222   tag  : " + item.name);
                    this.judgeCollision(item);
                }
            }
        }
    },

    judgeCollision(item) {
        let tag = parseInt(item.name);
        UtilTool.log("PropEnum.stone  " + PropEnum.stone)
        switch (tag) {
            case PropEnum.stone:

                break;
            case PropEnum.wood:

                break;
            case PropEnum.rottenWood:
                UtilTool.log("碰到朽木");
                this.gameResult();
                break;
            case PropEnum.null:
                UtilTool.log("碰到空的");
                this.gameResult();
                break;
        }
    },

    gameResult() {
        this.unscheduleAllCallbacks();

        Config.totalScore -= this.everyStep;
        this.gameOver.getComponent("GameOver").label_score.string = "" + Config.totalScore;
        this.gameOver.active = true;
    }
});
