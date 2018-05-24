const Student = require('../models/Student');

module.exports = (req, res) => {
	const { name, fatherName, age, adress } = req.body;
	const student = new Student({
		name,
		fatherName,
		age,
		adress
	});

	student.save((err, student) => {
		if (err) {
			console.log(err);
		} else {
			res.status(201).send(student);
		}
	});
};
