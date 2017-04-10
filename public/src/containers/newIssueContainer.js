/**
 * Created by meesam on 1/4/17.
 */
import React,{PropTypes,Component} from 'react';
import {connect} from 'react-redux';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure} from '../actions/project.jsx';
import NewIssue from '../components/newIssue.jsx';

const mapStateToProps=(state,ownProps)=>{
  return{
    newIssue:state.issues.newIssue,
    issueId:ownProps.id,
    projectList:state.projects.projectList,
    initialValues:state.issues.issue

  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchProject:(pageInfo)=>{
      dispatch(fetchProject(pageInfo)).then((response)=>{
        dispatch(fetchProjectSuccess(response.payload.data.data,pageInfo.CurPage));
      })
      .catch((error)=>{
        dispatch(fetchProjectFailure(error));
      })
    },

    fetchIssueById:(issueId)=>{
      dispatch(fetchIssueById(issueId)).then((response)=>{
        dispatch(fetchIssueByIdSuccess(response.payload.data.data[0]));
      })
      .catch((error)=>{
        dispatch(fetchIssueByIdFailure(error));
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewIssue);
