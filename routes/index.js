var express = require('express')
var router = express.Router()
const fs = require('fs')
/* GET home page. */
router.get('/upnp/device.sxml', function (req, res, next) {
  console.log(req.url)
  res.write(fs.readFileSync(`./ssdp/upnp/device.sxml`))
  res.end()
})

module.exports = router
