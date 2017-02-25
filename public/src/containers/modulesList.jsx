import {connect} from 'react-redux';
import {fetchModules,fetchModulesSuccess,fetchModulesFailure} from '.././actions/modules.jsx';
import ModulesList from '.././components/modulesList.jsx';

const  mapStateToProps=(state)=>{
  return{
    authenticatedUser: state.user.status === 'authenticated' ? true : false,
    user: state.user,
    moduleList:state.modules.moduleList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchModules:()=>{
      dispatch(fetchModules()).then((response)=>{
        !response.error?dispatch(fetchModulesSuccess(response.payload.data.objdata)):dispatch(fetchModulesFailure(response.payload.data))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulesList);