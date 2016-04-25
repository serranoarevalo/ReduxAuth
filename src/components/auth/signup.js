import React from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFormSubmit = (formProps) => {
    	this.props.signUpUser(formProps);
    }

    renderAlert() {
    	if(this.props.errorMessage) {
    		return (
    			<div className="alert alert-danger">
    				<strong>Opps!</strong> {this.props.errorMessage}
    			</div>
    		);
    	}
    }
    render() {
    	 const { handleSubmit, fields: {email, password, passwordConfirm }} = this.props;

        return (
        	<form onSubmit={handleSubmit(this.handleFormSubmit)}>
        		<fieldset className="form-group">
        			<label>Email:</label>
        			<input className="form-control" {...email} />
        		</fieldset>
        		<fieldset className="form-group">
        			<label>Password:</label>
        			<input type="password" className="form-control" {...password} />
        			{password.touched && passwordConfirm.touched && password.error && <div className="error">{password.error}</div>}
        		</fieldset>
        		<fieldset className="form-group">
        			<label>Confirm Password:</label>
        			<input type="password" className="form-control" {...passwordConfirm} />
        		</fieldset>
        		{this.renderAlert()}
        		<button action="submit" className="btn btn-primary">Sign up</button>
        	</form>
        )
    }
}

function validate(formProps) {
	const errors = {};

	if(!formProps.email) {
		errors.email = 'Please email'
	}

	if(!formProps.password) {
		errors.password = 'Please password'
	}

	if(!formProps.passwordConfirm){
		errors.passwordConfirm = 'Please password confirmation'
	}

	if (formProps.password !== formProps.passwordConfirm) {
		errors.password = 'Should Match';
	}

	return errors;
}


function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate
}, mapStateToProps, actions)(Signup);
