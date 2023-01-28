import React, { useState } from 'react';

function WorkCalculator() {
  const [cost, setCost] = useState(0);
  const [wage, setWage] = useState(0);
  const [time, setTime] = useState(0);

  const handleCostChange = (event) => {
    setCost(event.target.value);
  }

  const handleWageChange = (event) => {
    setWage(event.target.value);
  }

  const calculateTime = () => {
    setTime(cost / wage);
  }

  return (
    <div>
      <label>
        Cost:
        <input type="number" value={cost} onChange={handleCostChange} />
      </label>
      <br />
      <label>
        Hourly wage:
        <input type="number" value={wage} onChange={handleWageChange} />
      </label>
      <br />
      <button onClick={calculateTime}>Calculate Time</button>
      <br />
      <p>You need to work {time} hours to earn {cost}</p>
    </div>
  );
}

export default WorkCalculator;