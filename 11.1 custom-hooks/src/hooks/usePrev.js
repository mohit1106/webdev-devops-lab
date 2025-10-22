import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value; 
    }, [value]);

    return ref.current; //initially undefined
    // it returns first, effect gets called after it
}

