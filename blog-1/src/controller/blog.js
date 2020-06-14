/*
 * @Description: 博客controller
 * @Author: Looper
 * @Date: 2020-06-01 22:20:47
 * @LastEditors: Looper
 * @LastEditTime: 2020-06-14 22:32:18
 * @FilePath: /nodejs/blog-1/src/controller/blog.js
 */

const xss = require("xss");
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
  const sql = `select * from blogs where id = '${id}'`
  return exec(sql).then(rows => {
    return rows[0];
  })
}

const newBlog = (blogData = {}) => {
  const title = xss(blogData.title);
  console.log("title is ", title);
  const content = blogData.content;
  const author = blogData.author;
  const createTime = Date.now();

  const sql = ` insert into blogs(title,content,createtime,author)
    values ('${title}','${content}','${createTime}','${author}') `;
  return exec(sql).then(insertData => {
    console.log('insertData is ', insertData);
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData) => {
  const title = blogData.title;
  const content = blogData.content;
  const sql = `update blogs set title = '${title}',content = '${content}' where id = '${id}'`

  return exec(sql).then(updateData => {
    console.log('updateData is ', updateData);
    if (updateData.affectedRows > 0) {
      return true
    }
    return false;
  })
}

const delBlog = (id, author) => {
  // 这里面先不使用软删除
  const sql = `delete from blogs where id = '${id}' and author = '${author}';`;
  return exec(sql).then(deleteData => {
    if (deleteData.affectedRows > 0) {
      return true;
    }
    return false;
  })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}