const passport=require('passport');
const {Strategy} = require('passport-jwt');

const data = [
		{ id: 1, name: 'rehan', password: 'rehan007' },
		{ id: 2, name: 'numan', password: 'numan007' }
	];

module.exports=()=>{
	const strategy=new Strategy(require('./jwtOptions'),(jwt_payload,next)=>{
		const user=data.filter(item=>{
			return item.name===jwt_payload.name
		})[0];

		if(user){
			next(null,user)
		}else{
			next(null,false)
		}
	})

	passport.use(strategy)

}	