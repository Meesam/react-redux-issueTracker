import React,{Component,PropTypes} from 'react';

class PageBase extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container-fluid">
        <header className="lead">
          {this.props.title}
        </header>
        <div className="well">
          {this.props.children}
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

PageBase.propTypes={
  title: PropTypes.string.isRequired,
  children: PropTypes.element
}

export default PageBase;