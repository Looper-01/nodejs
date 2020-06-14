/*
 * @Description: user controller
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-14 22:28:41
 * @FilePath: /nodejs/blog-1/src/controller/user.js
 * @Url: 
 */
const { exec, escape } = require("../db/mysql");

const login = (username, password) => {
  username = escape(username);
  password = escape(password);
  const sql = `select username,realname from users where username = '${username}' and password = '${password}';`
  return exec(sql).then(rows => {
    return rows[0] || {};
  })
}

module.exports = { login }