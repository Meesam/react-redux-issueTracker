import React ,{Component} from 'react'
import NewIssueContainer from '../containers/newIssueContainer';


export default class NewIssueIndex extends Component{
  render(){
    return(
      <NewIssueContainer id={this.props.params.Id} />
    )
  }
}
