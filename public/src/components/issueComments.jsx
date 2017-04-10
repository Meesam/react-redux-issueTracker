import React,{Component,PropTypes} from 'react';

class IssueComment extends Component{

  render(){
    return(
      <div class="col-md-12">
        <div class="box box-widget">
          <div class='box-footer box-comments'>
            <div class='box-comment'>
              <img class='img-circle img-sm' src='styles/img/user3-128x128.jpg' alt='user image' />
                <div class='comment-text'>
                      <span class="username">
                        Maria Gonzales
                        <span class='text-muted pull-right'>8:03 PM Today</span>
                      </span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </div>
            </div>
            <div class='box-comment'>
              <img class='img-circle img-sm' src='styles/img/user5-128x128.jpg' alt='user image' />
                <div class='comment-text'>
                      <span class="username">
                        Nora Havisham
                        <span class='text-muted pull-right'>8:03 PM Today</span>
                      </span>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English.
                </div>
            </div>
          </div>
          <div class="box-footer">
            <form action="#" method="post">
              <img class="img-responsive img-circle img-sm" src="styles/img/user4-128x128.jpg" alt="alt text" />
                <div class="img-push">
                  <input type="text" class="form-control input-sm" placeholder="Press enter to post comment" />
                </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default IssueComment;