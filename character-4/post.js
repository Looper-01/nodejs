/*
 * @Description: post method request sample
 * @Author: Looper
 * @Date: 2020-05-29 23:15:51
 * @LastEditors: Looper
 * @LastEditTime: 2020-05-29 23:18:54
 * @FilePath: /nodejs/character-4/post.js
 */
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("content-type", req.headers["content-type"]);

    let postData = "";
    req.on("data", chunk => {
      postData += chunk.toString();
    })

    req.on("end", () => {
      console.log(postData);
      res.end("hello world");
    })
  }
})

server.listen(8001)