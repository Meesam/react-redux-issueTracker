import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import { reduxForm, Field, SubmissionError,initialize } from 'redux-form';
import renderField from '../common/renderField.jsx';


class IssueListComponent extends Component{
  constructor(props){
    super(props)
    this.onchange=this.onchange.bind(this)
    this.state={
      searchText:''
    }
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

  onSelect(id,event){
    event.preventDefault();
    this.props.onSelect(id);
  }

  onchange(event){
    this.setState({searchText: event.target.value});
    this.props.onSearch(this.state.searchText);
  }

  renderIssue(issues){
    return issues.map((item)=> {
      return (
        <tr key={item._id}>
          <td className="mailbox-star">{this.renderIcon(item.IssueType)}</td>
          <td className="mailbox-name"><a title={item.IssueType} value={item._id} href="" onClick={(event)=>this.onSelect(item._id,event)}>{item.IssueTitle}</a></td>
        </tr>
      )
    })
  }

  render(){
    return(
        <div className="col-md-3">
          <div className="box box-primary">
            <div className="box-header with-border">
              <h3 className="box-title">All Issue</h3>
              <div className="box-tools pull-right">
                <div className="has-feedback">

                  <input type="text" name="searchText" value={this.state.searchText} onChange={this.onchange} className="form-control input-sm" placeholder="Search Issue" />
                  <span className="fa fa-search form-control-feedback"></span>
                </div>
              </div>
            </div>
            <div className="box-body no-padding">
              <div className="mailbox-controls">
                <Link to="/newissue" className="btn btn-primary btn-sm">Add Issue</Link>
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
    )
  }

}

IssueListComponent.propTypes={
  dataSource:PropTypes.array,
  onSearch:PropTypes.func
}

export default IssueListComponent;