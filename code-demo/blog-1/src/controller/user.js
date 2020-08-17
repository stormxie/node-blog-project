const loginCheck = (name, password) => {
    if(name === 'zhangsan' && password === 123) {
        return true
    } else {
        return false
    }
}

module.exports = {loginCheck}