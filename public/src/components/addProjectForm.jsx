import React ,{Component , PropTypes} from 'react';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderField from './renderField.jsx';
import renderTextArea from './renderTextArea.jsx';
import renderDatePicker from './renderDatePicker.jsx'
import { validateProjectFields, validateProjectFieldsSuccess, validateProjectFieldsFailure } from '../actions/project.jsx';
import { createProject, createProjectSuccess, createProjectFailure, resetNewProject , fetchProjectType} from '../actions/project.jsx';
import SelectOption from '.././pages/projectType.jsx';

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
      //Note: Error's "data" is in result.payload.response.data
      // success's "data" is in result.payload.data
      if (!result.payload.response) { //1st onblur
        return;
      }

      let {data, status} = result.payload.response;
      //if status is not 200 or any one of the fields exist, then there is a field error
      if (response.payload.status != 200 || data.title || data.categories || data.description) {
        //let other components know of error by updating the redux` state
        dispatch(validateProjectFieldsFailure(data));
        throw data; //throw error
      } else {
        //let other components know that everything is fine by updating the redux` state
        dispatch(validateProjectFieldsSuccess(data)); //ps: this is same as dispatching RESET_USER_FIELDS
      }
    });
};

//For any field errors upon submission (i.e. not instant check)
const validateAndCreateProject = (values, dispatch) => {
  console.log('submit values are' + JSON.stringify(values));

  return dispatch(createProject(values))
    .then(result => {
      // Note: Error's "data" is in result.payload.response.data (inside "response")
      // success's "data" is in result.payload.data

      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(createProjectFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response);
      }
      //let other components know that everything is fine by updating the redux` state
      dispatch(createProjectSuccess(result.payload.data)); //ps: this is same as dispatching RESET_USER_FIELDS
    });
}


class AddProject extends Component{
  constructor(props){
    super(props)
  }
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
    //always reset that global state back to null when you REMOUNT
    this.props.resetMe();
  }


  hidesuccessalert(){
    $('#success-alert').fadeOut( 3000, function() {
      $( '#success-alert' ).remove();
    });
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.newProject.project && !nextProps.newProject.error) {
      //this.context.router.push('/');
      //this.props.resetMe();
    }
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
    return(
      <div>
        { this.renderError(newProject) }
        {this.hidesuccessalert()}
        <section className="content-header">
          <h1>
            Add Project
          </h1>
        </section>
        <div className="row">
          <div className="col-xs-9">
            <div className="box">
              <form onSubmit={ handleSubmit(validateAndCreateProject) }>
              <div className="box-body">
                <div className="row">
                  <div className="col-sm-3">
                    <Field
                      name="ProjectName"
                      type="text"
                      component={ renderField }
                      label="Project Name" />
                  </div>
                  <div className="col-sm-3">
                    <Field
                      name="StartDate"
                      type="text"
                      component={ renderDatePicker }
                      label="Start Date" />
                  </div>
                  <div className="col-sm-3">
                    <Field
                      name="EndDate"
                      type="text"
                      component={ renderDatePicker }
                      label="End Date" />
                  </div>
                  <div className="col-sm-3">
                    <label>Project Type</label>
                    <div>
                      <SelectOption />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <Field
                      name="Description"
                      type="text"
                      component={ renderTextArea }
                      label="Project Description" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-1">
                    <br />
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={ submitting }>
                      Submit
                    </button>
                  </div>
                  <div class="col-sm-1">
                    <br />
                    <Link
                      to="/project"
                      className="btn btn-primary"> Cancel
                    </Link>
                  </div>

                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'ProjectForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  //asyncValidate // <--- Uncomment if we want use async validation with db
})(AddProject)