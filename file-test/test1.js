/*
 * @Description: file test
 * @Author: Looper
 * @Date: 2020-06-10 23:51:17
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-10 23:54:54
 * @FilePath: /nodejs/file-test/test1.js
 */

const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "data.txt"); // __dirname表示当前目录下
fs.readFile(fileName, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  // data 是二进制类型，需要转换为字符串
  console.log(data.toString());
})