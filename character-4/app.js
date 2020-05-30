/*
 * @Description:
 * @Author: Looper
 * @Date: 2020-05-29 22:53:05
 * @LastEditors: Looper
 * @LastEditTime: 2020-05-29 23:04:50
 * @FilePath: /nodejs/character-4/app.js
 * @Url:
 */
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];
  const query = querystring.parse(url.split("?")[1]);
  res.setHeader("Content-Type", "application/json");

  const resData = {
    method,
    url,
    path,
    query
  }

  if (method === "GET") {
    res.end(JSON.stringify(resData));
  }

  if (method === "POST") {
    let postData = "";
    req.on("data", chunk => {
      postData += chunk.toString();
    })
    req.on("end", () => {
      resData.postData = postData;
      res.end(JSON.stringify(resData))
    })
  }
});

server.listen(8000)