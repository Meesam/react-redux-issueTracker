import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from './renderField.jsx';
import { onLogin, onLoginSuccess, onLoginFailure, resetLogin } from '../actions/login.jsx';
import '../../styles/css/signin.css';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Enter username';
    hasErrors = true;
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
  return hasErrors && errors;
}

//For any field errors upon submission (i.e. not instant check)
const validateAndSignInUser = (values, dispatch) => {
  return dispatch(onLogin(values))
    .then((result) => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(onLoginFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);
      }
      localStorage.setItem('jwtToken', result.payload.data.token);
      dispatch(onLoginSuccess(result.payload.data.objdata));
    });
};



class SignInForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    //this.props.resetMe();
  }

  componentWillReceiveProps(nextProps) {
    /*if (nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
      this.context.router.push('/');
    }*/
    if (nextProps.user.status === 'authenticated' && !nextProps.user.error) {
      this.context.router.push('/project');
     }

    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    if (nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      alert(nextProps.user.error.message);
    }
  }

  render() {
    const {asyncValidating, handleSubmit, submitting} = this.props;
    return (
      <div>
        <form className="form-signin" onSubmit={ handleSubmit(validateAndSignInUser) }>
          <h2 class="form-signin-heading">Please sign in</h2>
          <Field
                 name="username"
                 type="text"
                 className="form-control"
                 placeholder="User Name"
                 component={ renderField }
                 label="@username*" />
          <Field
                 name="password"
                 type="password"
                 className="form-control"
                 placeholder="Password"
                 component={ renderField }
                 label="Password*" />
          <div>
             <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                    disabled={ submitting }>
              Submit
            </button>
            <Link
                  to="/"
                  className="btn btn-lg btn-danger btn-block"> Cancel
            </Link>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'SignInForm', // a unique identifier for this form
  validate // <--- validation function given to redux-form
})(SignInForm)

