# 推荐系统项目前端

Project setup

```
npm install
```

Compiles and hot-reloads for development

```
npm run serve
```

Compiles and minifies for production

```
npm run build
```

Lints and fixes files

```
npm run lint
```



### 文件结构

`node_modules` 文件夹中存放所用的 `npm` 包

代码基本在 `src` 文件夹。

`api` 文件夹中是接口相关函数，目前的想法是使用 `axios` 的 `get` 和 `post` 操作。可以按不同的事务分别写在不同的文件中，调用的时候全局绑定或者 `import` 相应的文件即可。

`components` 文件夹存放 `vue` 实例，现在的想法是每一页单独作为一个实例（.vue文件），再使用 `vue-router` 进行跳转。

`router` 文件夹中是 `vue-router` 相关配置。添加新页面直接把vue实例和路由信息写在 `routes.js` 中即可。目前有`home`，`user`，`upload`三个页面。

`common` 文件夹存放全局方法和变量。目前有 `router.js` 定义了页面切换相关的函数。

`App.vue` 中显示 `<router-view/>` 来实现页面切换显示。

`main.js` 是入口文件

`vue.config.js` 中配置了 `axios` 跨域，`target` 就是需要通信的 url。

### api
url：`BaseUrl/api/`
1. 前端向 `BaseUrl/api/data` 发出 get 请求，同时包含两个参数 `key` 和 `rule`，分别表示搜索的关键字和排序规则。其中关键字为空表示请求所有数据。
2. 前端向 `BaseUrl/api/upload` 发出post请求，上传推荐。
3. 收藏？注册？


### 待进行任务

1. 登录逻辑和注册逻辑未实现
2. get 和 post 的 header 中可能需要添加身份信息相关的 tokens (tokens未实现)
3. 页面还没渲染 0v0
4. 前后端数据联调及 api 测试