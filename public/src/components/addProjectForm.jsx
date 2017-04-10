import React ,{Component , PropTypes} from 'react';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from '../common/renderField.jsx';
import renderTextArea from '../common/renderTextArea.jsx';
import renderDatePicker from '../common/renderDatePicker.jsx'
import { validateProjectFields, validateProjectFieldsSuccess, validateProjectFieldsFailure } from '../actions/project.jsx';
import { addProject, addProjectSuccess, addProjectFailue } from '../actions/project.jsx';
import PageBase from '../common/renderPageBase.jsx';


//Client side validation
function validate(values) {
  const errors = {};
  if (!values.ProjectName || values.ProjectName.trim() === '') {
    errors.ProjectName = 'Enter a Project Name';
  }
  if (!values.ProjectType || values.ProjectType.trim() === '') {
    errors.ProjectType = 'Enter Project Type';
  }
  if (!values.Description || values.Description.trim() === '') {
    errors.Description = 'Enter some Project Descrition';
  }
  return errors;
}

//For instant async server validation
const asyncValidate = (values, dispatch) => {
  return dispatch(validateProjectFields(values))
    .then((result) => {
      if (!result.payload.response) {
        return;
      }

      let {data, status} = result.payload.response;
      if (response.payload.status != 200 || data.title || data.categories || data.description) {
        dispatch(validateProjectFieldsFailure(data));
        throw data;
      } else {
        dispatch(validateProjectFieldsSuccess(data));
      }
    });
};


const validateAndCreateProject = (values, dispatch) => {
  return dispatch(addProject(values))
    .then(result => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(addProjectFailue(result.payload.response.data));
        throw new SubmissionError(result.payload.response);
      }
      dispatch(addProjectSuccess(result.payload.data));
    });
}


class AddProject extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount() {
    //this.props.resetMe();
    this.props.fetchProjectType();
  }

  hidesuccessalert(){
    $('#success-alert').fadeOut( 3000, function() {
      $( '#success-alert' ).remove();
    });
  }

  renderError(newProject) {
    if (newProject && newProject.error) {
      return (
        <div className="alert alert-danger">
          { newProject ? newProject.error : '' }
        </div>
      );
    } else if(newProject.project && newProject.project.Status==='success') {
      return (
        <div id="success-alert" className="alert alert-success alert-dismissable">
          <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h4>  <i className="icon fa fa-check"></i> Success!</h4>
          Project Addedd successfully !
        </div>
      )
    } else{
      return <span></span>
    }
  }

  renderProjectTypeOptions(projectTypes){
    return projectTypes.map((item)=>{
      return(
         <option key={item._id} value={item.Title}>{item.Title}</option>
      )
    })
  }

  render(){
    const {handleSubmit, submitting, newProject} = this.props;
    const { projectTypes,error,loading } = this.props.projectTypeList;
    return(
      <PageBase title="Add Project">
        <form onSubmit={ handleSubmit(validateAndCreateProject) }>
          <div className="form-group">
            <Field
              name="ProjectName"
              type="text"
              component={ renderField }
              label="Project Name" />
          </div>
          <div className="form-group">
            <Field
              name="StartDate"
              type="text"
              component={ renderDatePicker }
              label="Start Date" />
          </div>
          <div className="form-group">
            <Field
              name="EndDate"
              type="text"
              component={ renderDatePicker }
              label="End Date" />
          </div>
          <div className="form-group">
            <label>Project Type</label>
            <div>
              <Field name="ProjectType" className="form-control" component="select">
                <option>Select..</option>
                {this.renderProjectTypeOptions(projectTypes)}
              </Field>
            </div>
          </div>
          <div className="form-group">
            <Field
              name="Description"
              type="text"
              component={ renderTextArea }
              label="Project Description" />
          </div>
              <div className="form-group-inline">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={ submitting }>
                  Submit
                </button>
                <Link
                  to="/project"
                  className="btn btn-default"> Cancel
                </Link>
              </div>
        </form>
      </PageBase>
    )
  }
}

export default reduxForm({
  form: 'ProjectForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  //asyncValidate // <--- Uncomment if we want use async validation with db
})(AddProject)