// 导入SmallStudent
const SmallStudent = require("./面向对象/SmallStudent");

// 导入系统的 http 模块
const http = require("http");

// 使用http模块，创建一个http服务，监听8888端口
http.createServer((request, response) => {

    response.writeHead(200, { "Content-type": "text/plain;charset=utf-8" });

    let stu = new SmallStudent("张飞小时候", 12, 60);
    // response.write(stu.name, stu.age);
    // 结束输出，将响应流返回给客户端
    // 开始向客户端输出数据
    response.end(stu.name);
}).listen(8888);

console.log("开始启动服务，监听8888端口：");