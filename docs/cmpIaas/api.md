# 配置

### Iaas模块

#### import { CommonService } from '../../common/services/common.service';

## moment
#### 时间戳转换标准时间 YYYY-MM-DD 

- 参数
  * ` string `  val    

* 返回：String

``` 
  CommonService.moment(val):String
```

## hasManagedProject
#### 根据用户Id查询是否是管理员

- 参数
  * ` string `  str    用户Id    

* 返回：Boolean

``` 
  CommonService.hasManagedProject(str): Boolean
```


## makeRamSize
#### 内存转换  取一个单位小数 小于1000 则不转换

- 参数
  * ` string `  str        

* 返回：String

``` 
  CommonService.makeRamSize(str): String
```

## getSizeInfo
#### 转换单位 1024进制  

- 参数
  * ` string `  size        
  * ` string `  startUnit     单位   'B', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'

* 返回：Object
~~~ json
|--orgSize: 3000
|--size: 2.9296875
|--text: "2.93"
|--textAll: "2.93G"
|--units: "G"                
~~~
``` 
CommonService.getSizeInfo(size,startUnit): Object
```

## getRamsizeText
#### 获取内存  传入单位为M  返回单位为G

- 参数
  * ` string `  size        

* 返回：String 3.3G
``` 
CommonService.getRamsizeText(size): String
```


## getVolumeText
#### 获取存储  传入单位为M 基础单位为G 大于G会返回T 

- 参数
  * ` string `  size        

* 返回：String 3.3T
``` 
CommonService.getVolumeText(size): String
```


## setQueryString
#### 设置Url传参

- 参数
  * ` string `  url        
  * ` object `  params ? {}       

* 返回：String
``` 
CommonService.setQueryString(url,name): String
```


## queryString
#### 获取地址栏传参

- 参数
  * ` string `  key  名        

* 返回：String
``` 
CommonService.queryString(key): String
```

## getQueryString
#### 获取url传参key值

- 参数
  * ` string `  url        
  * ` string `  item        

* 返回：String
``` 
CommonService.getQueryString(url,item): String
```

## removeRQItem
#### 移除URl特定参数

- 参数
  * ` string `  url        
  * ` string `  item        

* 返回：String
``` 
let url = '10.2.2.3?t=123&a=1234';
item = 't'
CommonService.removeRQItem(url,item): String
<!-- return 10.2.2.3?a=1234 -->
```

## getDateMinutes
#### 获取时间分钟

- 参数
  * ` string `  timeStr        

* 返回：String
``` 
 let url = "2019-10-25 23:38:50";
 CommonService.getDateMinutes(timeStr): String
 <!-- return 2019-10-25 23:38 -->
```

## _getDateString
#### 获取 日期   YYYY-HH-DD

- 参数
  * ` string `  timeStr        

* 返回：String
``` 
 let timeStr = "2019-10-25 23:38:50";
 CommonService._getDateString(timeStr): String
 <!-- return 2019-10-25 -->
```


## getDateDiff
#### 和当前日期进行比较  返回 X小时前 X分钟前 刚刚 具体日期

- 参数
  * ` string `  timeStr        

* 返回：String
``` 
 let timeStr = "2021-04-06 23:38:50";
 CommonService.getDateDiff(timeStr): String
 <!-- return 2019-10-25 -->
```

## encodeUnicode
#### 转码

- 参数
  * ` string `  timeStr        

* 返回：String
``` 
 CommonService.encodeUnicode(timeStr): String
```

## decodeUnicode
#### 解码

- 参数
  * ` string `  timeStr        
* 返回：String
``` 
 CommonService.decodeUnicode(timeStr): String
```

## makeListChildren
#### 解码

- 参数
  * ` Array `  datas        
  * ` string `  projectId        
  * ` string `  parentProjectId       
* 返回：Array

``` 
 CommonService.makeListChildren(datas, 'projectId', 'parentProjectId'): Array
```