import {useSelector, useDispatch} from "react-redux";

export default function MainPage() {

    const {number} = useSelector(state => state)

    const dispatch = useDispatch()

    const numberPlus = () => {
        dispatch({
            type: "NUMBER_PLUS"
        })
    }

    const numberMinus = () => {
        dispatch({
            type: "NUMBER_MINUS"
        })
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={numberMinus}>-</button>
            <button onClick={numberPlus}>+</button>
        </div>
    )
}