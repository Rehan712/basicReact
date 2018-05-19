module.exports=app=>{
	app.use(require('express').static(require('path').join(__dirname,'../../dist')));
	app.use(require('body-parser').json())
}