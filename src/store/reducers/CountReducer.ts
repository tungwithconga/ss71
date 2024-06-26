import { createSlice } from "@reduxjs/toolkit"

const countState: number = 0
const countreducer = createSlice({
    name: "countReducer",
    initialState: countState,
    reducers: {
        increase: (state) => state + 1,
        decrease: (state) => state - 1,
        reset: (state) => state = 0
    }
})
export const { increase, decrease, reset } = countreducer.actions
export default countreducer.reducer