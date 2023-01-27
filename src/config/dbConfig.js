const mongoose = require('mongoose')

const uri = "mongodb+srv://Martim:Us8GCZPCONsPcAXQ@cluster0.nr77bl5.mongodb.net/notes?retryWrites=true&w=majority";

mongoose.set('strictQuery', true)

const conn = mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})



module.exports = conn