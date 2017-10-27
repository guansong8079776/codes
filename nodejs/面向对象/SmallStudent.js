// 导入Student类
const Stu = require("./Student");
// 继承
module.exports = class SmallStudent extends Stu {
    constructor(name = '小二郎', age = 15, score) {
        // 调用福父类的构造方法
        super(name, age);
        this.score = score;
    }
}

// var ss = new SmallStudent();
// // 可以直接使用继承的方法
// ss.sayHi();
