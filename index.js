const express = require('express')

const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('views', './views')
app.set('view engine', 'html')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => console.log(`Listening on ${port}!`))
