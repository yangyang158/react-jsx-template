# react-jsx-template
这是一份基于 webpack + javascript + mobx 的打包项目模板。
## 项目结构
react-jsx-template
    │
    public                                                                 前端页面
        ├── webpack.analyzer.js                         
        ├── webpack.common.js
        ├── webpack.dev.js
        ├── webpack.prod.js
        ├── CHANGELOG.md                                                      
        ├── commitlint.config.js
        ├── package-lock.json
        ├── package.json
        ├── README.md
        ├── index.ejs                                                       html模板
        └── src                                                             业务代码根目录
            ├── assets                                                      静态资源文件存储目录
            │   ├── font
            │   └── img
            ├── components                                                  公用组件目录
            ├── theme.less                                                  主题色相关
            ├── utils                                                       公共函数以及公共类
            ├── index.js                                                    入口文件
            ├── route.jsx                                                   页面路由
            ├── theme.less                                                  主题色文件
            └── index.less                                                  全局样式文件
## 运行命令
执行npm run \<type\> 命令，type类型如下： 
- start 启动项目
- build-d 打包开发环境项目
- build-p 打包生产环境项目
- build:analyzer 启动打包分析工具
- release 发布版本
- eslint 执行代码规范校验，并自动修复
    
    
## 代码提交规范
该项目模板配置了commitlint的钩子，提交代码时，必须按照规范书写commit信息，这是为了以后维护的成本考虑，并且按照规范书写commit，再发布系统时，通过执行 npm run release 命令，会自动更新 CHANGELOG.md 文件，请严格遵守！
具体的代码提交规范，请参考阮一峰的文章
[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

Commit message格式
<type>: <subject>
type: feat | fix | docs | style | refactor | test | chore
message: 简短描述，不超过50个字符，且结尾不加句号（.）
例如： git commit -m "style: 添加主题色文件"