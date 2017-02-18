import React,{ Component } from 'react';
import { Link } from 'react-router';

class ProjectList extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchProject();
  }

  renderProject(project){
   return project.map((item)=>{
     return(
       <div key={item._id}>
         <li className="time-label">
          <span className="bg-red">
            18 Feb. 2017
          </span>
       </li>
       <li>
         <i className="fa fa-envelope bg-blue"></i>
         <div className="timeline-item">
           <span className="time"><i class="fa fa-clock-o"></i> 12:05</span>
              <h3 className="timeline-header"><a href="#">{item.ProjectName}</a></h3>
              <div className="timeline-body">
                 {item.Description}
              </div>
              <div className="timeline-footer">
                <a className="btn btn-primary btn-xs">Read more</a>
                <a className="btn btn-danger btn-xs">Delete</a>
              </div>
         </div>
       </li>
       </div>
     );
   })
  }

  render(){
    const { projects,error,loading } = this.props.projectList
    if(loading){
      return <div className="alert-info">Wait projects are loading</div>
    }
    else if(error){
      return <div className="alert-error">${error.message}</div>
    }
    return(
      <div>
         <ul className="timeline">
            {this.renderProject(projects)}
         </ul>
      </div>
    )
  }
}

export default ProjectList;
