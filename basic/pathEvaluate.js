// 分别是在当前节点的前后插入节点，如下：
const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const {ConditionalExpression} = require("@babel/traverse/lib/path/inference/inferers");
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./source/pathEvaluate.js", {
    encoding: "utf-8"
});


let ast = parser.parse(jscode)

visitor = {
    //通过https://astexplorer.net/，得知目标代码类型为CallExpression。
    "CallExpression"(path) {
        //可以直接执行代码，第一参数true表示可以计算，否则返回false，第二个值就是目标值。
        const {confident, value} = path.evaluate();

        confident && path.replaceInline(t.valueToNode(value))
    }
}
traverse(ast, visitor)
console.log(generator(ast).code)