/*
 * Module Dependencies
 */

var express = require('express')
  , stylus  = require('stylus')
  , nib     = require('nib')

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  {src: __dirname + '/public'
  , compile: compile
  }
))

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.render('index',
    {title: 'Home', path: req.path}
  )
})

app.get('/projects', function(req, res) {
  res.render('projects',
    {title: 'Projects', path: req.path}
  )
})

app.get('/skills', function(req, res) {
  res.render('skills',
    {title: 'Skills', path: req.path}
  )
})

app.get('/about', function(req, res) {
  res.render('about',
    {title: 'About', path: req.path}
  )
})

app.get('/hire', function(req, res) {
  res.render('hire',
    {title: 'Hire', path: req.path}
  )
})

app.listen(process.env.PORT || 3000)