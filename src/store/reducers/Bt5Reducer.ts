import {  createSlice } from "@reduxjs/toolkit"

const initialState: boolean = true
const bt5Reducer = createSlice({
    name: "bt5",
    initialState: initialState,
    reducers: {
        toggleBt5: (state)=> !state
    }
})
export const { toggleBt5 } = bt5Reducer.actions
export default bt5Reducer.reducer