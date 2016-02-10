/*
 * Module Dependencies
 */

var express   = require('express')
  , stylus    = require('stylus')
  , nib       = require('nib')
  , sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD)

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(express.bodyParser())
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
    {title: 'Hire', path: req.path, messageSuccess: 0}
  )
})

app.post('/hire', function(req, res) {
  sendgrid.send({
    to:       'errskipower@gmail.com',
    from:     req.body.email,
    subject:  '[emroth.com] ' + (req.body.subject !== '' ? req.body.subject : 'New Form Submission'),
    html:     '<strong>From:</strong> ' + req.body.firstName + ' ' + req.body.lastName + '<br><strong>Email:</strong> ' + req.body.email + '<br><strong>Subject:</strong> ' + req.body.subject + '<br><br>' + req.body.message
  }, function(err, json) {
    res.render('hire',
      {title: 'Hire', path: req.path, messageSuccess: (err ? 3 : 1)}
    )
  });
})

app.get('/updatebrowser', function(req, res) {
  res.render('updatebrowser',
    {title: 'Update Browser', path: req.path}
  )
})

app.listen(process.env.PORT || 3000)