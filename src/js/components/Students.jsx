import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Students extends React.Component {
	componentDidMount() {
		this.props.getData();
	}
	render() {
		console.log('this is the data from students', this.props.data);
		return (
			<div className="students">
				<div>This is a test</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.studentData.data
	};
}
export default connect(mapStateToProps, { getData: actions.getData })(Students);

Students.propTypes = {
	//getAction: PropTypes.func.isRequired
};
