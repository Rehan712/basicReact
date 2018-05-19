import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import textFieldsReducer from './textFieldsReducer';

const rootReducer = combineReducers({
	studentData: getDataReducer,
	inputData: textFieldsReducer
});

export default rootReducer;
