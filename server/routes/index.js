module.exports = app => {
	app.get(
		'/data',
		require('passport').authenticate('jwt', { session: false }),
		require('../handlers/getDataHandler')
	);
	app.post('/login', require('../handlers/postDataHandler'));

	// fallback urls

	app.get('/loginStudent', (req, res) => {
		res.sendFile(require('path').join(__dirname, '../../dist/index.html'));
	});
	app.get('/students', (req, res) => {
		res.sendFile(require('path').join(__dirname, '../../dist/index.html'));
	});
	app.get('/signIn', (req, res) => {
		res.sendFile(require('path').join(__dirname, '../../dist/index.html'));
	});

	// submitStudentFormHandler

	app.post('/postStudent', require('../handlers/postStudentHandler'));
};
