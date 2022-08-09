import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

export default function parseArray(token, data) {
    //处理数组，结合renderTemplate实现递归
    //得到整体数据中要使用的部分
    let v = lookup(data, token[1])
    //定义结果字符串
    let resultStr = ""
    for (let i = 0; i < v.length; i++) {
        resultStr += renderTemplate(token[2], {
            ...v[i],
            '.': v[i]
        })
    }
    return resultStr
}