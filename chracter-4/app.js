/*
 * @Description: 
 * @Author: Looper
 * @Date: 2020-05-29 22:53:05
 * @LastEditors: Looper
 * @LastEditTime: 2020-05-29 23:02:22
 * @FilePath: /nodejs/chracter-4/app.js
 * @Url: 
 */
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  console.log("req.method:", req.method);

  const url = req.url;
  console.log("req.url:", url);

  req.query = querystring.parse(url.split("?")[1]);
  console.log("req.query", JSON.stringify(req.query));

  res.end(JSON.stringify(req.query));
});

server.listen(8000)