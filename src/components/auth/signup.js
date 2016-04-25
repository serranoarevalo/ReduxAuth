import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    	 const { handleSubmit, fields: {email, password, passwordConfirm }} = this.props;

        return (
        	<form>
        		<fieldset className="form-group">
        			<label>Email:</label>
        			<input className="form-control" {...email} />
        		</fieldset>
        		<fieldset className="form-group">
        			<label>Password:</label>
        			<input className="form-control" {...password} />
        		</fieldset>
        		<fieldset className="form-group">
        			<label>Confirm Password:</label>
        			<input className="form-control" {...password} />
        		</fieldset>
        		<button action="submit" className="btn btn-primary">Sign up</button>
        	</form>
        )
    }
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'paswordConfirm']
})(Signup);
