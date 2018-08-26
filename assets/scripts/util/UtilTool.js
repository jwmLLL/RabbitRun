/**
 *
 * 工具类
 */
const UtilTool = {
    isPrint: true,

    log: function (str) {
        if (UtilTool.isPrint) {
            console.log(" rabbitRun  " + str);
        }
    }
}

export default UtilTool;