import React,{Component} from 'react';
import { Link } from 'react-router';


const defaultStyle = {
  marginLeft: 20
};

class Modules extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchModules();
  }

  renderContent(module){
    return module.map((item)=>{
       return(
         <li className="treeview" key={item._id}>
           <a href={item.MenuRoute}><i className="fa fa-link"></i> <span>{item.MenuName}</span> <i className="fa fa-angle-left pull-right"></i></a>
         </li>
       );
    })
  }

  render(){
    const {modules,error,loading}=this.props.moduleList;
    return(
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="styles/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Meesam</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <ul className="sidebar-menu">
            {this.renderContent(modules)}
          </ul>
        </section>
      </aside>
    )
  }
}
export default Modules;