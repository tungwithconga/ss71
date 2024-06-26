import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from '../../store/reducers/CountReducer'

export default function Count() {
    const state: any = useSelector(state => state)
    const dispatch = useDispatch()
  return (
    <div>
          <p>giá trị count: {state.count}</p>
          <button onClick={()=>dispatch(increase())}>tăng</button>
          <button onClick={()=>dispatch(decrease())}>giảm</button>
          <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}
