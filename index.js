/*

EXPRESS SERVER CORE
해당 express 코드의 저작권은 chul0721이 소유하고 있습니다.
무단 복제 및 사용을 금합니다.

WEB CORE
해당 WEB CORE의 저작권은 norhu1130 본인이 소유하고있습니다.
norhu1130의 허가없이 재배포등을 하실경우 불이익이 생길 수 있습니다.

HTML(Views, Public)
해당 HTML의 저작권은 kms0219kms 본인이 소유하고 있습니다.
kms0219kms의 허가 없이 무단 복제 및 사용을 금합니다.
위 사항을 어길 시, 저작권법에 의거 처벌 받을 수 있습니다.

*/

const express = require('express')
const app = express()
const https = require('https') //http 모듈 대신 https 모듈을 사용합니다.
const fs = require('fs')

const router = require('./router/main')

const config = require('./config.json')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))
app.use('/views/api', express.static('public'))

app.use(router)

app.disable('x-powered-by');

const httpPort = config.web.port
const httpsPort = config.web.ssl_port

if (config.env.NODE_ENV == 'production') {
  // SSL 작동합니다.
  app.listen(httpsPort, () => {
    console.log(`=== PRODUCTION MODE ===\nport: ${httpsPort}`)
  })
}
else if (config.env.NODE_ENV == 'replit') {
  // repl 환경에서는 오류 방지를 위해 http 서버만 작동합니다
  app.listen(httpPort, () => {
    console.log(`=== Repl.it MODE ===\nport: ${httpPort}`)
  })
} else {
  // 개발모드에서는 http 서버만 작동합니다
  app.listen(httpPort, () => {
    console.log(`=== DEVELOPMENT MODE ===\nport: ${httpPort}`)
  })
}
