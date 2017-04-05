import React,{Component,PropTypes} from 'react';

class ProjectList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container-fluid">

      </div>
    )
  }

}

ProjectList.propTypes={
  dataSource:PropTypes.array.isRequired
}

export default ProjectList;

