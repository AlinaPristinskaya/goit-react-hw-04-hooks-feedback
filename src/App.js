import {useState} from 'react';
import FeedbackOptions from './components/Feedback'
import Statistics from './components/Statistics'
import SectionTitle from './components/SectionTitle'

function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad,setBad]=useState(0);
  const option=['good','neutral','bad'];
  

  const onLeaveFeedback = event => {
    const buttonClick=event.target.innerText
    console.log(event)

    switch (buttonClick) {
      case 'good':
        setGood(prev=>prev+1);
        break;

      case 'neutral':
        setNeutral(prev=>prev+1);
        break;

      case 'bad':
        setBad(prev=>prev+1);
        break;  

      default:
        return;
    }}
   
  const countTotalFeedback=()=>{
      return good+neutral+bad
    }
  const countPositiveFeedbackPercentage=()=>{
      const positivePercentage=good*100/countTotalFeedback()
      return Math.round(positivePercentage)
    }
    return (
      <>
         <SectionTitle>
         <h1>Please leave feedback</h1>        
         <FeedbackOptions options={option} onLeaveFeedback={onLeaveFeedback}/>              
         <h3>Statistics</h3>
         </SectionTitle>        
         <Statistics good={good} bad={bad} neutral={neutral} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
      </>);   
}

export default App;


    
  



