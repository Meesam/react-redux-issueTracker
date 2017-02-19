import React ,{Component} from 'react';
import { render } from 'react-dom';
import ModulesList from '.././pages/modulesIndex.jsx';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SignForm from '.././containers/signInContainer.jsx'; 
import DefaultPage from '.././staticComponents/default.jsx';


const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class App extends Component {
  constructor(props){
    super(props)
     this.state = {
      logged: false,
    };
  }
  render() {
    if(!this.state.logged){
      return(
        <div>
        <DefaultPage />
         <div style={{tectAlign:'center'}}>     
          {this.props.children}
         </div>
         </div>
        )
    }
    return (
        <div className="page_container">
        <div>
        <AppBar
          title="Issue Tracker"
          iconElementRight={<Logged />}
        />
        </div>
        <div>     
          {this.props.children}
         </div>
      </div>

    );
  }
}

export default App;