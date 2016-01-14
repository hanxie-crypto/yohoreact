/**
 * 接口管理器
 * author wq aitongbian123@163.com
 * @param {[type]} path [description]
 */
var interfaces = require('../../interface/interfaces');

function InterfaceManager(path) {
    this._mockServerMap = {}; //模拟数据映射
    this._interfaceMap = {};//接口映射
    this._initInterfaces(interfaces);//初始化
}

InterfaceManager.prototype = {
    _initInterfaces: function(profiles) {
        if(!profiles){
            return;
        }
        this._loadProfiles(profiles);
    },
    /**
     * 加载数据文件
     * @param  {[type]} profiles [description]
     * @return {[type]}          [description]
     */
    _loadProfiles: function(profiles) {
        if (!profiles) return;
        console.info('标题:', profiles.title, '版本:', profiles.version);
        var interfaces = profiles.interfaces || [];
        for (var i = interfaces.length - 1; i >= 0; i--) {
            this._addProfile(interfaces[i]) && console.info('Interface[' + interfaces[i].id + '] is loaded.');
        }
    },
    getProfile: function(interfaceId) {
        return this._interfaceMap[interfaceId];
    },
    isProfileExisted: function(interfaceId) {
        return !!this._interfaceMap[interfaceId];
    },
    _addProfile: function(prof) {
        if (!prof || !prof.id) {
            console.error("Can not add interface profile without id!");
            return false;
        }
        if (!/^((\w+\.)*\w+)$/.test(prof.id)) {
            console.error("Invalid id: " + prof.id);
            return false;
        }
        if (this.isProfileExisted(prof.id)) {
            console.error("Can not repeat to add interface [" + prof.id + "]! Please check your interface configuration file!");
            return false;
        }
        prof.timeout = prof.timeout || 10000;
        this._interfaceMap[prof.id] = prof;
    }

}
module.exports = InterfaceManager;