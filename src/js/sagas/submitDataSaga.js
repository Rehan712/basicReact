import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';

export default function* submitDataSaga(action) {
	const inputData = action.payload;
	yield put(actions.submitDataAttempt());
	try {
		const res = yield call(api.submitDataApi, inputData);
		yield put(actions.submitDataSuccess());
		localStorage.setItem('token',res.token)
	} catch (e) {
		yield put(actions.submitDataFail(e));
	}
}
