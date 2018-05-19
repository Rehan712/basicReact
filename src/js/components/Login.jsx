import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as actions from '../actions';

class Login extends React.Component {
	render() {
		const {
			changeName,
			changePassword,
			resetState,
			inputData,
			submitData
		} = this.props;
		return (
			<div className="login">
				<div>
					<TextField
						value={inputData.name}
						label="Name"
						onChange={e => {
							changeName(e.target.value);
						}}
						style={{ width: 300, margin: 50 }}
					/>
				</div>
				<div>
					<TextField
						value={inputData.password}
						label="Password"
						onChange={e => {
							changePassword(e.target.value);
						}}
						style={{ width: 300, margin: 50 }}
					/>
				</div>
				<div>
					<Button
						color="primary"
						onClick={e => {
							e.preventDefault();
							submitData(inputData);
							resetState();
						}}
						style={{ width: 300 }}
					>
						Submit
					</Button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		inputData: state.inputData
	};
}

export default connect(mapStateToProps, {
	changeName: actions.changeName,
	changePassword: actions.changePassword,
	resetState: actions.resetState,
	submitData: actions.submitData
})(Login);

Login.propTypes = {
	//getAction: PropTypes.func.isRequired
};
