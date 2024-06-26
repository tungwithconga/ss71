import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "en";

const bt6Reducer = createSlice({
  name: 'bt6',
  initialState,
  reducers: {
    toggleBt6: (state) => state === 'en' ? 'vi' : 'en'
  }
});

export const { toggleBt6 } = bt6Reducer.actions;
export default bt6Reducer.reducer;
