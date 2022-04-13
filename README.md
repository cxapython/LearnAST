# LearnAST
AST学习笔记

常见语法节点
```
Identifier  ==>  标识符
Programs  ==>  根节点
Functions  ==>  函数节点
Literals  ==>  字面量
    ├── RegExpLiteral  ==>  正则型字面量，如：str.replace(/a/g, 1);
    ├── StringLiteral  ==>  字符型字面量，如：var a = 'abc';
    ├── BooleanLiteral  ==>  布尔型字面量，如：Boolean(false);
    └── NumericLiteral  ==>  数字型字面量，如：var a = 1;

Statements  ==>  语句节点
    ├── ExpressionStatement  ==>  表达式语句，如：console.log(1);
    ├── BlockStatement  ==>  块语句，如：if (true){};
    ├── EmptyStatement  ==>  空语句，如：if (true){};
    ├── BreakStatement  ==>  中断语句，如：break;
    └── ForStatement  ==>  for循环语句，如：for(;;){};

Declarations  ==>  声明语句节点
    ├── FunctionDeclaration  ==>  函数声明，如：function aaa(){};
    └── VariableDeclaration  ==>  变量声明，如：let a = 1;

Expressions  ==>  表达式节点
    ├── FunctionExpression  ==>  函数表达式，如：(function(){console.log(1);})();
    ├── BinaryExpression  ==>  二项式表达式，如：1 == 2;
    ├── AssignmentExpression  ==>  赋值表达式，如：a = window;
    ├── ConditionalExpression  ==>  三元运算表达式，如：1 > 2 ? 1 : 2;
    └── CallExpression  ==>  调用表达式，如：alert(1);
```