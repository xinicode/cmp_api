# Iaas模块组件

## 获取所有业务

### 示例

``` 
<iaas-project-select
    v-model="model.projectId"
    :check-val="true"
    @on-change="changeProject"
    :showIcon="true"
    :onlySelectB="true"
    :defaultSelectG="true"
  />
```
### 代码

### API

| 属性 | 说明 |
| ------ | ------ | 
| defaultSelectG | 默认用户 | 
| onlySelectG | 只选择业务分组
| onlySelectB | 只选择业务
| showIcon | 是否显示图标
| checkVal | 是否默认选择 
| projectType | 类型 ’quota‘，’apply‘ 
| disabled | 是否可选 

| 事件名 | 说明 | 
| ------ | ------ | 
| change | 出发事件 | 



## 获取区域

### 示例

``` 
<iaas-region-select
  v-model="model.regionId"
  :region-ids="regionIds"
  :project-id="projectId"
  :check-val="true"
  @on-change="changeRegion"
/>
```
### 代码

### API

| 属性 | 说明 |
| ------ | ------ | 
| checkVal | 回选 | 
| type | UI类型 ’button‘ ,'select'
| reigonIds | 通过项目所属的区域进行过滤区域
| projectId | 项目Id
| disabled | 是否可选 

| 事件名 | 说明 | 
| ------ | ------ | 
| change | 出发事件 | 


## 获取区域

### 示例

``` 
<iaas-region-select
  v-model="model.regionId"
  :region-ids="regionIds"
  :project-id="projectId"
  :check-val="true"
  @on-change="changeRegion"
/>
```
### 代码

### API

| 属性 | 说明 |
| ------ | ------ | 
| checkVal | 回选 | 
| type | UI类型 ’button‘ ,'select'
| reigonIds | 通过项目所属的区域进行过滤区域
| projectId | 项目Id
| disabled | 是否可选 

| 事件名 | 说明 | 
| ------ | ------ | 
| change | 出发事件 | 


