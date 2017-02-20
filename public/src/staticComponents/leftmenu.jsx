import React ,{ Component } from 'react';

export default class LeftMenu extends Component{
   render(){
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
              <li className="treeview">
                <a href='/project'><i className="fa fa-link"></i> <span>Project</span> <i className="fa fa-angle-left pull-right"></i></a>
              </li>
              <li className="treeview">
                <a href='/issue'><i className="fa fa-link"></i> <span>Issues</span> <i className="fa fa-angle-left pull-right"></i></a>
              </li>
              <li className="treeview">
                <a href='/addproject'><i className="fa fa-link"></i> <span>Add Project</span> <i className="fa fa-angle-left pull-right"></i></a>
              </li>
              <li className="treeview">
                <a href='/addissue'><i className="fa fa-link"></i> <span>Add Issue</span> <i className="fa fa-angle-left pull-right"></i></a>
              </li>
          </ul>
        </section>
      </aside>
    )
   }

}