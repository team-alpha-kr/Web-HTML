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
var https = require('https'); //http 모듈 대신 https 모듈을 사용합니다.
var fs = require('fs');

const engines = require('consolidate')
const createError = require('http-errors')

const config = require('./config.json')
const port = config.port || 3000
const version = require('./package.json').version

const router = require('./router/main')

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use('/public', express.static('public'))

app.use(router)

var sslOptions = {
  //1. PEM을 사용하여 인증하는 경우(cert, ca, key파일을 사용하여 인증하는 경우)
  //확장자명이 .pem인 경우도 있습니다.
  ca: fs.readFileSync('ca체인 루트/CA파일.crt'),
  key: fs.readFileSync('키 파일 루트/키파일.key'),
  cert: fs.readFileSync('인증서 경로/인증서 이름.crt'),
};

/*
//이 부분에 router등 설정을 해주면 됩니다.
*/

https.createServer(sslOptions, server, (req, res) => {
  console.log('필요한 코드 넣기');
}).listen(443, () => {
  console.log('서버 포트: 443 ...');
});
