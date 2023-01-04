import express from 'express'
import { starters } from './data/starter-data.js'

console.log(starters)

const app = express()

app.set('view engine', 'ejs')





app.get('/starters', function(req, res) {
  res.render('starters/index', {
    starters: starters
  })
})

app.get('/', function(req, res) {
  res.send('<h1>Hello, friend</h1>')
})

app.get('/home', function(req, res) {
  res.render('home')
})




app.listen(3000, function() {
  console.log('Listening on port 3000')
})