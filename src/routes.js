const express = require('express')
const routes = express.Router()

const NotesController = require('./controllers/NotesController')
const PriorityController = require('./controllers/PriorityController')
const ContentController = require('./controllers/ContentController')

routes.post('/notes', NotesController.create)
routes.get('/notes', NotesController.read)
routes.delete('/notes/:id', NotesController.delete)

routes.post('/priority/:id', PriorityController.changePriority)

routes.post('/contents/:id', ContentController.update)

module.exports = routes