import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component{
    static contextTypes={
      router:React.PropTypes.object
    }

    componentWillMount(){
      if(this.props.authenticatedUser==='logout' ||this.props.authenticatedUser===null){
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps){
      if(nextProps.authenticatedUser==='logout' ||this.props.authenticatedUser===null){
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