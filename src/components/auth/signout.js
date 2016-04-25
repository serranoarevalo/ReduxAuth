import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.signOutUser();
	}
	render() {
		return <div>Dont go</div>;
	}
}

export default connect(null, actions)(Signout);