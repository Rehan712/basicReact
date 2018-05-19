const data = [
		{ id: 1, name: 'rehan', password: 'rehan007' },
		{ id: 2, name: 'numan', password: 'numan007' }
	];

module.exports=(req,res)=>{
	res.json(data)
}