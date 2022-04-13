const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./extra/useTraverseExtDemo.js", {
    encoding: "utf-8"
});

let ast = parser.parse(jscode)
//2.path中的方法
const visitor = {
    // 此二项表达式为a+b
    BinaryExpression(path) {
        const {node} = path
        const operator = node.operator
        if (operator === "+") {
            //这里将原来的a+b变成"10086
            //path.replaceWith(t.stringLiteral("10086"))
            //也可以使用valueToNode可以将字符串转换为节点
            path.replaceWith(t.valueToNode("10086"))
        }
    }, ReturnStatement(path) {
        const operator=path.container?.[0].argument?.operator
        if (operator === "*") {
            path.replaceWithMultiple([
                t.expressionStatement(t.valueToNode('replaceWithMultiple!')),
                t.returnStatement(),
            ])
            path.stop()
        }

    }
};
traverse(ast, visitor)
console.log(generator(ast).code)


// replaceWith 节点一换一
// replaceWithMultiple 节点多换一
// replaceInline 这个方法接收一个参数，当参数是数组的时候等同于replaceWithMultiple,当参数为非数组的时候等同于replaceWith.
// replaceWithSourceString 方法用字符串来替换节点