import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { UserFromToken, UserFromTokenSuccess, UserFromTokenFailure, resetToken } from '../actions/login.jsx';
import App from '../components/App.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserFromToken: () => {
      let token = localStorage.getItem('jwtToken');
      if(!token || token === '') {
        return;
      }

      dispatch(UserFromToken(token))
        .then((response) => {
          if (!response.error) {
            localStorage.setItem('jwtToken', response.payload.data.token);
            dispatch(UserFromTokenSuccess(response.payload))
          } else {
            localStorage.removeItem('jwtToken');
            dispatch(UserFromTokenFailure(response.payload));
          }
        });
    },
    resetMe: () =>{
      localStorage.removeItem('jwtToken');
      dispatch(resetToken());
    }
  }
}

export default connect(null, mapDispatchToProps)(App);