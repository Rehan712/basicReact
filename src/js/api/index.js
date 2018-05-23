import axios from 'axios'

export async function getDataApi() {
	const res=await axios.get('/data');
	return res.data;
}

export async function submitDataApi(data) {
	const res=await axios.post('/login',data);
	return res.data
}

export function submitStudentDataApi(data) {
	console.log('this is data from submitStudentDataApi',data)
}
