# 配置

#### import { CmpCore } from "@cmp/core"

## token
#### 获取当前用户Token

``` 
  CmpCore.token: string
```

## curUserInfo
#### 获取当前用户信息

``` 
  CmpCore.curUserInfo: Object
```




## cmpvar
#### 获取Url的参数cmpvar-id=111&cmpvar-name=test，生成结果CmpCore.cmpvar内容为{id:'111', name:'test'}

* 返回：Object
``` 
  CmpCore.cmpvar: Object
```

## storage
#### 获取本地存储

``` 
  CmpCore.storage: Object
```



## siteBasePath 
#### 获取基础路径

``` 
  CmpCore.siteBasePath: String
```

## routes
#### 获取路由表

``` 
  CmpCore.routes: Array
```

## startups
#### 获取启动表

``` 
  CmpCore.startups: Array
```

## getRoutes 
#### 获取路由

- 参数
  * ` String ` str    
* 返回：Array

``` 
  CmpCore.getRoutes(str): 返回：Array
```


## registerRoutes 
#### 注册路由
- 参数
  * ` String ` str    
  * ` Array `  list   

* 返回：void
``` 
  const CmpIaasRoutes: CmpVueRouteConfig[] = [
    {
      path:"svc",
      component: () => import(/* webpackChunkName: "cmp_iaas_bpmModel" */ "./svc/views/index.vue")    
    }
  ]
  CmpCore.registerRoutes('iaas',CmpIaasRoutes): void
```

## isLogin 
#### 检测是否登录

``` 
  CmpCore.mvueContext.getMvueToolkit().session.isLogin(): Boolean
```



## doLogout 
#### 登出

``` 
  CmpCore.mvueContext.getMvueToolkit().session.doLogout(""): void
```

## getToken 
#### 获取Token

``` 
  CmpCore.mvueContext.getMvueToolkit().session.getToken(): String
```

## hasToken 
#### 检测是否Token

``` 
  CmpCore.mvueContext.getMvueToolkit().session.hasToken(): Boolean
```

##  refreshToken
#### 获取新的Token

``` 
  CmpCore.mvueContext.getMvueToolkit().session.refreshToken(): Promise
```


## getSessionDetail 
#### 获取Session相关数据

``` 
  CmpCore.mvueContext.getMvueToolkit().session.getSessionDetail() : Object
```

## getCurrentUser 
#### 当前用户信息

``` 
  CmpCore.mvueContext.getCurrentUser: Boolean
```



