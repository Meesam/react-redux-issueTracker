import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component{
    static contextTypes={
      router:React.PropTypes.object
    }

    componentWillMount(){
     console.log(this.props.authenticatedUser);
      let token = localStorage.getItem('jwtToken');
      if(this.props.authenticatedUser==='logout' || token==='undefined'){
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps){
      console.log( 'tt ' +nextProps.authenticatedUser);
      let token = localStorage.getItem('jwtToken');
      if(nextProps.authenticatedUser==='logout' || token==='undefined'){
        this.context.router.push('/login');
      }
    }

    render(){
      return(<ComposedComponent {...this.props} />)
    }
  }

  function mapStateToProps(state) {
    return {
      authenticatedUser: state.user.status,
      user: state.user
    };
  }
  return connect(mapStateToProps)(Authentication) ;
}