import Scanner from "./Scanner";
import nextTokens from "./nextTokens";

//将模板字符串变为数组
export default function parseTemplateToToken(templateStr) {
    let tokens = []
    //创建扫描器
    let scanner = new Scanner(templateStr)
    let words
    //让扫描器工作
    while (!scanner.eos()) {
        //收集之前的文字将他们推入数组中
        words = scanner.scanUtil("{{")
        if (words !== "") {
            tokens.push(["text", words])
        }
        //过双大括号
        scanner.scan("{{")
        //接着手机之前的文字
        words = scanner.scanUtil("}}")
        if (words !== "") {
            if (words[0] === "#") {
                tokens.push(["#", words.substring(1)])
            } else if (words[0] === "/") {
                tokens.push(["/", words.substring(1)])
            } else {
                tokens.push(["name", words])
            }
        }
        //接着过双大括号
        scanner.scan("}}")
    }
    return nextTokens(tokens)
}
