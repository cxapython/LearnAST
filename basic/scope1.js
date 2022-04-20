const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./source/scopeDemo.js", {
    encoding: "utf-8"
});


let ast = parser.parse(jscode)
visitor = {
    Identifier(path) {
        if (path.node.name === "c") {
            //path.scope.block 获取标识符的作用域
             //由于返回的是node对象，所以需要用generator生成code
            console.log('当前标识符c所在作用域源码:\n',generator(path.scope.block).code)
        }
    }, FunctionDeclaration(path) {
        //获取函数的作用域需获取其父级的作用域,这里就一个函数demo，如果和上面一样调用会获取函数本身
        console.log('当前函数所在作用域源码:\n',generator(path.scope.parent.block).code + '')

    }, FunctionExpression(path) {
        //接收一个字符串并获取其的绑定。 如果这里传的值是未定义的，或者是当前节点引用不到的则会返回undefined。
        //局部变量与全局变量重名时优先使用局部变量，返回一个binding构造函数的实例。
		console.log('当前节点源码:\n',path + '')
		console.log('当前标识符a对应作用域中被引用的次数为:\n',path.scope.getBinding('a').references)
		console.log('当前标识符a对应作用域的源码为:\n',path.scope.getBinding('a').scope.path + '')
		console.log('--------------------------------------')

    }
}
traverse(ast, visitor)


//path.scope.getBinding获取Binding对象
// Binding中的几个关键属性：
// Identifier:就是a标识符的node对象
// path：就是a标识符的path对象
// kind：这里值为param,代表是一个参数，其他类型hoisted 提升，var 变量， local 内部
// referenced:表示当前标识符是否被引用
// references:表示当前标识符被引用的次数
// constant：是否是常量
// scope：作用域


