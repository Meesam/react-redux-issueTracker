import React,{Component,PropTypes} from 'react';

class IssueListComponent extends Component{
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

  renderIssue(issues){
    return issues.map((item)=> {
      return (
        <tr key={item._id}>
          <td className="mailbox-star"><a title={item.IssueType} href="#">{this.renderIcon(item.IssueType)}</a></td>
          <td className="mailbox-name"><a title={item.IssueType} href="read-mail.html">{item.IssueTitle}</a></td>
        </tr>
      )
    })
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-3">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">All Issue</h3>
              <div className="box-tools pull-right">
                <div className="has-feedback">
                  <input type="text" className="form-control input-sm" placeholder="Search Issue" />
                    <span className="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
              </div>
            </div>
            <div className="box-body no-padding">
              <div className="mailbox-controls">
                <button className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                <div className="pull-right">
                  1-50/200
                  <div className="btn-group">
                    <button className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                    <button className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                  </div>
                </div>
              </div>
              <div className="table-responsive mailbox-messages">
                <table className="table table-hover table-striped">
                  <tbody>
                  {this.renderIssue(this.props.dataSource)}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="box-footer no-padding">
              <div className="mailbox-controls">
                <button className="btn btn-default btn-sm"><i class="fa fa-refresh"></i></button>
                <div className="pull-right">
                  1-50/200
                  <div className="btn-group">
                    <button className="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i></button>
                    <button className="btn btn-default btn-sm"><i class="fa fa-chevron-right"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

IssueListComponent.propTypes={
  dataSource:PropTypes.array.isRequired
}

export default IssueListComponent;