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

const createError = require('http-errors')

const router = require('./router/main')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.use(router)

const httpPort = 80
if (process.env.NODE_ENV === 'production') {
  // 프로덕션 환경일 경우 https 서버로 실행합니다
  const sslOptions = {
    //1. PEM을 사용하여 인증하는 경우(cert, ca, key파일을 사용하여 인증하는 경우)
  //확장자명이 .pem인 경우도 있습니다.
    ca: fs.readFileSync('./ca_bundle.crt'),
    key: fs.readFileSync('./private.key'),
    cert: fs.readFileSync('./certificate.crt'),
  }

/*
//이 부분에 router등 설정을 해주면 됩니다.
*/

const httpsPort =  443
https.createServer(sslOptions, app, (req, res) => {
  //console.log('필요한 코드 넣기');
}).listen(httpsPort, () => {
  console.log('https 서버 포트: ' + httpsPort);
});

// set up plain http server
const httpRedirecter = express()

// set up a route to redirect http to https
httpRedirecter.get('*', (req, res) => {  
  res.redirect('https://' + req.headers.host + req.url)

  // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
  // res.redirect('https://example.com' + req.url);
})

httpRedirecter.listen(httpPort, () => {
  console.log(`port: ${httpPort}`)
})

} else {
  // 개발모드에서는 http 서버만 작동합니다
  app.listen(80, () => {
    console.log(`=== DEVELOPMENT MODE ===\nport: ${httpPort}`)
  })
}
