import React,{Component} from 'react';
import Select from 'react-select'


export default class SelectOption extends Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.fetchProjectType();
  }

  onChange(event) {
    if (this.props.input.onChange) {
      this.props.input.onChange(event.value);
    }
  }

  render(){
    const { projectTypes,error,loading } = this.props.projectTypeList;
     const option=projectTypes.map((item)=>{
     return <option key={item._id} value={item.Title}>{item.Title}</option>
    });

    return(
      <Select
        {...this.props}
        value={this.props.input || ''}
        onBlur={() => this.props.input.onBlur(this.props.input)}
        onChange={this.onChange.bind(this)}
        options={option}
      />
    )
  }
}