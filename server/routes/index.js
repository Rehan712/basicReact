module.exports=app=>{
	app.get('/data',
		require('passport').authenticate('jwt',{session:false}),
		require('../handlers/getDataHandler')
	);
	app.post('/login',require('../handlers/postDataHandler'));
}