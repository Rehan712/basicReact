import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SignIn extends React.Component{
	render(){
		const {changeStudentName,changeStudentFatherName,changeStudentAge,changeStudentAdress,inputStudentData,submitStudentData,resetStudentState}=this.props;
		return (
			<div className="signIn">
				<div className="heading">Student</div>
				<TextField value={inputStudentData.name} type="search" className="textbox" label="Name" onChange={e=>changeStudentName(e.target.value)} />
				<TextField value={inputStudentData.fatherName} type="search" className="textbox" label="Father Name" onChange={e=>changeStudentFatherName(e.target.value)} />
				<TextField value={inputStudentData.age} type="search" className="textbox" label="Age" onChange={e=>changeStudentAge(e.target.value)} />
				<TextField value={inputStudentData.adress} type="multiline" className="textbox" label="Address" onChange={e=>changeStudentAdress(e.target.value)} />
				<Button onClick={()=>{submitStudentData(inputStudentData);resetStudentState();}} color="primary" style={{width:200}}>Submit</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		inputStudentData:state.inputStudentData
	}
}

export default connect(mapStateToProps,{submitStudentData:actions.submitStudentData,changeStudentName:actions.changeStudentName,changeStudentFatherName:actions.changeStudentFatherName,changeStudentAge:actions.changeStudentAge,changeStudentAdress:actions.changeStudentAdress,resetStudentState:actions.resetStudentState})(SignIn)