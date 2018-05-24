import axios from 'axios';

export async function getDataApi() {
	const res = await axios.get('/data');
	return res.data;
}

export async function submitDataApi(data) {
	const res = await axios.post('/login', data);
	return res.data;
}

export async function submitStudentDataApi(data) {
	const res = await axios.post('/postStudent', data);
	return res.data;
}
