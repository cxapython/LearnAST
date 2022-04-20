const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = fs.readFileSync("./source/1.js", {
    encoding: "utf-8"
});
let ast = parse(jscode);


const visitor =
    {
        "Identifier|BinaryExpression"(path) {
            //path.evaluate，没有实参。返回是否成功和成功计算后的值。
            let {confident, value} = path.evaluate();
            // console.log(path.type, confident, value)
            if (confident) {
                //返回true的时候表示能进行eval运算
                // console.log(path.node);
                path.replaceInline(t.valueToNode(value))
            }
        },
    }
    
traverse(ast, visitor);
let {code} = generator(ast);
console.log(code);