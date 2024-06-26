import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  status: boolean;
}

const listUser: User[] = [
  {
    id: 1,
    name: "Thiều",
    status: true,
  },
  {
    id: 2,
    name: "vải",
    status: false,
  }
];

const listUserReducer = createSlice({
  name: "bt7",
  initialState: listUser,
  reducers: {
    showListUser: (state) => state,
    toggleUserStatus: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state[index].status = !state[index].status;
    },
  },
});

export const { showListUser, toggleUserStatus } = listUserReducer.actions;
export default listUserReducer.reducer;
