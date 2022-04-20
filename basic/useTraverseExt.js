const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./source/useTraverseExtDemo.js", {
    encoding: "utf-8"
});

let ast = parser.parse(jscode)
const updateParamNameVisitor = {
    Identifier(path){
        //节点名为a的时候修改
        if(path.node.name ==this.paramName){
            path.node.name= "c"
        }
    }
};

//如果想在某一个范围内修改代码可以使用下面方式。
//下面的代码是将obj对象的add和mul属性里的a改为c。retval的a保持不变
const visitor = {
    FunctionExpression(path) {
        //path.node可以表示当前的节点,其params属性表示参数，这里两个参数a和b，我们只改变a，然后获取a节点的name属性
        const paramName = path.node.params[0].name;
        path.traverse(updateParamNameVisitor,{
            //这里传入的对象，可以在updateParamNameVisitor通过this引用。
            paramName
        })
    }
}

traverse(ast, visitor) //visitor是个自定义的对象，然后给这个对象赋值属性，这里是FunctionDeclaration即函数声明。
let code = generator(ast).code;
fs.writeFile("./source/useTraverseExtDemoNew.js", code, (err) => {
})