
import { RecoilRoot, useRecoilValue, useSetRecoilState , memo } from 'recoil'
import './App.css'
import { counterAtom } from './store/atoms/counter'
import { useEffect, useState } from 'react'

function App() {
  return <RecoilRoot>
      <Counter />
  </RecoilRoot>
}



function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
        setCount(c => c+1)
    }, 5000)
    }, []);

  return <div>
    <MemoizedCurrentCOunt />
    <Increase />
    <Decrease />
  </div>
}

const MemoizedCurrentCOunt = memo(CurrentCount);
function CurrentCount() {
    const count = useRecoilValue(counterAtom);

    return <div>
      {count}
    </div>
}



const Decrease = memo(function () {

    const setCount = useSetRecoilState(counterAtom);
    
    function decrease() {
      setCount(c => c - 1);
    }

    return <div>
      <button onClick={decrease}>Decrease</button>
    </div>
})




const Increase = memo(function () {

    const setCount = useSetRecoilState(counterAtom);

    function increase() {
      setCount(c => c + 1);
    }

    return <div>
      <button onClick={increase}>Increase</button> 
    </div>
})

export default App
