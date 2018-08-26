
cc.Class({
    extends: cc.Component,

    properties: {
        rabbit:{
            default:null,
            type:cc.Node
        }

    },



    start () {
        this.anim = this.rabbit.getComponent(cc.Animation)

    },
    rabbitJump(setp){
        this.anim.play("RabbitJumpAni");
    }

});
