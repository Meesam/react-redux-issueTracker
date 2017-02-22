import React,{Component} from 'react';
import Select from 'react-select'


export default class SelectOption extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchProjectType();
  }

  render(){
    const { projectTypes,error,loading } = this.props.projectTypeList;
     console.log('project type data are ' + JSON.stringify(projectTypes));
     const option=projectTypes.map((item)=>{
     return <option key={item._id} value={item.Title}>{item.Title}</option>
    });

    return(
      <select className="form-control">
        {option}
      </select>
    )
  }
}