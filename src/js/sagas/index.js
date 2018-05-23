import { takeLatest, all, fork } from 'redux-saga/effects';
import getDataSaga from './getDataSaga';
import submitDataSaga from './submitDataSaga';
import submitStudentDataSaga from './submitStudentDataSaga'
import * as types from '../constants';

function* watchGetData() {
	yield takeLatest(types.GET_DATA, getDataSaga);
}

function* watchSubmitData() {
	yield takeLatest(types.SUBMIT_DATA, submitDataSaga);
}

function* watchSubmitStudentData() {
	yield takeLatest(types.SUBMIT_STUDENT_DATA, submitStudentDataSaga);
}

export default function* rootSaga() {
	yield all([fork(watchGetData), fork(watchSubmitData),fork(watchSubmitStudentData)]);
}
