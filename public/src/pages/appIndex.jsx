import React,{Component} from 'react';
import AppContainer from '.././containers/appContainer.jsx';

export default class AppIndex extends Component{
  render(){
    return(
      <AppContainer>
        {this.props.children}
      </AppContainer>
    );
  }
}