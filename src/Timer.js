import React, { useState, useEffect } from "react";
import './Timer.css';

function Timer({wage}) {
const [seconds, setSeconds] = useState(0);
const [timer, setTimer] = useState(0);
const [amountEarned, setAmountEarned] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  
  useEffect(() => {
    let interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let earned = (seconds / 3600) * wage;
    setAmountEarned(earned.toFixed(2));
  }, [seconds, wage]);


  return (
    <div>
      <h1>Timer</h1>
      <p className="timer">{Math.floor(timer / 60)} min : {(timer % 60).toString().padStart(2, "0")} sec</p>
      <p>You could have earned ${amountEarned} based on your hourly wage with the time you spent on this page!</p>
    </div>
  );
}

export default Timer;
