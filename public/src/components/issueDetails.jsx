import React,{Component,PropTypes} from 'react';

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
              <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Previous"><i className="fa fa-chevron-left"></i></a>
              <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Next"><i className="fa fa-chevron-right"></i></a>
            </div>
          </div>
          <div className="box-body no-padding">
            <div className="mailbox-read-info">
              <h3> {this.renderIcon(issueData.IssueType)} {issueData.IssueTitle}</h3>
              <h5>Reported By: {issueData.Reporter} <span className="mailbox-read-time pull-right">{issueData.StartDate}</span></h5>
            </div>
            <div className="mailbox-controls with-border text-center">
              <div className="btn-group">
                <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Delete"><i className="fa fa-trash-o"></i></button>
                <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Reply"><i className="fa fa-reply"></i></button>
                <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Forward"><i className="fa fa-share"></i></button>
              </div>
              <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Print"><i className="fa fa-print"></i></button>
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
            <div className="pull-right">
              <button className="btn btn-default"><i className="fa fa-reply"></i> Reply</button>
              <button className="btn btn-default"><i className="fa fa-share"></i> Forward</button>
            </div>
            <button className="btn btn-default"><i className="fa fa-trash-o"></i> Delete</button>
            <button className="btn btn-default"><i className="fa fa-print"></i> Print</button>
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