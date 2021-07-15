import React,{Component} from 'react';
import PropTypes from 'prop-types'
import FeedbackOptions from './components/feedback/'
import Statistics from './components/statistics'
import SectionTitle from './components/SectionTitle'

class App extends Component {
  static defaultProps={
    
      goodProps:0,
      neutralProps:0,
      badProps:0
     
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
  countTotalFeedback(){
    return this.state.good+this.state.neutral+this.state.bad
  }
  countPositiveFeedbackPercentage(){
    const positivePercentage=this.state.good*100/this.countTotalFeedback()
    return positivePercentage.toFixed(2)
  }
  
  

 
 
  render() {
    const {good,neutral,bad}=this.state;
    
    
       return (
            <>
      <SectionTitle><h1>Please leave feedback</h1> 
        
             <FeedbackOptions  onLeaveFeedback={this.onLeaveFeedback}/>
                

         
             <h3>Statistics</h3>
        </SectionTitle>
        
            <Statistics good={good} bad={bad} neutral={neutral} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
        
        

              
      </>
    );

  }}

    
  


export default App;
