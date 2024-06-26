import { configureStore } from "@reduxjs/toolkit";
import count from "./reducers/CountReducer";
import randomNumber from "./reducers/ListNumberReducer";
import switchReducer from "./reducers/SwitchReducer";
import bt4Reducer from "./reducers/Bt4Reducer";
import bt5Reducer from "./reducers/Bt5Reducer";
import bt6Reducer from "./reducers/Bt6Reducer";
import bt7Reducer from "./reducers/Bt7Reducer";
import loginReducer from "./reducers/Bt8Reducer";

export const store = configureStore({
  reducer: {
    count,
    randomNumber,
    switch: switchReducer,
    bt4: bt4Reducer,
    bt5: bt5Reducer,
    bt6: bt6Reducer,
    bt7: bt7Reducer,
    loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
