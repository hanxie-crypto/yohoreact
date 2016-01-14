/**
 * 请求代理使用superagent
 * author wq aitongbian123@163.com
 */
var superagent = require('superagent');
var agentconfig = require('../../config/global_config').agentconfig;
/**
 * post请求
 * @param  {[type]}   url      [description]
 * @param  {[type]}   params   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.post = function(url, params, callback) {
    var superthis = superagent.post(url)
        .timeout(agentconfig.timeout)
        .set('Content-Type', agentconfig.contenttype);

    if (params) {
        superthis.send(params)
    }
    superthis.end(function(err, response) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, JSON.parse(response.text));
        }
    });
}
/**
 * get 请求
 * @param  {[type]}   url      [description]
 * @param  {[type]}   params   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.get = function(url, params, callback) {
    var superthis = superagent.get(url)
        .timeout(agentconfig.timeout)
        .set('Content-Type', agentconfig.contenttype);
    if (params) {
        superthis.query(params);
    }
    superthis.end(function(err, response) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, JSON.parse(response.text));
        }
    });
}