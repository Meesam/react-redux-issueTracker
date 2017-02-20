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
        <tr key={item._id}>
           <td>{item.ProjectName}</td>
           <td>{item.ProjectName}</td>
           <td>{item.Description}</td>
       </tr>
     );
   })
  }

  render(){
    const { projects,error,loading } = this.props.projectList
    if(loading){
       console.log('i am here');
      return <div className="alert-info">Wait projects are loading</div>
    }
    else if(error){
      return <div className="alert-error">${error.message}</div>
    }
    return(
         <div>
         <section className="content-header">
            <h1>
             Projects
            </h1>
         </section>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <input type="button" className="btn btn-primary" value="Add New" />
                <h5> Total 15 record are found</h5>
            </div>
             <div className="box-body table-responsive no-padding">
                  <table className="table">
                      <thead className="thead-inverse">
                        <tr>
                          <th>Project Name</th>
                          <th>Type</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.renderProject(projects)}
                      </tbody>
                  </table>
               </div>
        </div>
    </div>
</div>
</div>
    )
  }
}

export default ProjectList;
