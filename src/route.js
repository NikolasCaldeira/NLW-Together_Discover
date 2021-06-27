const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

//formato que o formulário de dentro da modal tem que passar informação
/*route.post('/question/create/:room', RoomController.create)*/

route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/question/create/:room', QuestionController.creat)


module.exports = route