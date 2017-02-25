import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { UserFromToken, UserFromTokenSuccess, UserFromTokenFailure, resetToken } from '../actions/login.jsx';
import App from '../components/App.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: () => {
      let token = sessionStorage.getItem('jwtToken');
      if(!token || token === '') {
        return;
      }
      dispatch(UserFromToken(token))
        .then((response) => {
          if (!response.error) {
            sessionStorage.setItem('jwtToken', response.payload.data.token);
            dispatch(UserFromTokenSuccess(response.payload))
          } else {
            sessionStorage.removeItem('jwtToken');
            dispatch(UserFromTokenFailure(response.payload));
          }
        });
    },
    resetMe: () =>{
      sessionStorage.removeItem('jwtToken');
      dispatch(resetToken());
    }
  }
}

export default connect(null, mapDispatchToProps)(App);