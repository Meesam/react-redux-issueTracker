import React ,{Component} from 'react';
import { render } from 'react-dom';
import ModulesList from '.././pages/modulesIndex.jsx';
import Header from '.././pages/headerIndex.jsx';
import Footer from '.././staticComponents/footer.jsx'
import setAuthorizationToken from '.././utils/setAuthorizationToken';

export default class App extends Component {

  componentWillMount() {
    this.props.loadUserFromToken();
    setAuthorizationToken(localStorage.JwtToken);
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
