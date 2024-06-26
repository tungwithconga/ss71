import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSwitch } from '../../store/reducers/SwitchReducer'
import { RootState } from '../../store/store'

const Switch: React.FC = () => {
    const switchState = useSelector((state: RootState) => state.switch)
    const dispatch = useDispatch()

    return (
        <div style={{ backgroundColor: switchState ? 'black' : 'white', height: '100px', color: switchState ? 'white' : 'black' }}>
            <button onClick={() => dispatch(toggleSwitch())}>
                {switchState ? 'đen' : 'trắng'}
            </button>
        </div>
    )
}

export default Switch
