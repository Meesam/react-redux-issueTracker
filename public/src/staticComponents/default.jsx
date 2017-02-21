import React , {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router';

const Logged = () => (
  <div>
       <FlatButton label="Singin" href="/signin">
       </FlatButton>
       <FlatButton label="SignUp" /> 
      </div>
);

export default class DefaultPage extends Component{
   render(){
    return (
     <AppBar
          title="Issue Tracker"
          iconElementRight={<Logged />}
        />
      )
   }

}