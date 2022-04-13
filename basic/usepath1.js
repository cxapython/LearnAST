const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./extra/useTraverseExtDemo.js", {
    encoding: "utf-8"
});

let ast = parser.parse(jscode)
const updateParamNameVisitor = {
    Identifier(path){
        if(path.node.name ==this.paramName){
            path.node.name= "c"
        }
        console.log(path);
        path.stop();
    }
};

const visitor = {
    FunctionExpression(path) {
        const paramName = path.node.params[0].name;
        path.traverse(updateParamNameVisitor,{
            paramName
        })
    }
}

//traverse(ast, visitor)

//由上代码可看出path对象包含当前的node节点，而node节点就是ast explorer网站中解析的节点结构。
// node节点是构成ast的原料。
// path.node当前节点加上其他节点（父级节点，同级节点）再加上一些方法共同构成了path对象。
