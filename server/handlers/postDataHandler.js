const jwt=require('jsonwebtoken');


const data = [
		{ id: 1, name: 'rehan', password: 'rehan007' },
		{ id: 2, name: 'numan', password: 'numan007' }
	];

	function varifyUser(userName,userPassword,data) {
		const userArray=data.filter(item=>{
			if(item.name===userName && item.password===userPassword){
				return true
			}else{
				return false
			}
		})
		return userArray
	}

	module.exports=(req,res)=>{
		console.log('this is body',req.body)
		const name=req.body.name;
		const password=req.body.password;
		const userArray=varifyUser(name,password,data)
		if(userArray.length){
			const user=userArray[0];
			if(user){
				const payload={name:user.name};
				const token=jwt.sign(payload,require('../passport/jwtOptions').secretOrKey,{
					expiresIn:60 * 60
				});
				res.status(201).send({name:user.name,token})
			}
		}
	}