module.exports = function (app) {
  // 运维页面路由

  app.get('/master',function (req,res) {
    res.render('master');
  });
  app.get('/master/login',function (req,res) {
    res.render('master/login');
  });
  app.get('/master/blank',function (req,res) {
    res.render('master/blank',{
      pagename:'呵呵哒'
    });
  });
  // 用户管理
  app.get('/master/management/user/client',function (req,res) {
    res.render('master/management/user/client');
  });
  app.get('/master/management/user/administrator',function (req,res) {
    res.render('master/management/user/administrator');
  });
  // 订单管理
  app.get('/master/management/order/search',function (req,res) {
    res.render('master/management/order/search');
  });
  // 商品管理
  app.get('/master/management/commodity/search',function (req,res) {
    res.render('master/management/commodity/search');
  });
  app.get('/master/management/commodity/add',function (req,res) {
    res.render('master/management/commodity/add');
  });
  // 问题与反馈
  app.get('/master/outline/about',function (req,res) {
    res.render('master/outline/about');
  });
  app.get('/master/outline/FAQ',function (req,res) {
    res.render('master/outline/FAQ');
  });
  // 错误页
  app.get('/master/error/404',function (req,res) {
    res.render('master/error/404');
  });
  app.get('/master/error/500',function (req,res) {
    res.render('master/error/500');
  });
  app.get('*',function (req,res) {
    res.render('master/error/404');
  });
};