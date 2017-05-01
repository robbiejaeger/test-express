const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)
app.locals.title = 'Test Express'
app.locals.students = require('./students')

app.get('/', (request, response) => {
  response.send('We\'re going to test all the routes!')
})

app.get('/students', (request, response) => {
  response.status(200).json(app.locals.students)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`)
})
