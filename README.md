# node-mongodb-express-
# 百联商城

#### 介绍
一个商城网站

#### 软件架构
使用nojs搭建后台管理系统，前端使用jq框架进行渲染


#### 安装教程

1. 线上使用网址：http://47.100.222.26
2. 本地运行：localhost

#### 使用说明
前端：
1：index.html是首页，下面的商品是数据渲染的过来的，点头部的注册和登录就可以注册新账号，注册成功就会跳转登录，登录成功就会跳转到主页，点击页面下的超值团中的妙可维可跳转到商品详情页，点击可添加到购物车，点去购物车结算，就可去购物车页面。

2：sign.html是登录页面，register.html是注册页面。注册，登录之后会存储一条cookie。

3.car.html是购物车页面。实现了放大镜，商品列表，商品详情等功能。

4：moudule里的car.js和good.js和js中的car-main.js和goods-main.js使用了模块化管理。


登录之后会存储一个cookie，不登录不能打开购物车，并且会直接跳转到首页点击登录。

后台：
1:打开http://47.100.222.26/admin/进入到管理系统后台
2：需要先进行登录管理账号：user：admin password：admin123
3：登陆后打开点击商品里的主屏即可向前端的商品详情页面的商品列表推送商品。
4：点击添加，在标题中写商品价格，在富文本框中写入加入购物车，在下方添加图片，点击提交即可推送到前端商品列表。
5：在商品列表中点击加入购物车，即可存下当时添加购物车的time，用ajax向后端home库中请求商品数据的time来进行对比，有相同的即往购物车添加商品。

#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request




