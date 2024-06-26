import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = true

const switchReducer = createSlice({
    name: 'switch',
    initialState,
    reducers: {
        toggleSwitch: (state: boolean) => !state
    }
})

export const { toggleSwitch } = switchReducer.actions
export default switchReducer.reducer
