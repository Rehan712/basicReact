import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

const Menu=props=>(
		<div className="menu">
			<div className="brand">School Management System</div>
			<div className="burger-lines" onClick={e=>props.changeWidth('changeWidth')}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</div>
	)

export default connect(null,{changeWidth:actions.changeWidth})(Menu);