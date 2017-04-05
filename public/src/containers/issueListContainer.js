import {connect} from 'react-redux';
import {fetchIssues,fetchIssuesSuccess,fetchIssuesFailure,fetchIssueById,fetchIssueByIdSuccess,fetchIssueByIdFailure} from '.././actions/issues.jsx';
import IssueList from '.././components/IssueList.jsx';

const mapStateToProps=(state)=>{
  return{
    issuesList:state.issues.issuesList,
    issueDetails:state.issues.issue
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchIssues:(pageInfo)=>{
      dispatch(fetchIssues(pageInfo)).then((response)=>{
        dispatch(fetchIssuesSuccess(response.value.data.objdata,pageInfo.CurPage));
      })
      .catch((error)=>{
        dispatch(fetchIssuesFailure(error));
      })
    },

    fetchIssueById:(issueId)=>{
      dispatch(fetchIssueById(issueId)).then((response)=>{
        dispatch(fetchIssueByIdSuccess(response.value.data.objdata[0]));
      })
      .catch((error)=>{
        dispatch(fetchIssueByIdFailure(error));
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);

