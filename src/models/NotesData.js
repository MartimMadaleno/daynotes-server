const mongoose = require('mongoose')

const NotesDataSchema = new mongoose.Schema({
	title: String,
	desc: String,
	priority: Boolean
})

module.exports = mongoose.model('Notes', NotesDataSchema)
