import React from 'react';
import PropTypes from 'prop-types';


const FeedbackOptions= ({onLeaveFeedback})=>(
  <div>
  <button className="Good" onClick={onLeaveFeedback}>Good</button>
  <button className="Neutral"onClick={onLeaveFeedback}>Neutral</button>
  <button className="Bad"onClick={onLeaveFeedback}>Bad</button>
 
  
 
</div>

)
FeedbackOptions.propTypes ={
 onLeaveFeedback:PropTypes.func.isRequired
 }


export default FeedbackOptions;