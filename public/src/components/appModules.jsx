import React, {Component} from 'react';

class AppModules extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const{moduleList}=this.props;

    return (
      <div>
        <h1>AppModules</h1>
      </div>
    )
  }
}

export default AppModules;