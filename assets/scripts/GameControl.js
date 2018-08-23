
cc.Class({
    extends: cc.Component,

    properties: {

    },


    // onLoad () {},

    start () {

    },

    btnClickEvent:function (event,customData) {
        console.log(" GameControl customData : " + customData);
        switch (customData) {
            case 'jump_1':

                break;
            case 'jump_2':

                break;
        }

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
