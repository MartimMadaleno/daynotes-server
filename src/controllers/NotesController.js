const Notes = require('../models/NotesData')

module.exports = {

	async read(req, res) {
		return res.json(await Notes.find())
	},

	create(req, res){
		const { title, desc, priority=false } = req.body

		if(!desc || !title)
			return res.status(400).json({ error: "Title and description needed!"})
		
		Notes.create({ title, desc, priority })
		.then((note) => {
			res.json(note) 
		}).catch((err) => {
			console.log(err)
			res.redirect(500, '/')
		})
		// return res.json() await create res
	},

	delete(req, res){
		const { id } = req.params

		Notes.findOneAndDelete({ _id: id })
		.then((note) => {
			res.json(note) 
		}).catch((err) => {
			console.log(err)
			res.redirect(500, '/')
		})
	}
}