import { useEffect, useState } from "react";

export function useDebounce(value: string | number | boolean, time: number = 500) {
    const [debouncedState, setDebouncedState] = useState(value)
    
    useEffect(() => {    
        const timmer = setTimeout(() => {
            setDebouncedState(value)
        }, time);

        return () => {
            clearTimeout(timmer)
        }
    }, [])

    return debouncedState
}
