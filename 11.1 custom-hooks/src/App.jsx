
import { useState } from 'react';
import './App.css'

import {useFetch, usePostTitle} from './hooks/useFetch'; // import useFetch custom hook
import { usePrev } from './hooks/usePrev';

import { useDebounce } from './hooks/useDebounce';

// custom hook - fxn name must have 'use' prefix, and use another hook inside itself.
function useCounter() {
    const [count, setCount] = useState(0);
    function increaseCount() {
        setCount(c => c + 1)
    }
    return {
        count: count,
        increaseCount: increaseCount
    }
}







function App() {
    // usefetch
    const postTitle = usePostTitle();
    const [currentPost, setCurrentPost ] = useState(1);
    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);
    

    // useDebounce
    function sendDataToBackend() {
        fetch("api.com/");
    }
    const debouncedFn = useDebounce(sendDataToBackend);


    
    // useprev
    const [state, setState ]  = useState(0);
    const prev = usePrev(state);
    if (loading) {
        return <div>
            wait, its cuming.....
        </div>
    }


    
    
    return (
        <div>
            Post Title - {postTitle} <br></br>

            <button onClick={() => setCurrentPost(1)}>Post 1</button>
            <button onClick={() => setCurrentPost(2)}>Post 2</button>
            <button onClick={() => setCurrentPost(3)}>Post 3</button>
            UseFetch - {JSON.stringify(finalData)}


            <Counter />
            <Counter />


            <br></br> <br></br> <br></br> <h2>usePrev hook</h2>
            <p>{state}</p>
            <button onClick={() => {setState((curr) => curr+1)}}>click me</button>
            <p>previous value was {prev} </p>



            <br></br> <br></br> <br></br> <h2>useDebounce hook</h2>
            <input type='text' onChange={debouncedFn}></input>
        </div>
    )
}



function Counter() {
    const {count, increaseCount} = useCounter(); // using custom hook
    return (
        <div>
            <button onClick={increaseCount}>Increase {count}</button>
        </div>
    )
}

export default App
