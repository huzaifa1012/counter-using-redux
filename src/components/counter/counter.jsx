
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, clearAll } from "../../store/slice/counterSlice"

const Counter = () => {

    let data = useSelector((state) => { return state.counters })
    let dispatch = useDispatch()

    const increaseNum = () => {
        dispatch(
            increment()
        )
          };

    const decreaseNum = () => {
        dispatch(
            decrement()
        )
    }


    return (
        <>
            <div className="main-body">
                <div className="head">
                    <h1> COUNTER USING REDUX TOOLKIT </h1>
                </div>
                <div className="main-counter">
                    <h1 className='counter-h1'>{data.value  }</h1>
                    <div className="mb-2">
                        <Button onClick={() => { increaseNum() }} variant="primary" size="lg">
                            Increment
                        </Button>{' '}
                        <Button onClick={() => { decreaseNum() }} variant="secondary" size="lg">
                            Decrement
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter