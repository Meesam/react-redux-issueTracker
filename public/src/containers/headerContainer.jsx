import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/login.jsx';
import Header from '.././staticComponents/header.jsx';

const  mapStateToProps=(state)=>{
  return{
    authenticatedUser: state.user.status === 'authenticated' ? true : false,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      localStorage.removeItem('jwtToken');
      dispatch(logoutUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);