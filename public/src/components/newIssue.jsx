import React ,{Component , PropTypes} from 'react';
import { Link } from 'react-router';
import { reduxForm, Field, SubmissionError,initialize } from 'redux-form';
import renderField from '../common/renderField.jsx';
import renderTextArea from '../common/renderTextArea.jsx';
import renderDatePicker from '../common/renderDatePicker.jsx'
import { addIssue , addIssueSuccess , addIssueFailure } from '../actions/issues.jsx';
import PageBase from '../common/renderPageBase.jsx';

const aTableInfo={
  CurPage:1,
  RPP:100,
  SortBy:"ProjectName"
}

const validateAndCreateIssue = (values, dispatch) => {
  return dispatch(addIssue(values))
    .then(result => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(addIssueFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response);
      }
      dispatch(addIssueSuccess(result.payload.data));
    });
}

function validate(values) {
  const errors = {};
  if (!values.ProjectName || values.ProjectName.trim() === '') {
    errors.ProjectName = 'Select a Project Name';
  }
  if (!values.IssueTitle || values.IssueTitle.trim() === '') {
    errors.IssueTitle = 'Enter Issue Title';
  }
  if (!values.Description || values.Description.trim() === '') {
    errors.Description = 'Enter some Project Descrition';
  }
  return errors;
}

class NewIssue extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchProject(aTableInfo)
  }

  componentDidMount(){
    if(this.props.issueId){
      this.props.dispatch(initialize('NewIssue',this.props.initialValues));
    } else {
      this.props.dispatch(initialize('NewIssue',{}));
    }
  }

  renderProjectOptions(projects){
    return projects.map((item)=>{
      return(
        <option key={item._id} value={item.ProjectName}>{item.ProjectName}</option>
      )
    })
  }

  renderIssueTypeOptions(){
    let issueTypes=[{Id:1,Name:'Bug'},{Id:2,Name:'Story'},{Id:3,Name:'Task'}]
    return issueTypes.map((item)=>{
      return(
        <option key={item.Id} value={item.Name}>{item.Name}</option>
      )
    })
  }

  renderPriorityOptions(){
    let priority=[{Id:1,Name:'High'},{Id:2,Name:'Low'},{Id:3,Name:'Medium'},{Id:4,Name:'Critical'},{Id:5,Name:'Blocker'}]
    return priority.map((item)=>{
      return(
        <option key={item.Id} value={item.Name}>{item.Name}</option>
      )
    })
  }

  renderSprintOptions(){
    let sprint=[{Id:1,Name:'Sprint 1'},{Id:2,Name:'Sprint 2'},{Id:3,Name:'Sprint 3'},{Id:4,Name:'Sprint 4'},{Id:5,Name:'Sprint 5'}]
    return sprint.map((item)=>{
      return(
        <option key={item.Id} value={item.Name}>{item.Name}</option>
      )
    })
  }

  render(){
    const {handleSubmit, submitting,issue} = this.props;
    const {projects}=this.props.projectList
    return(
      <PageBase title={this.props.issueId ? "Edit Issue" : "Add Issue"}>
        <form onSubmit={ handleSubmit(validateAndCreateIssue) }>
          <div className="form-group">
            <label>Project</label>
            <Field name="Project" className="form-control" component="select">
              <option>Select..</option>
              {this.renderProjectOptions(projects)}
            </Field>
          </div>
          <div className="form-group">
            <Field
              name="IssueTitle"
              type="text"
              component={ renderField }
              label="Issue Title" />
          </div>
          <div className="form-group">
            <label>Issue Type</label>
            <Field name="IssueType" className="form-control" component="select">
              <option>Select..</option>
              {this.renderIssueTypeOptions()}
            </Field>
          </div>
          <div className="form-group">
            <label>Priority</label>
            <Field name="Priority" className="form-control" component="select">
              <option>Select..</option>
              {this.renderPriorityOptions()}
            </Field>
          </div>
          <div className="form-group">
            <label>Sprint</label>
            <Field name="Sprint" className="form-control" component="select">
              <option>Select..</option>
              {this.renderSprintOptions()}
            </Field>
          </div>
          <div className="form-group">
            <Field
              name="Lable"
              type="text"
              component={ renderField }
              label="Lable" />
          </div>
          <div className="form-group">
            <Field
              name="Description"
              type="text"
              component={ renderTextArea }
              label="Description" />
          </div>
          <div className="form-group-inline">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={ submitting }>
              {this.props.issueId ? "Save" : "Create"}
            </button>
            <Link
              to="/issues"
              className="btn btn-default"> Cancel
            </Link>
          </div>
        </form>
      </PageBase>
    );
  }
}

export default reduxForm({
  form: 'NewIssue',
  fields:['_id','IssueTitle','Project','IssueType','Priority','Sprint','Lable','Description'],
  validate,
})(NewIssue)