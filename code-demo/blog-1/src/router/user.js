const {loginCheck} = require("../controller/user")
const { ErrorModel, SuccessModel } = require("../model/resModel")


const handleUserRouter = (req, res) => {
    const method = req.method
    const name = req.body.name
    const password = req.body.password
    if (method === "POST" && req.path === "/api/user/login") {
        const result = loginCheck(name, password)
        if(result) {
            return new SuccessModel({})
        }
        return new ErrorModel('密码或账号错误')
    }
}

module.exports = handleUserRouter