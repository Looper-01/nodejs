/*
 * @Description: user router
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-03 23:48:35
 * @FilePath: /nodejs/blog-1/src/router/user.js
 * @Url: 
 */
const { loginCheck } = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    return result.then(data => {
      if (data.username) {
        return new SuccessModel("登录成功");
      }
      return new ErrorModel("登录失败");
    })
  }
}

module.exports = handleUserRouter;
