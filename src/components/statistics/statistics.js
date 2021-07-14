import React,{Component} from 'react';
import PropTypes from 'prop-types'


class Statistics extends Component{
  static propTypes={
    good:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number,
    total:PropTypes.number,
    positivePercentage:PropTypes.string
  }
    
         
   
    render(){
      const { good, neutral, bad,total,positivePercentage}=this.props;
      
      
        
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