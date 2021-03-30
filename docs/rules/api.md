# 风格指南

## 概述
业务模块需独立文件夹，文件夹下有三个模块分别存放该模块的组件、服务、业务视图、及其数据类型。

  
## 业务模块
~~~ json
|-- 业务模块名称                   # 业务模块 (驼峰写法)
|   |-- models                   # 数据类型定义
|   |   |-- ip-list.model.ts   
|   |-- components               # 业务模块所需组件
|   |   |-- ipSelect.components.ts                
|   |   |-- ipSelect.components.vue               
|   |-- services                 # 业务模块所需服务
|   |   |-- ip.service.ts   
|   |-- views                    # 业务模块视图
|   |   |-- ip-list.vue            
|   |   |-- ip-list.ts      
|   |   |-- ip-select.modal.vue     # modal弹出框       
|   |   |-- ip-select.modal.ts          

~~~
## 生命周期
``` 
  @CmpInitData()
  /**
  * 生命周期，准备数据，返回Promise（在CmpInit之前），但可以使用于service
  */

  @CmpInit()
  /**
  * 生命周期，初始化（在vue-created之后），但可以使用于service
  */

  @CmpReady()
  /**
  * 生命周期，准备好所有组件环境（在vue-mounted之后），但可以使用于service
  */

  @CmpVueBeforeDestroy()
  /**
  * 页面销毁事件触发
  */

  @CmpDestroyed()
  /**
  * 页面销毁事件触发
  */

``` 



### 数据类型
#### ip-list.model.ts
``` 
  export interface IpListModel {
    asGroupArn?: string,
    asGroupName?: string,
  }

```
### 组件
#### ipSelect.components.ts
``` 
import { CmpModelComponent } from "@cmp/core";

export default class IpSelectComponents extends CmpModelComponent {}

```
### 服务
#### ip.service.ts
``` 
import { CmpService } from "@cmp/core";

export class IpService extends CmpService {}

```
### 业务
#### ip-list.ts
``` 
import { CmpPage } from "@cmp/core";

export class IpList extends CmpPage {}

```
#### ip-select.modal.ts
``` 
import { CmpModal } from "@cmp/core";

export class IpSelectModal extends CmpModal {}

```
## 代码编写规范

####  视图 ip-list.vue
``` 
<template>
  <cmp-page>
    <cmp-page-header>
      title
    </cmp-page-header>
    <cmp-page-body>
        <Card :bordered="false">
            content
        </Card>
    </cmp-page-body>
    </cmp-page>
</template>
<script lang="ts" src="./ip-list.ts"></script>

```
####  视图 ip-list.ts

``` 
<!-- 组件引入 -->

@CmpVueComponent({
    'test': testComponent
})

export class IpList extends CmpPage {

  <!-- 依赖注入服务 -->

  @CmpInject(IpService)
  private _ipSrv: IpService;

  <!-- 组件传参 -->

  @CmpVueProp({ type: String,defailt: "BCC" })
  regionId: string;

  <!-- 页面元素 -->

  @CmpVueRef('inputDom')
  private _inputDom: any;

  <!-- 页面生命周期 -->

  @CmpVueBeforeCreate()

  @CmpInit()

  @CmpInitData()

  @CmpReady()

  @CmpDestroyed()


  <!-- 变量定义 -->

  model: IpModel = {
    name:"",
    age: 12,
  };

  regionList = [];

  age:Number = 0;

  title: String = "title";

  <!-- 方法 -->

  changeName(){


  }

  <!-- 视图数据格式化方法 -->
  formatterStatus(row) {
    let result = "";

    return result ? result : ""；
  }

  <!-- 页面Table按钮权限 -->
  
  ** ip.list.vue 
  *** cmp-access:test 

  @CmpAccessItem('test', {
        hasData: true, multi: false
      }
  })

  @CmpAccessItem('test', {
      hasData: true, multi: false, check(data, target) {
          let isEnable = false;
          return isEnable;
      }
  })
}


``` 



