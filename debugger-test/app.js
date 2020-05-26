/*
 * @Description:
 * @Author: Looper
 * @Date: 2020-05-26 23:09:47
 * @LastEditors: Looper
 * @LastEditTime: 2020-05-26 23:13:48
 * @FilePath: /nodejs/debugger-test/app.js
 * @Url:
 */

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end("<h1>hello world</h1>");
})

server.listen(3000, () => {
  console.log('listening on port: 3000');
})