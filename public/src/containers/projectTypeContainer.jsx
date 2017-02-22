import {connect} from 'react-redux';
import {fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure} from '.././actions/project.jsx';
import SelectOption from '.././components/renderSelectOption.jsx';

const mapStateToProps=(state)=>{
  return{
    projectTypeList:state.projectTypes.projectTypeList
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchProjectType:()=>{
      dispatch(fetchProjectType()).then((response)=>{
        !response.error ? dispatch(fetchProjectTypeSuccess(response.payload.data.objdata)):dispatch(fetchProjectTypeFailure(response.payload.data))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);