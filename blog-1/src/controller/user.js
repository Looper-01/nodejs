/*
 * @Description: user controller
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-03 23:47:28
 * @FilePath: /nodejs/blog-1/src/controller/user.js
 * @Url: 
 */
const { exec } = require("../db/mysql");

const login = (username, password) => {
  const sql = `select username,realname from users where username = '${username}' and password = '${password}';`
  return exec(sql).then(rows => {
    return rows[0] || {};
  })
}

module.exports = { login }