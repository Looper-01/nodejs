/*
 * @Description: 博客路由
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-07 18:38:53
 * @FilePath: /nodejs/blog-1/src/router/blog.js
 */
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 统一的登录验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(
      new ErrorModel("尚未登录！")
    );
  }
}

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const path = req.path;
  const id = req.query.id;

  // 博客列表
  if (method === "GET" && path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData);
    });
  }

  // 博客详情
  if (method === "GET" && path === "/api/blog/detail") {
    const result = getDetail(id);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // 新建博客
  if (method === "POST" && path === "/api/blog/new") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      return loginCheck;
    }

    req.body.author = req.session.username;
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // 更新博客
  if (method === "POST" && path === "/api/blog/update") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      return loginCheck;
    }

    const result = updateBlog(id, req.body);
    return result.then((val) => {
      if (val) {
        return new SuccessModel("更新博客成功");
      }
      return new ErrorModel("更新博客失败");
    });
  }

  // 删除博客
  if (method === "POST" && path === "/api/blog/delete") {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      return loginCheck;
    }

    const author = req.session.username;
    const result = delBlog(id, author);
    return result.then((val) => {
      if (val) {
        return new SuccessModel("删除博客成功");
      }
      return new ErrorModel("删除博客失败");
    });
  }
};

module.exports = handleBlogRouter;
