import * as types from '../constants';

const initial={
	className:'',
	display:'none'
}

export default function changeClassReducer(state=initial,action) {
	switch(action.type){
		case types.CHANGE_WIDTH:
			return {...state,className:action.payload,display:'flex'}
		case types.RESET_WIDTH:
			return initial	
		default:
			return state	
	}
}