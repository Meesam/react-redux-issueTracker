import React,{Component,PropTypes} from 'react';
import moment from 'moment';


const styles={
   text:{
     display:'inline-block'
   }
}
class ProjectList extends Component{
  constructor(props){
    super(props)
  }

  renderIcons(projectType){
    console.log('projectType', projectType)
    switch (projectType){

      case "Internal":
        return (
          <i class="fa fa-bookmark" aria-hidden="true"></i>
        )
      case "External":
        return (
          <i class="fa fa-bookmark-o" aria-hidden="true"></i>
        )
    }
  }

  renderProject(project){
    return project.map((item)=>{
      return(
        <div class="container-fluid" key={item._id}>
          <div class="row">
            <div class="col-md-8 col-lg-6 col-lg-8">
              <div class="well profile">
                <div class="col-sm-12">
                  <div class="col-xs-12 col-sm-8">
                    <h3>{this.renderIcons(item.ProjectType)} {item.ProjectName}</h3>
                    <p><strong>Project Type: </strong>{item.ProjectType}</p>
                    <p><strong>Start Date: </strong>{item.StartDate}</p>
                    <p><strong>End Date: </strong>
                      {item.EndDate}
                    </p>
                    <p>
                      <strong>Description: </strong>
                      {item.Description}
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 divider text-center">
                  <div class="col-xs-12 col-sm-4 emphasis">
                    <h2><strong> 8 </strong></h2>
                    <p><small>Issues</small></p>
                    <button class="btn btn-success"><span class="fa fa-plus-circle"></span> Add Issue </button>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <h2><strong>5</strong></h2>
                    <p><small>User</small></p>
                    <button class="btn btn-info"><span class="fa fa-user"></span> Add User </button>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  }

  render(){
    return(
      <div>
        {this.renderProject(this.props.dataSource)}
      </div>
    )
  }
}

ProjectList.propTypes={
  dataSource:PropTypes.array.isRequired
}

export default ProjectList;

