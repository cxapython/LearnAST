const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./source/use_types1_Demo.js", {
    encoding: "utf-8"
});

let ast = parser.parse(jscode)
let visitor = {
    Declaration(path) {
        // //使用path.node.type可以获取当前类型
        // if (path.node.type == "FunctionDeclaration"&&path.node.id.name=="a") {
        //     console.log("in function declaration")
        //
        // }
        //t.isFunctionDeclaration(path.node)判断该节点是否是FunctionDeclaration.其第二参数opts可以传入一个对象
        if (t.isFunctionDeclaration(path.node)&&path.node.id.name=="a") {
            console.log("in function declaration")
        }

    }
}

traverse(ast, visitor)



//但是types的功能主要还是用来生成代码的看use_types_gen_code.js 文件