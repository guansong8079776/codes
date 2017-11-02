// 导入，目前import / export 还是草案，并没有被node支持，只能通过babel进行转换后使用
// 执行命令 npm install --save-dev babel-cli babel-preset-es2015
// 详情请查看  package.json
import { firstName, lastName, year } from './page1';

console.log(firstName, lastName, year);