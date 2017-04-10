import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
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
        <div className="row" key={item._id}>
          <div className="col-md-12">
            <div className="box box-solid">
              <div className="box-header with-border">
                {this.renderIcons(item.ProjectType)}
                <Link to="/newproject" ><h3 className="box-title">{item.ProjectName}</h3></Link>
              </div>
              <div className="box-body">
                <dl>
                  <dt>Project Type</dt>
                  <dd>{item.ProjectType}</dd>
                  <dt>Start Date</dt>
                  <dd>{item.StartDate}</dd>
                  <dt>End Date</dt>
                  <dd>{item.EndDate}</dd>
                  <dt>Description</dt>
                  <dd>{item.Description}</dd>
                </dl>
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

