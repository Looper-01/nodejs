/*
 * @Description: 博客路由
 * @Author: Looper
 * @Date: 2020-05-31 21:14:03
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-04 23:05:29
 * @FilePath: \nodejs\blog-1\src\router\blog.js
 */
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

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
    // mock,待开发登录时再改成真实数据
    req.body.author = "zhangsan";
    const result = newBlog(req.body);
    return result.then((data) => {
      return new SuccessModel(data);
    });
  }

  // 更新博客
  if (method === "POST" && path === "/api/blog/update") {
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
    const author = "zhangsan"; // 模拟数据
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
