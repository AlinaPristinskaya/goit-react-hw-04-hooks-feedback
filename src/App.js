import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 8,
    neutral: 5,
    bad: 4
  }

 
  render() {
    const {good, neutral, bad}=this.state;
      const goodParametr=good;
      const neutralParametr=neutral;
      const badParametr=bad;
    return (
      

      <>
        <h1>Please leave feedback</h1>       

        <div>
          <button >Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h3>Statistics</h3>

        <div>
          <p>Общее кол-во: {goodParametr}</p>
          <p>Кол-во выполненных: {neutralParametr}</p>
          <p>Кол-во выполненных: {badParametr}</p>
        </div>        
      </>
    );

  }}

    
  


export default App;
