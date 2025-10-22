import React, { useEffect, useState } from 'react';

function App() {
  
  let [showStopwatch, setShowStopwatch] = useState(true);
  useEffect(function(){
      setInterval(function() {
        setShowStopwatch(show => !show)
      }, 5000);
  }, [])

  return (
      <div>
        <h3>Stopwatch comes and disaapears after 5 second, due to conditional rendering</h3>
        {showStopwatch && <Stopwatch />}
        <Counter />
      </div>
  )
}

function Stopwatch(){
    const [count, setCount] = useState(0);
    
    useEffect(function() {
      let clock = setInterval(function(){
        setCount(function(count) {
          return count+1;
        })
      }, 1000);

      return function(){  // cleanup
        clearInterval(clock)
      }
    }, []);

    return (
      <div>
        <p>StopWatch: {count}</p>
      </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    
    function increaseCount(){
      setCount(count+1);
    }
    function decreaseCount(){
      setCount(count-1);
    }
    function resetCount(){
      setCount(0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increment</button>
            <button onClick={decreaseCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default App
