/*
 * @Description: steam test1
 * @Author: Looper
 * @Date: 2020-06-12 23:34:16
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-12 23:46:25
 * @FilePath: /nodejs/stream-test/test1.js
 */

// 标准输入stdin 输出 stdout 是Linux基本属性
// process.stdin.pipe(process.stdout); // 演示管道输入输出

// http中req也是stream形式
// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.method === "POST") {
//     req.pipe(res); // 最主要
//   }
// });
// server.listen(8000);

// stream 演示
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const method = req.method;
  if (method === "GET") {
    const filename = path.resolve(__dirname, "data.txt");
    var stream = fs.createReadStream(filename);
    stream.pipe(res); // 将res作为stream的dest
  }
});
server.listen(8000);
