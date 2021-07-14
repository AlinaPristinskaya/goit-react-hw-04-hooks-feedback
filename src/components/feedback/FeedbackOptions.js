import React, { Component } from 'react';

class FeedbackOptions extends Component{
 
  render(){
    return(
    <div>
          <button className="Good" onClick={this.props.onLeaveFeedback}>Good</button>
          <button className="Neutral"onClick={this.props.onLeaveFeedback}>Neutral</button>
          <button className="Bad"onClick={this.props.onLeaveFeedback}>Bad</button>
        </div>

  )
    

  }
}

export default FeedbackOptions;