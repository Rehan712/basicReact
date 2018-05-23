import * as types from '../constants';

const initial={
	name:'',
	fatherName:'',
	age:'',
	adress:''
}

export default function studentFormReducer(state=initial,action) {
	switch(action.type){
		case types.CHANGE_STUDENT_NAME:
			return {...state,name:action.payload}
		case types.CHANGE_STUDENT_FATHER_NAME:
			return {...state,fatherName:action.payload}
		case types.CHANGE_STUDENT_AGE:
			return {...state,age:action.payload}
		case types.CHANGE_STUDENT_ADRESS:
			return {...state,adress:action.payload}
		case types.RESET_STUDENT_STATE:
			return initial	
		default:
			return state				
	}
}