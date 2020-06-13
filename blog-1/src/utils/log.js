/*
 * @Description:log
 * @Author: Looper
 * @Date: 2020-06-13 21:51:48
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-13 22:03:40
 * @FilePath: /nodejs/blog-1/src/utils/log.js
 */

const fs = require("fs");
const path = require("path");

// 写日志
function writeLog(writeStream, log) {
  writeStream.write(log + "\n"); // 关键代码
}

// 生成stream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, "../", "../", "logs", fileName);
  const writeStream = fs.createWriteStream(fullFileName, {
    flag: "a", // append
  });
  return writeStream;
}

// 写访问日志
const accessWriteStream = createWriteStream("access.log");
function access(log) {
  writeLog(accessWriteStream, log);
}

// 写错误日志
const errorWriteStream = createWriteStream("error.log");
function error(log) {
  writeLog(errorWriteStream, log);
}

// 写事件日志
const eventWriteStream = createWriteStream("event.log");
function event(log) {
  writeLog(eventWriteStream, log);
}

module.exports = {
  access,
  error,
  event
}