import React,{ Component , PropTypes} from 'react';
import { Link } from 'react-router';

class ProjectList extends Component{
  constructor(props){
    super(props)
  }
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchProject();
  }

  componentDidMount(){
    this.hidesuccessalert()
  }

  hidesuccessalert(){
    $('#success-alert').fadeOut( 3000, function() {
      $( '#success-alert' ).remove();
    });
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
      return (
          <div className="progress">
            <div className="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: 40}}>
               <span className="sr-only">40% Complete (success)</span>
            </div>
          </div>
        )
    }
    else if(error){
      return <div className="alert-error">${error.message}</div>
    }
    return(
         <div>
         <div id="success-alert" className="alert alert-success alert-dismissable">
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h4>  <i className="icon fa fa-check"></i> Success!</h4>
            Project list loaded successfully !
         </div>
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
