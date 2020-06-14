/*
 * @Description: mysql
 * @Author: Looper
 * @Date: 2020-06-01 10:44:35
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-14 22:27:49
 * @FilePath: /nodejs/blog-1/src/db/mysql.js
 * @Url: 
 */
const mysql = require("mysql");
const { MYSQL_CONF } = require("../config/db");

const con = mysql.createConnection(MYSQL_CONF);
con.connect();

// 统一执行的sql函数
function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        console.error(err)
        reject(err);
        return;
      }
      resolve(result);
    })
  });
}

module.exports = {
  exec,
  escape: mysql.escape
}