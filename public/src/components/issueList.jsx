import React,{Component,PropTypes} from 'react';
import IssueListComponent from './issueListComponent.jsx';
import IssueDetail from './issueDetails.jsx';
import {addIssueComment,addIssueCommentSuccess,addIssueCommentFailure} from '../actions/issues.jsx';

const aTableInfo={
  CurPage:1,
  RPP:10,
  SortBy:"IssueTitle"
}


class IssueList extends Component{
  constructor(props){
    super(props)
    this.onIssueSelect=this.onIssueSelect.bind(this);
    this.onSearch=this.onSearch.bind(this);
    this.addIssueCommentText=this.addIssueCommentText.bind(this);
    this.state={
      selectId:''
    }
  }

  componentWillMount(){
    this.props.fetchIssues(aTableInfo);
  }

  onIssueSelect(id){
    if(id){
      this.setState({selectId:id})
      this.props.fetchIssueById(id);
    }
  }

  addIssueCommentText(values, dispatch){
    values._id=this.state.selectId;
  return dispatch(addIssueComment(values))
    .then(result => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(addIssueCommentFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response);
      }
      dispatch(addIssueCommentSuccess(result.payload.data));
    });
}

  renderIssueDetail(issueDetail){
    if(issueDetail){
      return (<IssueDetail issueData={issueDetail} addComment={this.addIssueCommentText} />)
    } else {
      return(<span></span>)
    }
  }

  onSearch(searchText){
    if(searchText ==""){
      this.props.fetchIssues(aTableInfo);
    } else {
      aTableInfo.searchText=searchText;
      this.props.fetchIssueByName(aTableInfo)
    }
  }

  render(){
    const { issues,error,loading } = this.props.issuesList
    const {issueDetails}=this.props;
    return(
    <section>
      <IssueListComponent dataSource={issues} onSelect={this.onIssueSelect} onSearch={this.onSearch} />
      {this.renderIssueDetail(issueDetails)}
    </section>
    )
  }
}

export default IssueList;