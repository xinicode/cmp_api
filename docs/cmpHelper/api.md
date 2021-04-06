# 配置

## 引入

#### import { CmpHelper } from "@cmp/core"

### replaceAll
#### 在字符串中用一些字符替换另一些字符。
- 参数
  * ` string `  s     
  * ` string `  str   
  * ` string `  repl  
  * ` string `  flags ? 可选字符串  包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小和多行匹配

* 返回：String
``` 
  CmpHelper.replaceAll(s,str,repl,'ig'):String
```

<!-- ::: tip
这个选项也可以通过命令行来使用：

``` bash
vuepress dev docs --cache .cache # 设置 cache 路径
vuepress dev docs --no-cache     # 在每次构建前删除 cache
```

::: -->
### toStr
#### 转换字符串 
- 参数
  * ` string `  s    

* 返回：String

``` 
  CmpHelper.toStr(s):String
```
### isType
#### 判断类型 
- 参数
  * ` string `  typename  (String, Array, Boolean, Object, RegExp, Date, Function,Number)
  * ` any `  value

* 返回：Boolean

``` 
  CmpHelper.isType("String",value):Boolean
```

### isUndefined
#### 检测是否undefined
- 参数
  * ` string `  s
* 返回：Boolean

``` 
  CmpHelper.isUndefined(s):Boolean
```


### isNull
#### 是否为null 
- 参数
  * ` string `  s
* 返回：Boolean

``` 
  CmpHelper.isNull(s):Boolean
```

### isBoolean
#### 是否为boolean
- 参数
  * ` string `  s
* 返回：Boolean
``` 
  CmpHelper.isBoolean(s):Boolean
```
### isNullEmpty
#### 是否为空
- 参数
  * ` string `  s
* 返回：Boolean
``` 
  CmpHelper.isNullEmpty(s):Boolean
```
### isFunction
#### 是否为boolean
- 参数
  * ` string `  s
* 返回：Boolean
``` 
  CmpHelper.isFunction(s):Boolean
```
### isNumeric
#### 是否为Numer
- 参数
  * ` string `  s  (111,"1111" return true)
* 返回：Boolean
``` 
  CmpHelper.isNumeric(s):Boolean
```
### isString
#### 是否为string
- 参数
  * ` string `  s
* 返回：Boolean
``` 
  CmpHelper.isString(s):Boolean
```

### isObject
#### 是否为Object
- 参数
  * ` string `  s
* 返回：Boolean
``` 
  CmpHelper.isObject(s):Boolean
```

### isElement
#### 是否为Element对象
- 参数
  * ` any `  s
* 返回：Boolean
``` 
  CmpHelper.isElement(s):Boolean
```

### isWindow
#### 是否为Window对象
- 参数
  * ` any `  s
* 返回：Boolean
``` 
  CmpHelper.isWindow(s):Boolean
```
### isArray
#### 是否为数组对象
- 参数
  * ` any `  s
* 返回：Boolean
``` 
  CmpHelper.isArray(s):Boolean
```

### isPlainObject
#### 判断是否一个纯粹的对象,就是该对象是通过"{}"或"new Object"创建的
- 参数
  * ` any `  s
* 返回：Boolean
``` 
  CmpHelper.isPlainObject(s):Boolean
```
### isEqualNotFn
#### 比较两个对像是否相等，但不比较function类型
- 参数
  * ` object `  p1
  * ` object `  p2
* 返回：Boolean
``` 
  CmpHelper.isEqualNotFn(p1,p2):Boolean
```

### inArray
#### 查询数组是否存在某元素
- 参数
  * ` Array<any> `  list
  * ` any `  p
* 返回：Number 索引 不存在为-1
``` 
  CmpHelper.inArray(list,p):Number
```
### toArray
#### 字符串转换数组（slice）
- 参数
  * ` String `  str
  * ` Number  ` start ?  
  * ` Number  ` count ?  
* 返回：Array
``` 
  CmpHelper.inArray(list,start?,count?): Array
```

### trim
#### 去除字符串的空格
- 参数
  * ` String `  str
  * ` Boolean  ` newline ?  
* 返回：String
``` 
  CmpHelper.trim(list,newline?): String
```

<!-- ### arrayToObject
#### 数组转对象
- 参数
  * ` Array `  list
  * ` String  ` fileName 
* 返回：String
``` 
  CmpHelper.arrayToObject(list,fileName): String
``` -->

### each
#### 遍历
- 参数
  * ` Array<any> `  list
  * ` Function  `   fn 
``` 
  CmpHelper.each(list,(item,index)=>{}): void
```
### hasOwnProp
#### 检测对象是否存在某key
- 参数
  * ` Object<any> `  object
  * ` String  `       str 
``` 
  CmpHelper.hasOwnProp(object,str): Boolean
```

### eachProp
#### 遍历对象使用
- 参数
  * ` Object `  object
  * ` Function  `   fn 
* 返回：String
``` 
  CmpHelper.eachProp(object,newline): void
```
### extend
#### 扩展
- 参数
  * ` Object `  object   扩展到Obj
  * ` Object  ` args     扩展源
* 返回：String
``` 
  CmpHelper.extend(object,args): Object
```
### makeAutoId
#### 生成随机Id
 ``` 
  CmpHelper.makeAutoId(): Number
```

### isClass
#### 是否属于类是否继承某类
- 参数
  * ` any `  p
  * ` any  ` cls
* 返回：String
``` 
   class t {
      name: string;
      constructor(name: string) {
          this.name = name;
      }
  }
  class web extends t {
      age:number;
      constructor(name: string,age) {
          super(name);
          this.age = age;
      }
  }
  let ast = CmpHelper.isClass(web, t)
  true
```
### isComponent
#### 
- 参数
  * ` Boolean  ` cls  
* 返回：boolean
``` 
  CmpHelper.isComponent(cls): boolean
```
### offset
#### dom位偏移
- 参数
  * ` any `  element
  * ` object  ` offset ?  
* 返回：String
``` 
  CmpHelper.offset(element,{top:number,left:number}): void
```
### setQuerystring
#### 拼接URl字符串参数
- 参数
  * ` String `  url
  * ` Object `  params     
  * ` Boolean `  json ?  
  * ` Boolean  ` useToHttp ?  
* 返回：String
``` 
  CmpHelper.setQuerystring(url,params): String
```
### getQuerystring
#### 获取url query, 如果name为空返回query部分
- 参数
  * ` String `  url
  * ` String `  name ?
* 返回：String
``` 
  CmpHelper.getQuerystring(url,name): String
```
### queryParse
#### 字符串转对象
- 参数
  * ` String `  str
* 返回：Object
``` 
  CmpHelper.queryParse(str): Object
```
<!-- ### queryStringify
#### 去除字符串的空格
- 参数
  * ` String `  query
  * ` Boolean  ` useToHttp ?  
* 返回：String
``` 
  CmpHelper.queryStringify(query,useToHttp): String
``` -->
### setHashQuerystring
#### 拼接Hash URl字符串参数
- 参数
  * ` String `  url
  * ` Object `  p     
  * ` Boolean `  json ?  
* 返回：String
``` 
  CmpHelper.setHashQuerystring(url,p): String
```
### getHashQuerystring
#### 获取Hash url query, 如果name为空返回query部分
- 参数
  * ` String `  url
  * ` String `  name ?
* 返回：String
``` 
  CmpHelper.getHashQuerystring(url,name): String
```
### getUrlHash
#### 获取url hash部分
- 参数
  * ` String `  url
* 返回：String
``` 
  CmpHelper.getUrlHash(url): String
```
### getUrlPart
#### 获取url路径部分
- 参数
  * ` String `  url
* 返回：String
``` 
  CmpHelper.getUrlPart(url): String
```
### isAbsolutelyUrl
#### 是否包含：
- 参数
  * ` String `  url
* 返回：String
``` 
  CmpHelper.isAbsolutelyUrl(url): String
```
<!-- 
### getFirstProp
- 参数
  * ` String `  list
* 返回：String
``` 
  CmpHelper.getFirstProp(list): String
```
### autoSelect -->

### getFirstItem
#### 根据propKey属性值获取数据
- 参数
  * ` String `  url
* 返回：String
``` 
  CmpHelper.getFirstItem(url): String
```



### makeChildren
####  数组父子关联
- 参数
  * ` Array `   data          数据源
  * ` String `  idKey="id"  ?  
  * ` String `  parentIdKey="parentId"  ?       
* 返回：Array
``` 
  CmpHelper.makeChildren(data,idKey,parentIdKey): 
```


### safeOperator
####  安全操作符
* promise
``` 
  CmpHelper.safeOperator(): 
```
### awaitWrap
#### 统一 await 返回值: [err, data]
* promise
``` 
  CmpHelper.awaitWrap(): promise
```
### dispatchEvent
#### 发送一个事件
- 参数
  * ` String `  element      HTML Element
  * ` String `  eventName    事件名称
  * ` String `  type         事件类型，默认 MouseEvents
  * ` String `  bubbles      是否可以取消，默认 true
  * ` String `  cancelable   是否可以取消，默认 true
* 返回：String
``` 
  CmpHelper.dispatchEvent(url): String
```
### getVueName


