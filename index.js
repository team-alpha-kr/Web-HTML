/*
EXPRESS SERVER CORE
해당 express 코드의 저작권은 chul0721이 소유하고 있습니다.
무단 복제 및 사용을 금합니다.
WEB CORE
해당 WEB CORE의 저작권은 norhu1130 본인이 소유하고있습니다.
norhu1130의 허가없이 재배포등을 하실경우 불이익이 생길수 있습니다.
*/

const express = require('express')
const app = express()

const engines = require('consolidate')
const createError = require('http-errors')

const config = require('./config.json')
const port = config.port || 3000
const version = '0.0.2'

const router = require('./router/main')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use('/public', express.static('public'))

app.use(router)

app.listen(port, () => {
  console.log(`Server Started (PORT ${config.port})`)
  console.log(`Server Version ${version}`)
})
