//父级的path
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
    ArrowFunctionExpression(path) {
        //获取父级path
        //console.log(path.parentPath.toString())
        //根据条件,一直往上找符合属性类型为VariableDeclaration的父path,也就是从 let obj= 开始所有代码
        //find查找时包含当前节点。
        //targetParentPath=path.find((x)=>(x.isVariableDeclaration()))
        targetParentPath = path.findParent((x) => (x.isVariableDeclaration()))

        console.log(targetParentPath.toString())

    }, BinaryExpression(path) {
        const {node} = path
        const operator = node.operator
        if (operator === "*") {
            //向上查找与当前节点最接近的父函数
            //这里就是找到mul属性对应的函数
            let functionParent = path.getFunctionParent()
            console.log(functionParent.toString())
            //查找Statement类型的父节点 ，这里最近的就是ReturnStatement，即return a*b。
            let statementParent = path.getStatementParent()
            console.log(statementParent.toString())
        }
    }
}
traverse(ast, visitor)
// console.log(generator(ast).code)