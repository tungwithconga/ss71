import { createReducer, createSlice } from "@reduxjs/toolkit"

const initialState: boolean = true
const bt4Reducer = createSlice({
    name: "bt4",
    initialState: initialState,
    reducers: {
        toggleBt4: (state)=> !state
    }
})
export const { toggleBt4 } = bt4Reducer.actions
export default bt4Reducer.reducer