/**
 * Created by meesam on 1/4/17.
 */
import {connect} from 'react-redux';
import {addIssue,addIssueSuccess,addIssueFailure} from '../actions/issues.jsx';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure} from '../actions/project.jsx';
import NewIssue from '../components/NewIssue.jsx';

const mapStateToProps=(state,ownProps)=>{
  return{
    newIssue:state.issues.newIssue,
    issueId:ownProps.id,
    projectList:state.projects.projectList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchProject:(pageInfo)=>{
      dispatch(fetchProject(pageInfo)).then((response)=>{
        dispatch(fetchProjectSuccess(response.value.data.objdata));
      })
      .catch((error)=>{
        dispatch(fetchProjectFailure(error));
      })
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewIssue);
