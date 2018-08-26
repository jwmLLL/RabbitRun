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


    // onLoad () {},

    start() {
        this.bgMove = this.bgNode.getComponent("BgView");
        this.player = this.playerNode.getComponent("Player");
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
    }
    // update (dt) {},
});
