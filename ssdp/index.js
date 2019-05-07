const Server = require('node-ssdp').Server
const uuidv = require('uuid/v1')
const ip = require('ip')
const fs = require('fs')
const server = new Server({ location: `http://${ip.address()}:3000/upnp/device.sxml`, udn: uuidv() })

exports.start = function () {
  // server.addUSN('urn:schemas-upnp-org:service:Transfer:1')
  server.addUSN('urn:schemas-upnp-org:service:Light:1')
  // server.addUSN('urn:schemas-upnp-org:service:Temperature:1')
  server.on('advertise-alive', function (headers) {
  })
  server.start()
}
exports.getxml = function () {
  return fs.readFileSync(`./ssdp/upnp/device.sxml`)
}
