const http = require('http')
const serverHandle = require('../index')
const Port = 8000

const server = http.createServer(serverHandle)

server.listen(Port)
