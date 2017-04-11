import React,{Component,PropTypes} from 'react';
import { reduxForm, Field, SubmissionError,initialize } from 'redux-form';
import renderField from '../common/renderField.jsx';

class IssueSearch extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {handleSubmit, submitting} = this.props;
    return(
      <form onSubmit={handleSubmit(this.props.onSearch)}>
        <Field
          name="searchText"
          type="text"
          component={renderField}
          label="Search" />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={ submitting }>
          Submit
        </button>
      </form>
    )
  }
}


IssueSearch.propTypes={
  onSearch:PropTypes.func
}
export default reduxForm({
  form: 'IssueSearch'
})(IssueSearch)