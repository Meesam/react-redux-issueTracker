import ProjectForm from '../components/addProjectForm.jsx';
import { resetNewProject } from '../actions/project.jsx';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewProject());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newProject: state.projects.newProject
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);