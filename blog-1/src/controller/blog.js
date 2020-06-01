/*
 * @Description: 博客controller
 * @Author: Looper
 * @Date: 2020-06-01 22:20:47
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-01 22:55:14
 * @FilePath: /nodejs/blog-1/src/controller/blog.js
 */

const { exec } = require('../db/mysql');
const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author = '${author}'`
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by id desc;`
  return exec(sql);
}

const getDetail = (id) => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: "2020-05-30",
    author: "zhangsan"
  }
}

const newBlog = (blogData = {}) => {
  console.log("new blog data", blogData)
  return {
    id: 3
  }
}

const updateBlog = (id, blogData) => {
  console.log("update blog", id, blogData)
  return true;
}

const deleteBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}