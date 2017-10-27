// let 声明块级变量
var x = 10;
let y = 20;
console.log(x);
// 1. 作用域的区别
function fun1() {
    // let 声明的变量，只能用在本块
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
fun1();

function fun2() {
    // var 声明的变量，作用域为本函数
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
fun2();

// 2. 覆盖
function fun3(arg1) {
    // 局部变量会覆盖掉形参
    var arg1 = 20;
    console.log(arg1);
}
function fun4(arg1) {
    // 报错，不允许重复声明arg1
    let arg1 = 20;
    console.log(arg1);
}

// 3. 变量提升
function fun5() {
    // 不会报错，因为会优先处理 变量声明语句，然后执行其他语句
    x = 20;
    var x;
    console.log(x);
}
function fun6() {
    // 报错，未定义的变量x
    x = 20;
    let x;
    console.log(x);
}

