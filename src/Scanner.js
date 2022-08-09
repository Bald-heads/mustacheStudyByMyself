//扫描器

export default class Scanner {
    constructor(templateStr) {
        //指针
        this.pos = 0
        //尾巴
        this.tail = templateStr
    }

    //走到指定内容无返回
    scan(tag) {
        if (this.tail.indexOf(tag) === 0) {
            this.pos += tag.length
            //改变尾巴
            this.tail = templateStr.substring(this.pos)
        }
    }

    //进行指针扫描，直到遇见指定内容，并返回结束之前的文字
    scanUtil(stopTag) {
        //记录开始的pos的值
        const pos_backup = this.pos
        while (!this.eos() && this.tail.indexOf(stopTag) !== 0) {
            this.pos++
            this.tail = templateStr.substring(this.pos)
        }

        return templateStr.substring(pos_backup, this.pos)
    }

    eos() {
        return this.pos >= templateStr.length
    }
}