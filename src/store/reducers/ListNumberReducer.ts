import { createSlice } from "@reduxjs/toolkit"

const listNumber: number[] = []
const listNumberReducer = createSlice({
    name: "listNumberReducer",
    initialState: listNumber,
    reducers: {
        ramdomNumber: (state) => {
            state.push(Math.floor(Math.random()*99))
        }
    }
})
export const { ramdomNumber } = listNumberReducer.actions
export default listNumberReducer.reducer