/*
 * @Author: Xiaohua.Peng 
 * @Date: 2017-09-25 09:00:29 
 * @Last Modified by: Xiaohua.Peng
 * @Last Modified time: 2017-09-25 17:10:02
 */

var Devwebpack = require('./config/webpack.dev');
var Prodwebpack = require('./config/webpack.prod');

switch(process.env.NODE_ENV){
    case 'dev':
        module.exports = Devwebpack;
        break;
    case 'prod':
        module.exports = Prodwebpack;
        break;
    default:
        module.exports = Devwebpack;
}
