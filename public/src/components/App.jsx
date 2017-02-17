import React ,{Component} from 'react';
import { render } from 'react-dom';
import Header from '.././staticComponents/header.jsx';

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default App;