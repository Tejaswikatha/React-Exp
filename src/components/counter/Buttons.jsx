export default function Buttons({handleIncrement, handleDecrement}) {
    return(
        <>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
        </>
    )
}