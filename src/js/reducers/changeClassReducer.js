import * as types from '../constants';

const initial={
	className:'',
	display:'hidden'
}

export default function changeClassReducer(state=initial,action) {
	switch(action.type){
		case types.CHANGE_WIDTH:
			return {...state,className:action.payload,display:'visible'}
		case types.RESET_WIDTH:
			return initial	
		default:
			return state	
	}
}