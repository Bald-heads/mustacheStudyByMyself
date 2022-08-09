export default function nextTokens(tokens) {
    //结果数组
    let nextToken = []
    //定义栈结构存放tokens小数组
    let sections = []
    //利用引用类型值特点创建收集器 并让她天生指向结果数组
    let collector = nextToken
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]) {
            case "#":
                //收集器存放tokens
                collector.push(token)
                //遇到 # 号进行压栈
                sections.push(token)
                //接下来收集器换为token下标为2的项，实现token的嵌套
                collector = token[2] = []
                break
            case "/":
                //遇到 / 进行弹栈
                sections.pop()
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nextToken
                break
            default:
                collector.push(token)
        }
    }
    return nextToken
}