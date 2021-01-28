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

app.listen(port, () => {
  console.log(`Server Started (PORT ${config.port})`)
  console.log(`Server Version ${version}`)
})

// HTTPS 서버
option
  ? https.createServer(option, app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    })
  : undefined;

// HTTPS 서버로 요청을 전달하여 자동으로 SSL 연결을 해주는 HTTP 서버
// SSL option 이 존재하지 않는 development 단계에서는 그냥 HTTP 서버만이 존재하게 됩니다.
option
  ? http
      .createServer(function(req, res) {
        res.writeHead(301, {
          Location: "https://" + req.headers["host"] + req.url
        });
        res.end();
      })
      .listen(80)
  : http.createServer(app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });