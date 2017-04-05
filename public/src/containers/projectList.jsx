import {connect} from 'react-redux';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure,asyncValidate} from '.././actions/project.jsx';
import ProjectList from '.././components/projectList.jsx';

const mapStateToProps=(state)=>{
  return{
    projectList:state.projects.projectList
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

