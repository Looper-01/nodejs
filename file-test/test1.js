/*
 * @Description: file test
 * @Author: Looper
 * @Date: 2020-06-10 23:51:17
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-11 23:54:08
 * @FilePath: /nodejs/file-test/test1.js
 */

const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "data.txt"); // __dirname表示当前目录下
// 读取文件
// fs.readFile(fileName, (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   // data 是二进制类型，需要转换为字符串
//   console.log(data.toString());
// })

// 写入文件
// const content = "这是新写入的内容\n";
// const opt = {
//   flag: "a", // 追加写，覆盖写w
// };
// fs.writeFile(fileName, content, opt, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

// 判断文件是否存在
fs.exists(fileName, (exists) => {
  if (exists) {
    console.log(true);
    return;
  }
  console.log(false);
});
