const net = require('net')
const fs = require('fs')
const os = require('os')

const HOST = '0.0.0.0'
const PORT = 8000

function getNetworkIP() {
  return os.networkInterfaces().wlan0[0].address;
}

function onRequest(socket) {
  console.log('Client connected...')
  const timestamp = new Date().getTime()
  socket.pipe(fs.createWriteStream('images/img' + timestamp + '.jpg'))
}

if (!fs.existsSync('images')) {
  fs.mkdirSync('images');
}

net.createServer(onRequest).listen(PORT, HOST)
console.log('Server listening on ' + getNetworkIP() + ':' + PORT)