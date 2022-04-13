const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default

let foo = t.identifier("foo")
let a = t.identifier("a")
let b=t.identifier("b")
let c=t.identifier("c")
let binExpr2 = t.binaryExpression("+",a,b)

//t.variableDeclaration(kind, declarations);
//kind: "var" | "let" | "const" (required)
//declarations: VariableDeclarator
let retSta1 = t.variableDeclaration("let" ,[
      //t.variableDeclarator(id, init);
      t.variableDeclarator(c, t.numericLiteral(3)),
]);
let retSta2 = t.returnStatement(t.binaryExpression("+",binExpr2,c))
let blosta= t.blockStatement([retSta1,retSta2])

//第一参数函数名，默认null表示匿名函数,后面是参数列表
//第三个参数函数体
let funcExpr = t.functionExpression(foo,[a,b],blosta)
let code = generator(funcExpr).code
console.log(code)

//生成内容
// function foo(a, b) {
//   let c = 3;
//   return a + b + c;
// }