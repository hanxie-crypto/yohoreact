var _ = require('lodash');
var yohoproxy = require('../yohoproxy');
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
exports.getnav = function(req, res, next) {
    yohoproxy.done('navlist', null, function(err, rsdata) {
        if (err) {
            next(err);
        } else {
            if (rsdata.code === 200) {
                console.log(rsdata.data);
                res.json(rsdata.data.navbars);
            }else{
                nex(new Error('出错'))
            }
        }


    });

}