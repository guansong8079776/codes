// 1. 函数的默认值
function sum(x = 10, y = 20) {
    return x+y;
}

let z = sum(); // 没给形参赋值，形参保持默认值，结果为30
console.log(z);
z = sum(30);    // 给第一个形参赋值，结果 ：50
console.log(z);
z = sum(40,50); // 都赋值，结果为：90
console.log(z);

//2. 与解构一起使用
function fun({x =10, y = 20}) {
    return x + y;
}
// 当实参为对象时，形参才会从对象中解构赋值
let v = fun({x:20,y:30});
console.log(v);
v = fun(1,2); // 实参与形参不匹配
console.log(v); // 30