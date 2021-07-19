import React,{Component} from 'react';
import PropTypes from 'prop-types'
import FeedbackOptions from './components/Feedback/'
import Statistics from './components/Statistics'
import SectionTitle from './components/SectionTitle'

class App extends Component {
  static defaultProps={
      good:0,
      neutral:0,
      bad:0
  }
  static propTypes={
    goods:PropTypes.number,
    neutral:PropTypes.number,
    bad:PropTypes.number
  }
  state = {
    good: 0,
    neutral: 7,
    bad: 2
  }
  onLeaveFeedback=e=>{
   const buttonClick= e.target.innerText;
   this.setState(prevState=>({[buttonClick]:prevState[buttonClick]+1}))
    
     

  }
  
  countTotalFeedback(){
    return this.state.good+this.state.neutral+this.state.bad
  }
  countPositiveFeedbackPercentage(){
    const positivePercentage=this.state.good*100/this.countTotalFeedback()
    return Math.round(positivePercentage)
  }
  
  

 
 
  render() {
    const {good,neutral,bad}=this.state;
    
    
       return (
            <>
      <SectionTitle>
      <h1>Please leave feedback</h1>        
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>              
      <h3>Statistics</h3>
      </SectionTitle>        
      <Statistics good={good} bad={bad} neutral={neutral} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            </>
    );

  }}

    
  


export default App;
