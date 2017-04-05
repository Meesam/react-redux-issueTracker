import React,{ Component , PropTypes} from 'react';
import PageBase from '../common/renderPageBase.jsx';
import Projects from './projectListComponent.jsx';
import Pagination from '../common/renderPagination.jsx';

const aTableInfo={
  CurPage:1,
  RPP:5,
  SortBy:"ProjectName"
}

class ProjectList extends Component{
  constructor(props){
    super(props)
    this.moveNext=this.moveNext.bind(this);
    this.movePrev=this.movePrev.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchProject(aTableInfo);
  }

  moveNext(){
    let pageInfo={
      CurPage:this.props.projectList.curPage + 1,
      RPP:5,
    }
    this.props.fetchProject(pageInfo);
  }

  movePrev(){
    let pageInfo={
      CurPage:this.props.projectList.curPage - 1,
      RPP:5,
    }
    this.props.fetchProject(pageInfo);
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
      <PageBase title="Project List">
        <div>
          <div className="row">
            <div className="col-lg-9">
              <Projects dataSource={projects} />
            </div>
            <div className="col-lg-3">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  Search
                </div>
                <div className="page-body">
                   <div className="row">
                     <div className="col-lg-10 text-center">

                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="row-fluid">
            <div className="col-lg-12">
              <Pagination pageInfo={aTableInfo} moveNext={this.moveNext} movePrev={this.movePrev} />
            </div>
          </div>
        </div>
      </PageBase>
    )
  }
}

export default ProjectList;
