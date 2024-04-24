# Cyndi
![GitHub](https://img.shields.io/github/license/liuxian496/cyndi)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/liuxian496/cyndi/cyndi.yml)
[![Coverage Status](https://coveralls.io/repos/github/liuxian496/cyndi/badge.svg?branch=main)](https://coveralls.io/github/liuxian496/cyndi?branch=main)
![GitHub Repo stars](https://img.shields.io/github/stars/liuxian496/cyndi)


<p>Cyndi 是一个JavaScript工具库。提供一些跨组件库、通用的方法。</p>

## 主页
[github.io主页](https://liuxian496.github.io/cyndi/)


## 使用

### 1. 安装cyndi
npm i cyndi

### 2. cyndi依赖的库
cyndi，依赖下面的库。
1. [lodash](https://github.com/lodash/lodash)

## 功能

### getPrefixNs
```
/**
 * 获取控件css前缀
 * @param componentName 控件名称 {string}
 * @param customizePrefix 用户自定义前缀 {string}
 * @param defaultPrefix 默认前缀 {string}
 * @returns prefix 控件css类前缀 {string}
 */
export declare function getPrefixNs(componentName: string, customizePrefix?: string, defaultPrefix?: string): string;

```
### isEmptyString

```
/**
 * 检测是否是空字符串
 * @param 需要判断的值 {any}
 * @returns isString 是否是空字符串 {boolean}
 */
export declare function isEmptyString(str: unknown): boolean;

```

### printArrayItem
```

/**
 * 遍历对象数组，将对象的每个属性输出成字符串，不递归遍历对象属性的子属性
 * @param list 待遍历的数组
 * @returns 遍历后拼装的字符串
 */
export declare function printArrayItem(list?: object[]): string;

```


## 如果你想请我喝一杯咖啡（Buy Me a Coffee）
<img src=".\\public\\wechat.jpg" height="360">
<img src=".\\public\\alipay.jpg" height="360">
