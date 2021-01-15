const express = require('express');
const app = express();
const config = require('./config.json')
const port = config.port;

app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));
app.listen(port, () => {
    console.log(`Server Started (PORT ${config.port})`);
});
