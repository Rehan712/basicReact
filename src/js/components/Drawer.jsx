import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';

class Drawer extends React.Component{
	constructor(){
		super()
	}

	render(){
		const {changeWidth,display,resetWidth}=this.props;
		const drawer='drawer ' + changeWidth
		return (
			<div className={drawer}>
				<div className="circle" style={{display:display}} onClick={resetWidth}>
					<div className="arrow" style={{display:display}}></div>
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