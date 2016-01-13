var _ = require('lodash');
var data = require('../data');

/**
 * POST /login
 */
exports.postLogin = function(req, res, next) {
  res.send('ss');
};
/**
 * 测试接口
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getnav = function(req, res, next){
    res.json(data.navbars);
}



