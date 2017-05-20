const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {

  const server = express()

  server.use(bodyParser.urlencoded({ extended: true }))

  server.post('/contactProcess', function(req, res) {

    fetch('https://hooks.zapier.com/hooks/catch/2210089/17oyin/', 
      {
        method: 'POST', 
        body: JSON.stringify({
          "name": req.body.name,
          "email": req.body.email,
          "message": req.body.message
        })
      })
    res.redirect('/contact')

  })

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.use(handler).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

})
