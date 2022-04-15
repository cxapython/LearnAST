//path.insertBefore
//path.insertAfter
// 分别是在当前节点的前后插入节点，如下：
const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const {ConditionalExpression} = require("@babel/traverse/lib/path/inference/inferers");
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./extra/useTraverseExtDemo.js", {
    encoding: "utf-8"
});


let ast = parser.parse(jscode)

visitor = {
    ConditionalExpression(path){
        path.insertBefore(t.valueToNode("before"))
        path.insertAfter(t.valueToNode("after"))

    }
}
traverse(ast, visitor)
console.log(generator(ast).code)