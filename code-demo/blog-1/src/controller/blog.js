const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1597210356927,
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1597210446310,
            author: '李四'
        }
    ]
}

const getDetail = id => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1597210356927,
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1597210446310,
            author: '李四'
        }
    ]
}
const newBlog = (blogData={}) =>{
    return {
        id: 3,
        blogData,
    }
}
const updateBlog = (id, blogData = {}) => {
    console.log(id, blogData)
    return true
}
const delBlog = id => {
    if(id) {
        return true
    } else {
        return false
    }
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}