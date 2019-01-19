# oto

> A Vue.js project

## Build Setup

## 项目构造
``` bash
|- config
|- node_modules
|- src
    |- assets
        |- data 模拟数据
        |- images 图片区域
    |- components
        |- nav 信息披露
            |- index.vue 左侧菜单样式组件
        |- aboutUsTitle.vue 信息披露内容右侧公共组件
    |- config
        |- components.js 整个项目组件配置打包
    |- router
        |- news 信息披露
            |- aboutUs.js 关于我们路由信息
            |- law.js 法律法规路由信息
            |- safe.js 合规安全路由信息
        |- index.js 全局路由整合
    |- store
        |- modules
            |- news.js 信息披露数据
        |- index.js 全局Vuex整合入口
    |- style
        |- normal.css 公共样式
    |- view
        |- aboutUs 信息披露-> 关于我们
            |- company.vue
            |- institutional.vue
            |- shareholders.vue
        |- laws 信息披露 -> 法律法规
            |- forbidden.vue
            |- lawsRegulationis.vue
        |- safe 信息披露-> 合规安全
            |- feescale.vue
        |- index.vue 全局导航入口
    App.vue
    main.js
|- static
|- test
.babelrc
.editorconfig
.eslintignore
.eslintrc.js
.gitignore
.postcssrc.js
index.html
package.json

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

