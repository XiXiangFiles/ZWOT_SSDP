const Client = require('node-ssdp').Client
const res = require('request')
const process = require('process')
const fs = require('fs')
const filename = process.argv[2]
const pidusage = require('pidusage')
const now = require('date-now')
const client = new Client()
if (filename) {

} else {
  console.log('please input filename')
  process.exit()
}
async function saveLog () {
  pidusage(process.pid, function (_err, stats) {
    try {
      console.log(`${filename}.csv`, `${stats.cpu},${stats.memory}\n`)
      fs.appendFileSync(`${filename}.csv`, `${stats.cpu},${stats.memory}\n`)
    } catch (e) {
      fs.writeFileSync(`${filename}.csv`, `${stats.cpu},${stats.memory}`)
      console.log(`${filename}.csv`, `${stats.cpu},${stats.memory}\n`)
    }
  })
}
let timeup
client.on('response', function (headers, statusCode, rinfo) {
  // res(`${headers.LOCATION}`, function (_error, response, body) {
  //   console.log('body:', body)
  // })
  saveLog()
  client.stop()
  timeup = now()
})
client.search('ssdp:all')
saveLog()
setInterval(() => { if ((timeup + 500) < now()) { process.exit() } }, 10)
