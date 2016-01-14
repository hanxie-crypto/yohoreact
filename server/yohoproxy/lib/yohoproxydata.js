/**
 * http YOHO代理框架
 * author wq aitongbian123@163.com
 */

var InterfaceManager = require('./interfacemanager');
var yohoHttpProxy = require('./yohohttpproxy');

function YohoProxyData() {

}
YohoProxyData.prototype = {
    init: function(params) {
        this._interfacemanager = new InterfaceManager();
        if (params.mock === true) {
           var yohomock= require('./yohomock');
           new yohomock(this._interfacemanager._interfaceMap);
        }

    },
    done: function(id, param, callback) {
        var profile = this._interfacemanager.getProfile(id);
        var url = profile.url + profile.suburl;
        var type = profile.type;
        yohoHttpProxy[type](url, param, callback);
    }
}
var YoHoPorxy;

function getYoHoProxyData() {
    if (YoHoPorxy === undefined) {
        YoHoPorxy = new YohoProxyData();
    }
    return YoHoPorxy;
}
module.exports = getYoHoProxyData();