import React,{Component,PropTypes} from 'react';
import IssueListComponent from './issueListComponent.jsx';

const aTableInfo={
  CurPage:1,
  RPP:20,
  SortBy:"IssueTitle"
}

class IssueList extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchIssues(aTableInfo);
  }

  render(){
    const { issues,error,loading } = this.props.issuesList
    return(
      <div>
       <IssueListComponent dataSource={issues} />
      </div>
    )
  }
}

export default IssueList;