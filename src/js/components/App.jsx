import React from 'react';
import PropTypes from 'prop-types';
import Students from './Students';
import Login from './Login';
import Menu from './Menu';
import Drawer from './Drawer'


class App extends React.Component {
	constructor() {
		super();

		this.state={
			open:true
		}

		this.handleDrawerOpen=this.handleDrawerOpen.bind(this);
		this.handleDrawerClose=this.handleDrawerClose.bind(this)
	}

	handleDrawerOpen(){
    this.setState({ open: true });
  };

  handleDrawerClose(){
    this.setState({ open: false });
  };

	render() {
		return (
			<div className="app">
				<Menu />
				<Drawer />
			</div>
		);
	}
}

export default App;

App.propTypes = {
	//getAction: PropTypes.func.isRequired
};
