const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;

let jscode = fs.readFileSync("./source/2.js", {
    encoding: "utf-8"
});
let ast = parse(jscode);


const visitor =
{
    "StringLiteral"(path){
        //通过get获取container里的属性
        let value = path.get('value');
        console.log(value.node); //输出字符串
        path.get('source').remove();
        //delete path.node.source;
    }

    //     "StringLiteral"({node}){
    //     //通过get获取container里的属性
    //     node.source=null;
    // }
}
traverse(ast, visitor);
let {code} = generator(ast,opts = {jsescOption:{"minimal":true}});//opts中文的时候必须加
console.log(code);
fs.writeFileSync("./source/2_new.js", code);