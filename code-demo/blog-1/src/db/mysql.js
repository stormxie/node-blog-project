const {MYSQL_CONF} = require('../config/db')
const mysql = require('mysql')
// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)
// 开始连接
con.connect()

const exec = sql => {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if(err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}
module.exports = {
    exec
}