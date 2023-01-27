const { model } = require('mongoose')
const Notes = require('../models/NotesData')

module.exports = {

	changePriority(req, res){
		const { id } = req.params
		Notes.findById(id)
		.then((notesList) => {
			if(notesList.priority)
				notesList.priority = false
			else
				notesList.priority = true
			notesList.save()
			.then(res.json(notesList))
			.catch((err) => {
				console.log(err)
				res.redirect(500, '/')
			})
		})
		.catch((err) => {
			console.log(err)
			res.redirect(500, '/')
		})
	}

}