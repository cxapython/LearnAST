const fs = require("fs");
const parser = require("@babel/parser")
const traverse = require("@babel/traverse").default
const t = require("@babel/types")
const generator = require("@babel/generator").default
const jscode = fs.readFileSync("./source/useTraverseExtDemo.js", {
    encoding: "utf-8"
});

let ast = parser.parse(jscode)
//2.path中的方法
const visitor = {
    // 此二项表达式为a+b
    BinaryExpression(path) {
        const {node} = path
        const operator = node.operator
        if (operator === "+") {
            const letName = node.left.name; //left就是这个表达式左边的值，name属性是变量a
            const rightName = node.right.name; //right就是这个表达式右边的值，name属性是变量b
            console.log("====")
            console.log(letName)
            console.log(operator)
            console.log(rightName)
            console.log("====")
            //得到子节点的path对象
            let childPath = path.get("left") //获取左子节点的path对象
            //获取子节点path对象的node属性，其他的操作方式和操作上面的path一样了
            console.log("left",childPath.node.name)
            childPath = path.get("right") //获取右子节点的path对象
            console.log("right",childPath.node.name)
             //判断字节的类型
            console.log("child path type isIdentifier?",childPath.isIdentifier())
            console.log("child path type isNumericLiteral?",childPath.isNumericLiteral())
            //节点转为代码,可以随时将当前节点转为代码，不一定是整个ast对象。
            //下面三种方式是等价的
            let pathCode=generator(path.node).code
            pathCode=path+""
            pathCode=path.toString()
            console.log("node code=>",pathCode)

        }
        else if(operator==="*"){
            path.node.left=t.numericLiteral(100);
            path.node.right=t.numericLiteral(200);
            //替换节点的属性,将之前的a*b替换为100*200了, 其他替换方式看replaceNode.js
            console.log(path.toString())
        }
    }
};
traverse(ast, visitor);
