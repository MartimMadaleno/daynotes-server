// const { changePriority } = require('../')
const Notes = require('../models/NotesData')

module.exports = {

	update(req, res){

		const { id } = req.params
		const { desc } = req.body
		Notes.findOne({ _id : id })
		.then((note) => {
			if(desc){
				note.desc = desc
				note.save()
				.then(res.json(note))
			}
		})
		.catch((err) => {
			console.log(err)
			res.redirect(500, '/')
		})
	}
}