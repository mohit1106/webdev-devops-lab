import React, { useEffect, useState } from 'react';
import Todo from './Todo';

function App() {
    const [count, setCount] = useState(0);
    function increase(){
        setCount(c => c+1);
    }

    useEffect(function() {
        setInterval(increase, 1000);
    }, []);

    return <div>
        <Counter count = {count} />
        <button onClick={increase}>Increase Count</button>
        
        <p></p>
        <Todo />
    </div>
}

function Counter(props) {
    useEffect(function() {
        console.log("mount");

        return function() {
            console.log("unmount");
        }
    }, []);
    
    
    useEffect(function() {
        console.log("count has changed " + props.count);

        return function() {
            console.log("unmount and cleanup when anything changes inside dependency array");
        }
    }, [props.count]); // dependency array

    return <div>
        Counter {props.count}
    </div>
}

export default App