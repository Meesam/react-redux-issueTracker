import React ,{Component} from 'react';
import { render } from 'react-dom';
import ModulesList from '.././pages/modulesIndex.jsx';
import Header from '.././staticComponents/header.jsx';
import Footer from '.././staticComponents/footer.jsx'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (  
      <div>
        <div>
            <Header />
        </div>
        <div>
          <ModulesList />
        </div>
      <div className="content-wrapper">   
        <section class="content">   
          {this.props.children}
        </section>
      </div>
      <div>
         <Footer />
      </div>
        <div  className="control-sidebar-bg"></div>  
      </div>
    );
  }
}

export default App;