# 开发指南
## 概述
CMP是纳管云的平台


## 工程目录
~~~ json
|-- build                    # 项目编译配置
|   |-- chain.webpack.js     # webpack chain配置
|   |-- config.js            # 编译配置
|   |-- proxy.conf.js        # 开发代理配置
|   |-- webpack.conf.js      # webpack扩展配置
|-- module                   # 业务模块
|   |-- assets               # 配置文件
|   |-- base                 # 通用方法封装
|   |-- common               # 通用组件
|   |-- 业务模块名称           
|   |   |-- components       # 模块组件 
|   |   |-- services         # 模块服务 
|   |   |-- views            # 模板
|-- public                   # 静态资源
|   |-- config.js            # 动态配置文件
|   |-- favicon.ico          # 网站 favicon
|   |-- index.html           # html 模板
|   |-- images               # 网站 LOGO 图片
|-- src                      # 源代码
|   |-- App.vue              # 入口页面
|   |-- main.js              # 入口文件 加载组件 初始化等
|   |-- setting.env.js       # 开发配置文件
|   |-- setting.js           # 业务配置文件
|   |-- tsconfig.json        # ts 编制支持配置文件
|   |-- api                  # 所有请求    
|   |-- assets               # 图片、svg 等静态资源
|   |-- layouts              # 布局
|   |-- menu                 # 菜单配置
|   |-- mixins               # 通用混合
|   |-- mock                 # 数据模拟
|   |-- pages                # 所有页面
|   |-- router               # 路由配置
|   |-- styles               # 样式管理
|-- tests                    # 测试管理
|-- alias.config.js          # 别名，仅用于配置 WebStorm 识别别名，无实际用处
|-- babel.config.js          # babel 配置
|-- jest.config.js           # 前端自动化测试 jest 配置
|-- postcss.config.js        # postcss 配置
|-- package.json             # Node项目核心配置文件
|-- .eslintignore.js         # eslint 忽略配置
|-- .eslintrc.js             # eslint 配置信息
|-- .gitignore               # git 忽略配置
~~~

## 打包 
~~~ json
{
  "scripts": {
    "dev": "bingo-builder dev --config ./build/config.js  --dist ./dist/dev",           //启动开发模式  
    "build": "bingo-builder build --config ./build/config.js --dist ./dist/build",      //编译Web 
    "pack": "bingo-builder pack --config ./build/config.js --dist ./dist/pack",         // 打包模块(modules目录)
    "packdev": "bingo-builder packdev --config ./build/config.js --dist ./dist/packdev",  
    "publish": "npm run pack && npm publish ./dist/pack --registry=https://repo.bingosoft.net/repository/npm-snapshot/",  //发布到仓库
  }
}
~~~


::: warning 
如果 bingo-builder cli 映射失败（找不到 bingo-builder），请使用 node 方式运行，如 dev 换成：node ./node_modules/@bingo/builder/bin/cli.js dev --config ./build/config.js --dist ./dist/dev

:::