"use strict";
cc._RF.push(module, '7866agziABPg5N2pWyWDG4d', 'GameControl');
// scripts/GameControl.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // onLoad () {},

    start: function start() {},


    btnClickEvent: function btnClickEvent(event, customData) {
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

cc._RF.pop();