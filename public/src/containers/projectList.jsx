import {connect} from 'react-redux';
import {fetchProject,fetchProjectSuccess,fetchProjectFailure} from '.././actions/project.jsx';
import ProjectList from '.././components/projectList.jsx';

const mapStateToProps=(state)=>{
  return{
    projectList:state.projects.projectList,
    authenticatedUser: state.user.status === 'authenticated' ? true : false,
    user: state.user,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
     fetchProject:()=>{
        dispatch(fetchProject()).then((response)=>{
          !response.error ? dispatch(fetchProjectSuccess(response.payload.data.objdata)):dispatch(fetchProjectFailure(response.payload.data))
        });
     }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

