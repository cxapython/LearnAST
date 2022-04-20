const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./source/useTraverseDemo.js", {
    encoding: "utf-8"
});

let ast = parser.parse(jscode)
//写法1：
//let visitor = {}
// visitor.FunctionDeclaration=function(path){
//     console.log("in function declaration")
// }
//
// visitor.CallExpression=function(path){
//     console.log("in call function")
// }

//写法2：
//可以指定enter和exit属性 表示操作的时机
// let visitor = {
//     FunctionDeclaration: {
//         enter(path) {
//             console.log("in function declaration")
//
//         }, exit(path) {
//             //操作节点完成的时候打印
//             console.log("end ")
//         }
//     }, CallExpression: {
//         enter(path) {
//             console.log("in call function")
//         }, exit(path) {
//             console.log("end ")
//         }
//     }
// }

//写法3:
//es6的写法，比较常用这种
let visitor = {
    FunctionDeclaration(path) {
        console.log("in function declaration")

    }, CallExpression(path) {
        console.log("in call function")
    }
}


//如果两个节点的操作一致，可以把方法名通过|连接。
let visitor2 = {
    "FunctionExpression|BinaryExpression"(path) {
        console.log("in Expression node")
    }
}

function func1(path) {
    console.log("in function 1")
}

function func2(path) {
    console.log("in function 2")
}

//如果把多个函数用于同一个节点,会按照enter参数列表的参数顺序执行对应方法
let visitor3 = {
    FunctionDeclaration:{
        enter:[func1, func2]
    }
}


traverse(ast, visitor) //visitor是个自定义的对象，然后给这个对象赋值属性，这里是FunctionDeclaration即函数声明。
let code = generator(ast).code;
fs.writeFile("./source/useTraverseDemoNew.js", code, (err) => {
})