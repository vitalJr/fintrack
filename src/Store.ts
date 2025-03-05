import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./reducers/Authentication";
import RegisterUserReducer from "./reducers/RegisterUser";
import MovimentReducer from "./reducers/Moviment";

const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    registerUser: RegisterUserReducer,
    moviment: MovimentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
