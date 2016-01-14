/**
 * http 服务模拟器
 * author wq aitongbian123@163.com
 */

var nock = require('nock');
var mockconfig = require('../../config/global_config').mockconfig;
var mokdatamap = require('../../mockdata');

function YoHoMock(interfaceMap) {
    this._mockServerMap = {};
    this._initMockserver(interfaceMap);

}
YoHoMock.prototype = {
    /**
     * 增加模拟服务
     * @param {[type]} nock [description]
     * @param {[type]} obj  [description]
     */
    _addMockServer: function(nock, obj) {
        var that = this;
        if (obj.mockconfig.params) {
            if (obj.type === 'get') {
                nock.get(obj.suburl)
                    .query(obj.mockconfig.params)
                    .delay(obj.mockconfig.timeout)
                    .reply(200, JSON.stringify({
                        code: 200,
                        data: that._getMockData(obj.id),
                        message: 'oo'
                    }));
            }
            if (obj.type === 'post') {
                nock.post(obj.suburl, obj.mockconfig.params)
                    .delay(obj.mockconfig.timeout)
                    .reply(200, JSON.stringify({
                        code: 200,
                        data: that._getMockData(obj.id),
                        message: 'oo'
                    }));
            }
        } else {
            nock[obj.type](obj.suburl)
                .delay(obj.mockconfig.timeout)
                .reply(200, JSON.stringify({
                    code: 200,
                    data: that._getMockData(obj.id),
                    message: 'oo'
                }));
        }

        return nock;
    },
    /**
     * 根据路径获取模拟数据
     * @param  {[type]} path [description]
     * @return {[type]}      [description]
     */
    _getMockData: function(path) {
        return mokdatamap[path];
    },
    /**
     * 初始化模拟服务
     * @param  {[type]} interfaceMap [description]
     * @return {[type]}              [description]
     */
    _initMockserver: function(interfaceMap) {
        if (interfaceMap) {
            for (var k in interfaceMap) {
                var prof = interfaceMap[k];
                var defaultNock = nock(prof.url)
                    .persist() //让模拟服务一直存在
                    .defaultReplyHeaders({
                        'Content-Type': mockconfig.contenttype
                    });
                this._mockServerMap[k] = this._addMockServer(defaultNock, prof);
            }
        }
    }
}

module.exports = YoHoMock;