import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment} from '../redux'
import {decrement} from '../redux'

function HooksClickContainer(){
     const count = useSelector(state=> state.count)
     const dispatch= useDispatch()
    return(
        <div>
            <h2> Count - {count}</h2>
            <button onClick= {() =>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}

export default HooksClickContainer