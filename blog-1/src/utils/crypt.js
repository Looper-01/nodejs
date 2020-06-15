/*
 * @Description:加密
 * @Author: Looper
 * @Date: 2020-06-15 23:13:28
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-15 23:21:54
 * @FilePath: /nodejs/blog-1/src/utils/crypt.js
 * @Url:
 */

const crypto = require("crypto");
// 密匙
const SECRET_KEY = "iAMlOOPER123!@#";

// md5加密
function md5(content) {
  let md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
}

// 加密函数
function generatePassword(password) {
  const str = `password=${password}$key=${SECRET_KEY}`;
  return md5(password);
}

// console.log(generatePassword("123"));

module.exports = {
  generatePassword
}
