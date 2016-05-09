const net = require('net')
const fs = require('fs')

const HOST = '0.0.0.0'
const PORT = 8000

function onRequest(socket) {
    console.log('Client connected...')
    socket.pipe(fs.createWriteStream('img' + new Date().getTime()))
}

net.createServer(onRequest).listen(PORT, HOST)
