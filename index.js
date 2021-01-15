/*
WEB CORE
해당 WEB CORE의 저작권은 norhu1130 본인이 소유하고있습니다.
norhu1130의 허가없이 재배포등을 하실경우 불이익이 생길수 있습니다.
*/
const express = require('express');
const app = express();
const config = require('./config.json')
const port = config.port;

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.listen(port, () => {
    console.log(`Server Started (PORT ${config.port})`);
});
