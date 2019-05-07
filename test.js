const tape = require('tape')
const app = require('./app.js')
const Client = require('node-ssdp').Client
const res = require('request')
tape('Test SSDP', function (t) {
  const client = new Client()
  client.on('response', function (headers, statusCode, rinfo) {
    res(`${headers.LOCATION}`, function (_error, response, body) {
      console.log('body:', body)
    })
    client.stop()
  })
  client.search('ssdp:all')
  t.end()
})
