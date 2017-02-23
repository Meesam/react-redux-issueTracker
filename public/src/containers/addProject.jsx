import ProjectForm from '../components/addProjectForm.jsx';
import { resetNewProject,fetchProjectType,fetchProjectTypeSuccess,fetchProjectTypeFailure , fetchSuggestProject,
  fectchSuggestProjectSuccess, fectchSuggestProjectFailure} from '../actions/project.jsx';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {

    resetMe:() => {
      dispatch(resetNewProject());
    },

    fetchProjectType:()=>{
      dispatch(fetchProjectType()).then((response)=>{
        !response.error ? dispatch(fetchProjectTypeSuccess(response.payload.data.objdata)):dispatch(fetchProjectTypeFailure(response.payload.data))
      });
    },

    fetchSuggestProject:(name)=>{
      dispatch(fetchSuggestProject(name)).then((response)=>{
        !response.error ? dispatch(fectchSuggestProjectSuccess(response.payload.data.objdata)):dispatch(fectchSuggestProjectFailure(response.payload.data))
      });
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newProject: state.projects.newProject,
    projectTypeList:state.projectTypes.projectTypeList,
    suggestList:state.projects.suggestList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);