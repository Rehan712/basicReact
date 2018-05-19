export function getDataApi() {
	const data = [
		{ id: 1, name: 'rehan', password: 'rehan007' },
		{ id: 2, name: 'numan', password: 'numan007' }
	];

	return data;
}

export function submitDataApi(data) {
	console.log('this is data from submitDataApi', data);
}
