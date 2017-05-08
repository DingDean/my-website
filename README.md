# 我的二向箔 My Blog

> 我的二向箔

## 灵感

* 既然博客名为二向箔，那么可以有一个开场动画，这个动画从一座立体山峰开始，镜头围绕它水平旋转，转完一圈后山体开始向下坍塌，同时镜头上升以俯视角拍摄山峰直到垂直于水平面，这时，水平面上呈现出山峰的等高线图。这个等高线图可以是自己设计的一个LOGO.

## 网站抬头

* 包括网站LOGO,网站名称
* 页面加载时,首先出现LOGO,其次从LOGO中滑出网站名称于LOGO右边
* 电脑端,当鼠标悬浮于标题时,会随机播放一段动画.手机端暂时不会有这个功能

## 欢迎文字
* 欢迎文字位于网站抬头的下方
* 欢迎文字的出现效果最好是模拟电脑输入的方式,一个字一个字的出现,如果能做到假装删除几个字的效果,那最好了.
* 欢迎文字的加载效果可以使用two.js做一个动画
* 欢迎文字是可以点击的，点击后会出现<弹星者和二向箔>这篇文章

## 读取文章

* 文章被存储在一个独立的git仓库中. 此仓库中提供一个index.md来作为整个文件夹的索引.
* 务器会根据index.md中的内容来标记每一篇文章，包括文章的标题，概要，索引位置以及标签信息.
* 以上的信息会被存储在数据库中(mongodb/redis)以供快速读取
* 每当有一篇文章被改动或者新的文章被加入时,服务器会自动更新文章索引

## 显示文章

* 每篇文章的内容会通过一个管道后再呈现在网页中
* 每篇文章有对应的管道，比如md文件对应md管道,tex文件对应tex管道

## 阅后即焚的短消息区

* 用来发泄自己的短期情绪
* 可以直接在手机上操作
* 如果一个用户正好鼠标移动到此条消息上,那么会触发一个动画或者小游戏

## Progressive Web App

* 升级网站为HTTPS
* 写出web app shell
* 使用service worker

## 优雅的应对错误

* 在前端或者后端遇到错误的时候，前端会展示一个合适的页面
* 这个页面根据每个错误订制
* 这个页面可以是SVG动画，也可以是一个互动的小游戏

## 音乐专栏

* 音乐, 文章, 动画
* 根据一首歌, 想象一个故事, 制作一个动画

## 待做事项

- [X] 加入网站总标题(静态)
- [X] 加入Github的图片链接
- [X] Progressive Web App 改造
- [X] 加入错误信息窗口
- [X] 设计Banner Logo和favico
- [ ] 加入Spinner
- [ ] 使用sw tools来缓存文章请求
- [ ] 加入欢迎文字
- [ ] 加入网站LOGO及其动画(静态)
- [ ] 加入网站总标题下的SVG动画
- [ ] 加入阅后即焚功能
- [ ] 加入网站导航栏(静态)
- [ ] 完善错误信息窗口
- [ ] 搭建音乐专栏框架

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
