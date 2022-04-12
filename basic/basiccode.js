const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse")
const t = require("@babel/types")
const generator = require("@babel/generator").default
//基本代码
const jscode = fs.readFileSync("basic/demo.js",{
    encoding:"utf-8"
});

let ast = parser.parse(jscode) //将代码专成ast对象
let code = generator(ast,{"compact":true}).code;
//ast生成代码,第二参数可以指定生成的代码风格，比如compact表示压缩代码。
//generator可以生成部分节点的代码，不用非要到最后再使用。
fs.writeFile("basic/demonew.js",code,(err)=>{})