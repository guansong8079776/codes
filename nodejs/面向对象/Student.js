// 定义学生类
module.exports = class Student {
    // constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空
    // 的constructor方法会被默认添加。
    constructor(name = '未知', age = 20) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        // 反引号内可以嵌套变量
        console.log(`大家好我是${this.name},今年${this.age}岁`);
    }
}



// // class 实际是个语法糖，是构造的另一种写法而已 Point === Point.prototype.constructor // true
// console.log(typeof Student);    //function
// console.log(Student);           // [Function: Student]
// //创建对象
// const stu1 = new Student("李小白", "22");
// stu1.sayHi();

// 另外，类的内部所有定义的方法，都是不可枚举的（ non-enumerable ）。
// class Point {
// constructor(x, y) {
// // ...
// }
// toString() {
// // ...
// }
// }
// Object.keys(Point.prototype)
// // []
// Object.getOwnPropertyNames(Point.prototype)
// // ["constructor","toString"]
// 上面代码中，toString方法是Point类内部定义的方法，它是不可枚举的。这一点与 ES5 的行为不一致