import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import textFieldsReducer from './textFieldsReducer';
import changeClassReducer from './changeClassReducer'

const rootReducer = combineReducers({
	studentData: getDataReducer,
	inputData: textFieldsReducer,
	changeClass:changeClassReducer
});

export default rootReducer;
