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
import assign from 'object-assign';
import {Layout, Flex, Fixed} from 'react-layout-pane';


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
      logged: true,
    };
  }
  render() {
    return (  
     <Layout type="column">
       <Fixed className="header">
        <AppBar
          title="Issue Tracker"
          iconElementRight={<Logged />}
        />
       </Fixed>
       <Flex>
           <Layout type="row">
               <Fixed className="sidebar">Fixed Sidebar</Fixed>
               <Flex className="content">
                 <div className="container">     
                  {this.props.children}
                 </div>
               </Flex>
           </Layout>
       </Flex>
       <Fixed className="header">
            Fixed Footer
        </Fixed>
     </Layout>
    );
  }
}

export default App;