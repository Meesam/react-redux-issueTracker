import React,{Component,PropTypes} from 'react';

const style = {
  container:{
    position:'relative',
    bottom:360,
    left:360
  }
};

class Pagination extends Component{
  constructor(props){
    super(props)
    this.moveNext=this.moveNext.bind(this);
    this.movePrev=this.movePrev.bind(this);
  }

  moveNext(){
    this.props.moveNext();
  }

  movePrev(){
    this.props.movePrev();
  }

  render(){
    return(
      <div className="row">
        <div className="col-lg-2">
          <input type="button" onClick={this.movePrev} className="btn btn-primary"  value="Prev" />
        </div>
        <div className="col-lg-2 pull-left">
          <input type="button" onClick={this.moveNext} className="btn btn-primary"  value="Next" />
        </div>
       <div className="clearfix"></div>
      </div>
    )
  }
}

Pagination.propTypes={
  pageInfo:PropTypes.object.isRequired,
  moveNext:PropTypes.func.isRequired,
  movePrev:PropTypes.func.isRequired
}

export default Pagination;


