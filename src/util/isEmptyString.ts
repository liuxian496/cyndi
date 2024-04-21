import isString from "lodash/isString";

/**
 * 检测是否是空字符串
 * @param 需要判断的值 {any}
 * @returns isString 是否是空字符串 {boolean}
 */
export function isEmptyString(str: unknown) {
    return isString(str) && str.trim() === "";
}
