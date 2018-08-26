import UtilTool from "./util/UtilTool";
const PropEnum = require("PropEnum");

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

    },

    start() {
        this.bgMove = this.bgNode.getComponent("BgView");
        this.player = this.playerNode.getComponent("Player");

        UtilTool.log("this.player.rabbit.getBoundingBoxToWorld()   " + this.player.rabbit.getBoundingBoxToWorld());
        UtilTool.log("this.bgMove.propArr[i][j]   " + this.bgMove.propArr[0][4].getBoundingBoxToWorld());

    },

    btnClickEvent: function (event, customData) {
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

    update(dt) {
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
        UtilTool.log("PropEnum.stone  "+PropEnum.stone)
        switch (tag) {
            case PropEnum.stone:

                break;
            case PropEnum.wood:

                break;
            case PropEnum.rottenWood:
                UtilTool.log("碰到朽木" );
                // this.unscheduleUpdate(this);
                break;
            case PropEnum.null:
                UtilTool.log("碰到空的" );
                // this.unscheduleUpdate(this);
                break;


        }
    }
});
