import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { toggleBt4 } from '../../store/reducers/Bt4Reducer'

export default function Bt4() {
    const bt4State = useSelector((state: RootState) => state.bt4)
    const dispatch = useDispatch()
  return (
    <>
        <button onClick={()=>dispatch(toggleBt4())}>{bt4State?"list mode": "grid mode"}</button>
        <div style={{display: bt4State?"flex":""}}>
            <div style={{width: bt4State?"200px":"100px", height:"100px", backgroundColor:"red", margin:"20px"}}>1</div>
            <div style={{width: bt4State?"200px":"100px", height:"100px", backgroundColor:"red", margin:"20px"}}>2</div>
            <div style={{width: bt4State?"200px":"100px", height:"100px", backgroundColor:"red", margin:"20px"}}>3</div>
            <div style={{width: bt4State?"200px":"100px", height:"100px", backgroundColor:"red", margin:"20px"}}>4</div>    
        </div>   
    </>
  )
}
