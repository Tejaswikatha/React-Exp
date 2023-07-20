import { useEffect, useState } from "react"
import Count from "./Count";
import Buttons from "./Buttons";
import { connect } from "react-redux";
import {decrementCounter, incrementCounter} from '../../store/actions/counter'
import { useDispatch } from "react-redux";
import { fetchData } from "../../store/actionCreators/products";

 function Counter(props) {
    // const [count, setCount] = useState(0);

    // const handleIncrement = () => {
    //     setCount(count+1);
    // }

    // const handleDecrement = () => {
    //     setCount(Math.max(0, count - 1))
    // }

    const dispatch = useDispatch();


    useEffect(() => {
        // props.fetchData()
        dispatch(fetchData())
    }, [])

    const {count, incrementCounter, decrementCounter, products} = props;
    console.log("====products", products)

    return (
        <>
        <Count count={count}/>
        <Buttons handleDecrement={decrementCounter} handleIncrement={incrementCounter}/>
        </>
    )
}


//mapstatetoprops -> function -> whole store -> destructing reducer slice
//mapdispatchtoprops -> object

const MyCounter = connect(({counterReducer, productsReducer}) => {
    const {count} = counterReducer;
    const {products} = productsReducer
    return {count, products}
}, {
    incrementCounter,
    decrementCounter,
    // fetchData
})(Counter)

export default MyCounter
