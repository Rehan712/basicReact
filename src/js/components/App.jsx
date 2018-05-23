import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Students from './Students';
import Login from './Login';
import Menu from './Menu';
import Home from './Home'
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
			<Router>
			<div className="app">
				<Menu />
				<div className="content">
				<Drawer />
				<div className="contentComponents">
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/loginStudent' component={Login} />
					<Route path='/students' component={Students} />
				</Switch>
				</div>
				</div>

				

			</div>
			</Router>
		);
	}
}

export default App;

App.propTypes = {
	//getAction: PropTypes.func.isRequired
};
