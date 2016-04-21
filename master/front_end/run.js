var express = require('express');

var app = express();

var swig = require('swig');
// 配置swig模板引擎
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// 指定静态资源路径
app.use(express.static('static'));

// 加载路由模块
var routes = require('./routes')(app);

// 设置监听
var port = process.env.FA_PORT || 80;
app.listen(port,function () {
  console.log("server starting on port :%s",port);
});