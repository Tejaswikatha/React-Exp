import { useState } from "react"
import Count from "./Count";
import Buttons from "./Buttons";

export function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(Math.max(0, count - 1))
    }


    return (
        <>
        <Count count={count}/>
        <Buttons handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
        </>
    )
}