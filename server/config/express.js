var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var path = require('path');


var yohoproxy = require('../yohoproxy'); //引入代理




module.exports = function (app) {
  app.set('port', (process.env.PORT || 3000));
  app.set('views', path.join(__dirname, '..', 'views'));

  app.set('view cache', false);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

  app.use(express.static(path.join(__dirname, '../..', 'public')));


  var node_env = process.env.NODE_ENV;
  console.log('Environment: ' + node_env);
  if(node_env === 'production') {
    yohoproxy.init({mock:false});//初始化代理
    sess.cookie.secure = true; // Serve secure cookies
  }
  else {
    yohoproxy.init({mock:true});//初始化代理
  }


  
  var port = (node_env === 'production') ? app.get('port') : 3000;

};
