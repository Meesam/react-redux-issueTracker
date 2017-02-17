import React ,{Component} from 'react';
import { render } from 'react-dom';
import ModulesList from '.././pages/modulesIndex.jsx';


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
       <div>
        {this.props.children}
       </div>
    );
  }
}

export default App;