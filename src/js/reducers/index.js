import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import textFieldsReducer from './textFieldsReducer';
import changeClassReducer from './changeClassReducer';
import studentFormReducer from './studentFormReducer'

const rootReducer = combineReducers({
	studentData: getDataReducer,
	inputData: textFieldsReducer,
	changeClass:changeClassReducer,
	inputStudentData:studentFormReducer
});

export default rootReducer;
