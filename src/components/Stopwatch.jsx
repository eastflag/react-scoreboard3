import React, {useEffect, useRef, useState} from 'react';

const Stopwatch = (props) => {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useInterval(() => {
    // Your custom logic here
    if (isRunning) {
      setTimer(timer => timer + 1);
    }
  }, 1000);

  const handleStopwatch = () => {
    setIsRunning(isRunning => !isRunning);
  }

  const handleReset = () => {
    setTimer(0);
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{timer}</span>
      <button onClick={handleStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Stopwatch;
