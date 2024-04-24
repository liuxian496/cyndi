import isString from "lodash/isString";
import { isEmptyString } from "./isEmptyString";

/**
 * 获取控件css前缀
 * @param componentName 控件名称 {string}
 * @param customizePrefix 用户自定义前缀 {string}
 * @param defaultPrefix 默认前缀 {string}
 * @returns prefix 控件css类前缀 {string}
 */
export function getPrefixNs(
    componentName: string,
    customizePrefix?: string,
    defaultPrefix = "cyndi"
): string {
    return isString(customizePrefix) && !isEmptyString(customizePrefix)
        ? customizePrefix + "-" + componentName
        : `${defaultPrefix}-${componentName}`;
}
