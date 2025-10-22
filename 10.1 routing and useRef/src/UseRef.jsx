import React, { useState } from 'react';
import { useRef } from "react"

function UseRef() {

    const inputRef = useRef();

    function focusOnInput() {
        // document.getElementById("name");
        inputRef.current.focus();
    }

    return <div>
      Sign up
      <input ref={inputRef} type={'text'}></input>
      <input type={"text"}></input>
      <button onClick={focusOnInput}>submit</button>
    </div>
}


export function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default UseRef