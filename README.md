# 我的二向箔 My Blog

> 我的二向箔

## 灵感

* 既然博客名为二向箔，那么可以有一个开场动画，这个动画从一座立体山峰开始，镜头围绕它水平旋转，转完一圈后山体开始向下坍塌，同时镜头上升以俯视角拍摄山峰直到垂直于水平面，这时，水平面上呈现出山峰的等高线图。这个等高线图可以是自己设计的一个LOGO.

## 读取文章

* 文章被存储在一个独立的git仓库中. 此仓库中提供一个index.md来作为整个文件夹的索引.
* 服务器会根据index.md中的内容来标记每一篇文章，包括文章的标题，概要，索引位置以及标签信息.
* 以上的信息会被存储在数据库中(mongodb/redis)以供快速读取
* 每当有一篇文章被改动或者新的文章被加入时,服务器会自动更新文章索引

## 阅后即焚的短消息区

* 用来发泄自己的短期情绪
* 可以直接在手机上操作
* 如果一个用户正好鼠标移动到此条消息上,那么会触发一个动画或者小游戏

## 待做事项

- [ ] 加入网站总标题
- [ ] 加入网站导航栏
- [ ] 加入网站总标题下的SVG动画
- [ ] 加入阅后即焚功能
- [ ] 加入网站LOGO及其动画

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
