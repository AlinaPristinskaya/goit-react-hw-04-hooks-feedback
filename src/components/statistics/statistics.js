import React,{Component} from 'react';
import PropTypes from 'prop-types'


class Statistics extends Component{
    static propTypes={
        total:PropTypes.number.isRequired,
        positivePercentage:PropTypes.number.isRequired
      }
    state={
        total:this.props.total,
        positivePercentage:this.props.positivePercentage,
    };
    options=()=>{
      const allTotal=[this.props.good,this.props.neutral,this.props.bad];
      const fff=allTotal.reduce((acc, cur) => acc + cur)
      return fff;
  
    }
    
    //countTotalFeedback = () => { };
        
    
    //countPositiveFeedbackPercentage     
   
    render(){
      const { good, neutral, bad}=this.props;
      const {total, positivePercentage}=this.state;
      
        
        return (
            <div>
          <p>Кол-во хороших комментариев: {good}</p>
          <p>Кол-во нейтральных комментариев: {neutral}</p>
          <p>Кол-во плохих комментариев: {bad}</p>
          <p>Общее кол-во комментариев:{total}</p>
          <p>% хороших комментариев от общего кол-ва:{positivePercentage}%</p>
        </div>

        )
    }
}



export default Statistics;