import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';
import {Link} from 'react-router-dom'

class Drawer extends React.Component{
	constructor(){
		super()
	}



	render(){
		const {changeWidth,display,resetWidth}=this.props;
		const drawer='drawer ' + changeWidth
		return (
			<div className={drawer}>
				<div className="circle" style={{visibility:display}} onClick={resetWidth}>
					<div className="arrow" style={{visibility:display}}></div>
					</div>
					<div className="items" style={{visibility:display}}>
						<div className="item" style={{borderTop:'5px solid red',visibility:display}}><Link to="/loginStudent" style={{textDecoration:'none'}}><p>Login</p></Link></div>
						<div className="item" style={{visibility:display}} ><Link to="/" style={{textDecoration:'none'}}><p>Home</p></Link></div>

						<div className="item" style={{visibility:display}}><Link to="/students" style={{textDecoration:'none'}}><p>Students</p></Link></div>
						<div className="item" style={{visibility:display}}><Link to="/signIn" style={{textDecoration:'none'}}><p>SignIn</p></Link></div>
					</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		changeWidth:state.changeClass.className,
		display:state.changeClass.display
	}
}

export default connect(mapStateToProps,{resetWidth:actions.resetWidth})(Drawer)