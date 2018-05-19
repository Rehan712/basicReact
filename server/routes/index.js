module.exports=app=>{
	app.get('/data',require('../handlers/getDataHandler'));
	app.post('/login',require('../handlers/postDataHandler'));
}