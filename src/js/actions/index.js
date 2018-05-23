import * as types from '../constants';

export function getData() {
	return {
		type: types.GET_DATA
	};
}

export function getDataAttempt() {
	return {
		type: types.GET_DATA_ATTEMPT
	};
}

export function getDataSuccess(data) {
	return {
		type: types.GET_DATA_SUCCESS,
		payload: data
	};
}

export function getDataFail(error) {
	return {
		type: types.GET_DATA_FAIL,
		payload: error
	};
}

export function submitData(data) {
	return {
		type: types.SUBMIT_DATA,
		payload: data
	};
}

export function submitDataAttempt() {
	return {
		type: types.SUBMIT_DATA_ATTEMPT
	};
}

export function submitDataSuccess() {
	return {
		type: types.SUBMIT_DATA_SUCCESS
	};
}

export function submitDataFail(error) {
	return {
		type: types.SUBMIT_DATA_FAIL,
		payload: error
	};
}





export function changeName(value) {
	return {
		type: types.CHANGE_NAME,
		payload: value
	};
}

export function changePassword(value) {
	return {
		type: types.CHANGE_PASSWORD,
		payload: value
	};
}

export function resetState() {
	return {
		type: types.RESET_STATE
	};
}






export function changeWidth(className) {
	return {
		type:types.CHANGE_WIDTH,
		payload:className
	}
}

export function resetWidth() {
	return {
		type:types.RESET_WIDTH
	}
}




export function changeStudentName(value) {
	return {
		type:types.CHANGE_STUDENT_NAME,
		payload:value
	}
}
export function changeStudentFatherName(value) {
	return {
		type:types.CHANGE_STUDENT_FATHER_NAME,
		payload:value
	}
}
export function changeStudentAge(value) {
	return {
		type:types.CHANGE_STUDENT_AGE,
		payload:value
	}
}
export function changeStudentAdress(value) {
	return {
		type:types.CHANGE_STUDENT_ADRESS,
		payload:value
	}
}







export function submitStudentData(data) {
	return {
		type: types.SUBMIT_STUDENT_DATA,
		payload: data
	};
}

export function submitStudentDataAttempt() {
	return {
		type: types.SUBMIT_STUDENT_DATA_ATTEMPT
	};
}

export function submitStudentDataSuccess() {
	return {
		type: types.SUBMIT_STUDENT_DATA_SUCCESS
	};
}

export function submitStudentDataFail(error) {
	return {
		type: types.SUBMIT_STUDENT_DATA_FAIL,
		payload: error
	};
}



export function resetStudentState() {
	return {
		type: types.RESET_STUDENT_STATE
	};
}