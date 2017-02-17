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
       <li className="list-group-item" key={item._id}>
         <Link style={{color:'black'}} to={"project/" + item._id}>
           <h3 className="list-group-item-heading">{item.ProjectName}</h3>
         </Link>
       </li>
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
      <div className="container">
        <h1>Project</h1>
        <ul className="list-group">
          {this.renderProject(projects)}
        </ul>
      </div>
    )
  }
}

export default ProjectList;
