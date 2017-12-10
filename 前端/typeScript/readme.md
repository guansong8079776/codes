## TypeScript
### 具有类型系统，且是JavaScript的超集。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。

## 安装TypeScript
有两种主要的方式来获取TypeScript工具：

1. 通过 *npm* （Node.js包管理器）

    > npm install -g typescript 

2. 创建第一个`TypeScript` 程序

   创建一个 `hello.ts` 文件，并键入以下代码

   ``` js
   function greeter(person) {
        return "Hello, " + person;
    }

    let user = "Jane User";
    const another = "GuanSir";
    document.body.innerHTML = greeter(user);
    ```
3. 编译 **ts** 代码,生成 ***js*** 文件
    > tsc hellow.ts
  编译完成后会生成  ***js***  文件,内容如下：
      ```js
      function greeter(person) {
        return "Hello, " + person;
    }
    var user = "GuanSir";
    var another = "GuanSir";
    document.body.innerHTML = greeter(user);```
4. 测试一个复杂点的例子 `student.ts` 并编译
    ``` TypeScript
    class Student {
          fullName: string; //属性
          // 构造函数，在构造函数的参数前使用public修饰，表名同时生成了同名的成员变量
          constructor(public firstName: string, public middleInitial: string, public lastName: string) {
              this.fullName = firstName + " " + middleInitial + " " + lastName;
          }
      }

      interface Person {
          firstName: string;
          lastName: string;
      }

      function greeter(person : Person) {
          return "Hello, " + person.firstName + " " + person.lastName;
      }

      let user = new Student("Jane", "M.", "User");

      document.body.innerHTML = greeter(user);
    ```
    编译后的文件 `Student.js` 如下
    ```js
      var Student = /** @class */ (function () {
      // 构造函数，在构造函数的参数前使用public修饰，表名同时生成了同名的成员变量
      function Student(firstName, middleInitial, lastName) {
          this.firstName = firstName;
          this.middleInitial = middleInitial;
          this.lastName = lastName;
          this.fullName = firstName + " " + middleInitial + " " + lastName;
      }
      return Student;
    }());
    function greeter(person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }
    var user = new Student("Jane", "M.", "User");
    document.body.innerHTML = greeter(user);
    ```

5. 编译后的js直接在html文件使用即可。
    ```html
    <script src="Student.js"></script>