import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as actions from '../actions';

export default function* submitStudentDataSaga(action) {
	const inputData = action.payload;
	yield put(actions.submitStudentDataAttempt());
	try {
		const res = yield call(api.submitStudentDataApi, inputData);
		yield put(actions.submitStudentDataSuccess());
	} catch (e) {
		yield put(actions.submitStudentDataFail(e));
	}
}
