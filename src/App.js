import React,{Component} from 'react';
import PropTypes from 'prop-types'
import FeedbackOptions from './components/feedback/'
import Statistics from './components/statistics';

class App extends Component {
  static defaultProps={
    
      goodProps:6,
      neutralProps:8,
      badProps:2
     
  }
  static propTypes={
    goodProps:PropTypes.number,
    neutralProps:PropTypes.number,
    badProps:PropTypes.number
  }
  state = {
    good: this.props.goodProps,
    neutral: this.props.neutralProps,
    bad: this.props.badProps
  }
  onLeaveFeedback=(event)=>{
    if (event.target.className==='Good'){
      this.setState((prevState)=>{return {good:prevState.good+1}})
    } else if(event.target.className==='Neutral'){
      this.setState((prevState)=>{return {neutral:prevState.neutral+1}})
    } else if (event.target.className==='Bad'){
      this.setState((prevState)=>{return {bad:prevState.bad+1}})
    }

  }
 
  
 
  render() {
    const {good,neutral,bad}=this.state;
    
    
       return (
      

      <>
        <h1>Please leave feedback</h1> 
        <FeedbackOptions  options={this.options} onLeaveFeedback={this.onLeaveFeedback}/>
              

       
        <h3>Statistics</h3>
        <Statistics good={good} bad={bad} neutral={neutral} total={0} positivePercentage={0}/>

              
      </>
    );

  }}

    
  


export default App;
