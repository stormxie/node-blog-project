const env = process.env.NODE_ENV  //环境参数
let MYSQL_CONF

if(env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        port: '3306',
        password: 'Abc123456',
        user: 'root',
        database: 'myblog'
    }
}
if(env === 'pro') {
    MYSQL_CONF = {
        host: 'localhost',
        prot: '3306',
        password: 'Mysql_2018',
        user: 'root',
        database: 'myblog'
    }
}

module.exports = {MYSQL_CONF}