import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import './WorkCalculator.css';

function WorkCalculator() {
  const [cost, setCost] = useState(0);
  const [wage, setWage] = useState(0);
  const [time, setTime] = useState(0);
 

  /*const handleCostChange = (event) => {
    setCost(event.target.value);
    }*/

    /*const handleWageChange = (event) => {
    setWage(event.target.value);
  }*/

    const handleCostChange = (event) => {
      let value = parseFloat(event.target.value);
      if (value < 0) {
      value = 0;
      }
      value = value.toFixed(2);
      setCost(value);
      };


      const handleWageChange = (event) => {
        let value = parseFloat(event.target.value);
        if (value < 0) {
        value = 0;
        }
        value = value.toFixed(2);
        setWage(value);
        };


  const calculateTime = () => {
    if (cost === 0 || wage === 0) {
      alert("Please enter a valid value for cost and wage.");
      return;
    }
    let time = (cost / wage) * 60;
    time = time.toFixed(0);
    setTime(time);
    };


  return (
    <div>
      <h1>Time is money!</h1>
      <h2>Calculate how many minutes you have to work to afford the item you want to purchase</h2>
      <label className="label">
        Cost of item: $
        <input type="number" value={cost} onChange={handleCostChange} className="cost-input"/>
      </label>
      <br />
      <label className="label">
        Current hourly wage: $
        <input type="number" value={wage} onChange={handleWageChange} />
      </label>
      <br />
      <button onClick={calculateTime}>Calculate Time</button>
      <br />
      <p>You need to work {time} minutes to afford this item!</p>
      <br />
      <Timer wage={wage} setWage={setWage} time={time} setTime={setTime}/>
    </div>
  );
}

export default WorkCalculator;