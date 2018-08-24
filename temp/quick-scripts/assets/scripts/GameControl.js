(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/GameControl.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7866agziABPg5N2pWyWDG4d', 'GameControl', __filename);
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
        