import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ramdomNumber } from '../../store/reducers/ListNumberReducer'
export default function ListNumber() {
    const state:any = useSelector(state => state)
    const dispatch = useDispatch()
  return (
    <div>
        <p>list number : [{state.ramdomNumber.join(", ")}]</p>
        <button onClick={()=>dispatch(ramdomNumber())}>ramdom</button>
    </div>
  )
}
