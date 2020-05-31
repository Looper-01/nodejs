const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: "2020-05-30",
      author: "zhangsan"
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: "2020-05-30",
      author: "lisi"
    },
    {
      id: 3,
      title: "标题C",
      content: "内容C",
      createTime: "2020-05-30",
      author: "wangwu"
    }
  ]
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