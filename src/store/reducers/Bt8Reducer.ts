import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
}

const initialUser: User = {
  id: 1,
  userName: "Nguyễn Gia Thiều",
  email: "ngt@gmail.com",
  password: "12345678",
};

const loginReducer = createSlice({
  name: "bt8",
  initialState: {
    user: initialUser,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const { email, password } = action.payload;
      if (email === state.user.email && password === state.user.password) {
        state.isAuthenticated = true;
      } else {
        state.isAuthenticated = false;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = loginReducer.actions;
export default loginReducer.reducer;
