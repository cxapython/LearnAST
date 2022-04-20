// 同级的节点
const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const {ConditionalExpression} = require("@babel/traverse/lib/path/inference/inferers");
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./source/pathOperatorDemo.js", {
    encoding: "utf-8"
});


let ast = parser.parse(jscode)

visitor = {
    ReturnStatement(path) {
        const operator = path.container?.[0]?.argument?.operator
        //获取同级节点的数组
        //console.log(path.container)
        //判断是否有同级节点没有返回false
        //console.log(path.inList)
        //获取当前节点在容器的索引
        console.log(path.key)
        //获取容器名
        console.log(path.listKey)
        //获取同级节点的path对象,参数是下标
        sibingPath_ = path.getSibling(0)
        console.log(sibingPath_.toString())
        if (operator === "*") {
            //在container中当前节点前插入节点
            path.parentPath.unshiftContainer('body', [
                t.expressionStatement(t.stringLiteral('Before1')),
                t.expressionStatement(t.stringLiteral('Before2'))]);
            //在container中当前节点后插入节点
            path.parentPath.pushContainer('body', t.expressionStatement(t.stringLiteral('After')));

        }

    }, ConditionalExpression(path) {

        console.log(path.inList)
    }
}
traverse(ast, visitor)
console.log("======new code=====")
console.log(generator(ast).code)