import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(templateStr, data) {
    //函数的功能是变成dom字符串
    //结果字符串
    let resultStr = ""
    for (let i = 0; i < templateStr.length; i++) {
        let token = templateStr[i]
        if (token[0] === "text") {
            resultStr += token[1]
        } else if (token[0] === "name") {
            resultStr += lookup(data, token[1])
        } else if (token[0] === "#") {
            resultStr += parseArray(token, data)
        }
    }
    return resultStr
}