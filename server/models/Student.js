const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
	updated_at: { type: Date, default: Date.now },
	name: String,
	fatherName: String,
	age: String,
	adress: String
});

module.exports = mongoose.model('Student', StudentSchema);
