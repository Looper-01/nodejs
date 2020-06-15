/*
 * @Description: user controller
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-15 23:27:02
 * @FilePath: /nodejs/blog-1/src/controller/user.js
 * @Url: 
 */
const { exec, escape } = require("../db/mysql");
const { generatePassword } = require("../utils/crypt");

const login = (username, password) => {
  username = escape(username);
  // 生成加密密码
  password = generatePassword(password);
  password = escape(password); // 有了escape之后，sql中的password单引号可以去掉
  const sql = `select username,realname from users where username = ${username} and password = ${password};`
  return exec(sql).then(rows => {
    return rows[0] || {};
  })
}

module.exports = { login }