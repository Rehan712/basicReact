const express=require('express');
const app=express();

require('./middleware')(app)

require('./passport')()

var mongoose=require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://rehan007:rehan6300487@ds233320.mlab.com:33320/school').then(()=>console.log('connection successfull')).catch(err=>console.error(err))

require('./routes')(app)
app.listen(3000,()=>{
	console.log('node is listening on port 3000')
})