import React,{ Component ,PropTypes} from 'react';
import IssueActivity from './issueActivities.jsx';

class IssueDetail extends Component{
  constructor(props){
    super(props)
  }

  renderIcon(issueType){
    switch (issueType){
      case "Story":
        return(
          <i className="fa fa-bookmark text-yellow"></i>
        );
      case "Task":
        return(
          <i className="fa fa-info-circle text-purple"></i>
        );
      case "Bug":
        return(
          <i className="fa fa-bell text-red"></i>
        )
    }
  }

  render(){
    console.log('issueDetails ' , this.props.issueData);
    const {issueData}=this.props
    return(
      <div className="col-md-9">
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Issue Detail</h3>
            <div className="box-tools pull-right">
              <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Edit"><i className="fa fa-pencil"></i></button>
              <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Comment"><i className="fa fa-comment"></i></button>
            </div>
          </div>
          <div className="box-body no-padding">
            <div className="mailbox-read-info">
              <h3> {this.renderIcon(issueData.IssueType)} {issueData.IssueTitle}</h3>
              <h5>Reported By: {issueData.Reporter} <span className="mailbox-read-time pull-right">{issueData.StartDate}</span></h5>
            </div>
            <div className="mailbox-controls with-border">
              <div className="row">
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <form className="form">
                    <div className="form-group">
                      Issue Type :-
                      <label>{issueData.IssueType}</label>
                    </div>
                    <div className="form-group">
                      Priority :-
                      <label>{issueData.Priority}</label>
                    </div>
                    <div className="form-group">
                      Status :-
                      <label>{issueData.Status}</label>
                    </div>
                    <div className="form-group">
                      Resolution :-
                      <label>{issueData.Resolution}</label>
                    </div>
                  </form>
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4 col-xs-4">
                  <form className="form">
                    <div className="form-group">
                      Assignee :-
                      <label>{issueData.Assignee}</label>
                    </div>
                    <div className="form-group">
                      Sprint :-
                      <label>{issueData.Sprint}</label>
                    </div>
                    <div className="form-group">
                      Lable :-
                      <label>{issueData.Lable}</label>
                    </div>
                    <div className="form-group">
                      Watchers :-
                      <label>{issueData.Watchers.length}</label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mailbox-read-message">
              <p>
                {issueData.Description}
              </p>
            </div>
          </div>
          <div className="box-footer">
            <ul className="mailbox-attachments clearfix">
              <li>
                <span className="mailbox-attachment-icon"><i className="fa fa-file-pdf-o"></i></span>
                <div className="mailbox-attachment-info">
                  <a href="#" className="mailbox-attachment-name"><i className="fa fa-paperclip"></i> Sep2014-report.pdf</a>
                  <span className="mailbox-attachment-size">
                    1,245 KB
                    <a href="#" className="btn btn-default btn-xs pull-right"><i className="fa fa-cloud-download"></i></a>
                  </span>
                </div>
              </li>
              <li>
                <span className="mailbox-attachment-icon"><i className="fa fa-file-word-o"></i></span>
                <div className="mailbox-attachment-info">
                  <a href="#" className="mailbox-attachment-name"><i className="fa fa-paperclip"></i> App Description.docx</a>
                  <span className="mailbox-attachment-size">
                    1,245 KB
                    <a href="#" className="btn btn-default btn-xs pull-right"><i className="fa fa-cloud-download"></i></a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="box-footer">
           <IssueActivity />
          </div>
        </div>
      </div>
    )
  }

}

IssueDetail.propTypes={
  issueData:PropTypes.object.isRequired
}


export default IssueDetail;