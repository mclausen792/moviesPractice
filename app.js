var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var queries = require('./db/queries');

app.set('view engine', 'hbs')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.render('index');
})


app.listen(port, () => {
  console.log(`listening at ${port}`);
})
