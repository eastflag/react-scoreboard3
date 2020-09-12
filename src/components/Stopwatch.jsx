import React, {useEffect, useState} from 'react';

const Stopwatch = (props) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  let tickRef;

  const tick = () => {
    console.log('tick: ', isRunning);
    // isRunning이 true이면 timer를 1씩 증가
    if (isRunning) {
      setTimer(timer + 1)
    }
  }

  const handleStopwatch = () => {
    setIsRunning(!isRunning);
  }

  const handleReset = () => {
    setTimer(0);
  }

  useEffect(() => {
    tickRef = setInterval(tick, 1000);
    return () => {
      clearInterval(tickRef);
    }
  }, []);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{timer}</span>
      <button onClick={handleStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Stopwatch;
