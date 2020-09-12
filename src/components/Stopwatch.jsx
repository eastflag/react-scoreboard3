import React, {useEffect, useRef, useState} from 'react';

const Stopwatch = (props) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const refIsRunning = useRef(isRunning);

  const tick = () => {
    console.log('tick: ', isRunning, refIsRunning.current);
    // isRunning이 true이면 timer를 1씩 증가
    if (refIsRunning.current) {
      setTimer(timer => timer + 1)
    }
  }

  const handleStopwatch = () => {
    refIsRunning.current = !refIsRunning.current;
    setIsRunning(refIsRunning.current);
  }

  const handleReset = () => {
    setTimer(0);
  }

  useEffect(() => {
    let tickRef = setInterval(tick, 1000);
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
