
cc.Class({
    extends: cc.Component,

    properties: {
        gameNode:{
            default:null,
            type:cc.Node
        }

    },

    start () {

    },

    startGame(event,data){

        this.node.active = false;
        this.gameNode.getComponent("GameControl").startUpdate();
    }

});
