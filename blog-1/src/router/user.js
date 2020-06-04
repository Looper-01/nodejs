/*
 * @Description: user router
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-04 23:14:01
 * @FilePath: \nodejs\blog-1\src\router\user.js
 * @Url:
 */
const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleUserRouter = (req, res) => {
  const method = req.method;
  const path = req.path;

  // 登录
  if (method === "POST" && path === "/api/user/login") {
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then((data) => {
      if (data.username) {
        // 操作cookie
        res.setHeader("Set-Cookie", `username=${username};path=/`);
        return new SuccessModel("登录成功");
      }
      return new ErrorModel("登录失败");
    });
  }

  // 登录验证测试
  if (method === "GET" && req.path === "/api/user/login-test") {
    if (req.cookie.username) {
      return Promise.resolve(
        new SuccessModel({ username: req.cookie.username })
      );
    }
    return Promise.resolve(new ErrorModel("尚未登录"));
  }
};

module.exports = handleUserRouter;
