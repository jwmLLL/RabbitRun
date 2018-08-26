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


    start() {

    },

    btnClickEvent: function (event, customData) {
        this.node.active = false;
        this.gameNode.getComponent("GameControl").startUpdate();
    },


    // update (dt) {},
});
