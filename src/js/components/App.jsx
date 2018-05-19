import React from 'react';
import PropTypes from 'prop-types';
import Students from './Students';
import Login from './Login';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="app">
				<Students />
				<Login />
			</div>
		);
	}
}

export default App;

App.propTypes = {
	//getAction: PropTypes.func.isRequired
};
