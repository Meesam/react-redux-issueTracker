import React,{Component,PropTypes} from 'react'
import moment from 'moment';
import _ from 'lodash';

function formatTimeLineData(timeLineData){
  let resultData=[];
  let obj={
    date:'',
    data:[]
  }
  timeLineData.forEach((item,index)=>{
    let obj={
      date:moment(item.UpdateDate).format("DD MMM YYYY"),
      data:timeLineData.filter((el)=>{
         return moment(el.UpdateDate).format("DD MMM YYYY")==moment(item.UpdateDate).format("DD MMM YYYY")
      }),
      index:index
    }
    if(resultData.indexOf(obj.date)==-1){
      resultData.push(obj);
    }
  })
   return _.uniqBy(resultData, function (e) {
    return e.date;
  });
}

class IssueTimeLine extends Component {
  constructor(props) {
    super(props)
  }

  renderChnages(dataSource){
    return dataSource.map((item)=>{
      return (
        <li key={item._id}>
          <i class="fa fa-pencil bg-blue"></i>
          <div class="timeline-item">
            <h3 class="timeline-header"><a href="#">{item.UpdateBy}</a> made changes</h3>
            <div class="timeline-body">
              {item.UpdateDescription}
            </div>
          </div>
        </li>
      )
    })
  }

  renderActivity(timeLineData) {
   let resultData=[]
    resultData  = formatTimeLineData(timeLineData)
    return resultData.map((item) => {
      return (
        <div class="col-md-12" key={item.index}>
          <ul class="timeline">
            <li class="time-label">
              <span class="bg-red">
                {item.date}
              </span>
            </li>
            {this.renderChnages(item.data)}
            <li>
              <i class="fa fa-clock-o bg-gray"></i>
            </li>
          </ul>
        </div>
      )
    })
  }

  render() {
    const {timeLineData}=this.props;
    return (
      <div>
        {this.renderActivity(timeLineData)}
      </div>
    )
  }
}

IssueTimeLine.propTypes={
  timeLineData:PropTypes.array
}

export default IssueTimeLine;