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
         console.log(parent.node.kind) //var let
        //获取path的子路径,使用 get方法,得到id节点
        let id = path.get('id');
        console.log(id.node.name); //a b
        path.get('extra').remove();
        //delete path.node.extra;
    }

    //     "StringLiteral"({node}){
    //     //通过get获取container里的属性
    //     node.extra=null;
    // }
}
traverse(ast, visitor);
let {code} = generator(ast,opts = {jsescOption:{"minimal":true}});//opts中文的时候必须加
console.log(code);
fs.writeFileSync("./source/2_new.js", code);