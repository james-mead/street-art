var path = require('path')

var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')

var app = express()

// middleware
app.use(express.static('public'))
app.engine('hbs', hbs( {
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


// routes
app.get('/', routes.getHome)

module.exports = app
