const Client = require('node-ssdp').Client
const res = require('request')
const client = new Client()
client.on('response', function (headers, statusCode, rinfo) {
  res(`${headers.LOCATION}`, function (_error, response, body) {
    console.log('body:', body)
  })
  client.stop()
})
client.search('ssdp:all')
