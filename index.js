/*
WEB CORE
해당 WEB CORE의 저작권은 norhu1130 본인이 소유하고있습니다.
norhu1130의 허가없이 재배포등을 하실경우 불이익이 생길수 있습니다.
*/
const express = require('express');
const app = express();
const config = require('./config.json')
const port = config.port;
var https = require('https');
var fs = require('fs');
var engines = require('consolidate');
const createError = require('http-errors')
var version = '0.0.1'
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('404.html');
});
var sslOptions = {
  ca: fs.readFileSync('cert/ca_bundle.crt'),
  key: fs.readFileSync('cert/private.key'),
  cert: fs.readFileSync('cert/certificate.crt')
};
https.createServer(sslOptions, app).listen(443, function(){
  console.log('HTTPS Server Start PORT:' + 443);
});
app.listen(port, () => {
    console.log(`Server Started (PORT ${config.port})`);
    console.log(`Server Version ${version}`)
});
