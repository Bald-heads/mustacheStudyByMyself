export default function lookup(dataObj, keyName) {
    //功能是在dataObj对象中，寻找连续点符号的keyName属性
    if (keyName.indexOf(".") !== -1 && keyName !== ".") {
        //将点拆开
        let keys = keyName.split(".")
        //利用临时变量，用于周转一层层找下去
        let temp = dataObj
        for (let i = 0; i < keys.length; i++) {
            //每找到一层就进行替换
            temp = temp[keys[i]]
        }

        return temp
    }

    return dataObj[keyName]
}