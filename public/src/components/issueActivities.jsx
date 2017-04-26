import React,{Component,PropTypes} from 'react';
import IssueComment from './issueComments.jsx';
import IssueTimeLine from './issueTimeLine.jsx';

class IssueActivities extends Component{
  constructor(props){
    super(props)
  }

  renderActivity(){
    if(this.props.activityData){
      return(
        <IssueTimeLine timeLineData={this.props.activityData} />
      )
    }
  }

  render(){
    return(
      <div class="col-md-12">
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs pull-right">
            <li><a href="#tab_1-1" data-toggle="tab">Activities</a></li>
            <li class="active"><a href="#tab_2-2" data-toggle="tab">Comments</a></li>
            <li class="pull-left header"><i class="fa fa-th"></i>Activity</li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane" id="tab_1-1">
              {this.renderActivity()}
              <div className="clearfix"></div>
            </div>
            <div class="tab-pane active" id="tab_2-2">
              <IssueComment addComment={this.props.addComment} commentData={this.props.commentData} />
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

//activityData

IssueActivities.propTypes={
  activityData:PropTypes.array,
  addComment:PropTypes.func,
  commentData:PropTypes.array
}

export default IssueActivities;

