import isArray from "lodash/isArray";
import forOwn from "lodash/forOwn";

/**
 * 遍历对象数组，将对的每个属性输出成字符串，不递归遍历对象属性的子属性
 */
export function printArrayItem(list?: object[]) {
    const log: string[] = [];
    if (isArray(list)) {
        list.map((item, index) => {
            log[index] = "{";
            forOwn(item, (value, key) => {
                log[index] += key + ": " + value + ", ";
            });
            log[index] += "}";

            return item;
        });
    }
    return log.toString();
}
