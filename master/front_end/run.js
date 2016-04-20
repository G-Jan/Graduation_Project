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

app.listen(80,function () {
  console.log("server starting...");
});