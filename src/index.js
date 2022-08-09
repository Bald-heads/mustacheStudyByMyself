import parseTemplateToToken from "./parseTemplateToToken";
import renderTemplate from "./renderTemplate";

window.TemplateEngine = {
    render(templateStr, data) {
        //调用parseTemplateToToken函数，让模板字符串转换为tokens数组
        let tokens = parseTemplateToToken(templateStr)
        //再由渲染函数结合data的数据整合成模板字符串
        let domStr = renderTemplate(tokens, data)
        return domStr
    }
}