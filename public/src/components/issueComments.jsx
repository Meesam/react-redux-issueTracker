import React,{Component,PropTypes} from 'react';
import { reduxForm, Field, SubmissionError,initialize } from 'redux-form';
import renderTextArea from '../common/renderTextArea.jsx';
import renderField from '../common/renderField.jsx';

class IssueComment extends Component{
  constructor(props){
    super(props)
  }

  renderComment(comments){
    return comments.map((item)=>{
      return(
        <div class='box-footer box-comments' key={item._id}>
          <div class='box-comment'>
            <img class='img-circle img-sm' src='styles/img/user1-128x128.jpg' alt='user image' />
            <div class='comment-text'>
              <span class="username">
                {item.CommentBy}
                <span class='text-muted pull-right'>8:03 PM Today</span>
              </span>
              {item.CommentText}
            </div>
          </div>
        </div>
      )
    })
  }

  render(){
    const {handleSubmit, submitting, commentData} = this.props;
    return(
      <div class="col-md-12">
        <div class="box box-widget">
          {this.renderComment(commentData)}
          <div class="box-footer">
            <form onSubmit={handleSubmit(this.props.addComment)}>
                <div class="img-push">
                  <Field
                    name="CommentText"
                    type="text"
                    component={ renderField }
                    label="Comment" />
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'IssueComment'
})(IssueComment)
