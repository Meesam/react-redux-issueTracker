import React,{Component,PropTypes} from 'react';
import IssueListComponent from './issueListComponent.jsx';
import IssueDetail from './issueDetails.jsx';

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
  }

  componentWillMount(){
    this.props.fetchIssues(aTableInfo);
  }

  onIssueSelect(id){
    if(id){
      this.props.fetchIssueById(id);
    }
  }

  renderIssueDetail(issueDetail){
    if(issueDetail){
      return (<IssueDetail issueData={issueDetail} />)
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