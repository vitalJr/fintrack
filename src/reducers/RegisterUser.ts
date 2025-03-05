import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Login } from "../type/authentication";
import { Register } from "../type/register";
import loginService from "../service/loginService";
import registerService from "../service/registerService";

interface RegisterUserState {
  isLoading: boolean;
  error: string;
  user: Login;
  register: Register;
}

const initialState: RegisterUserState = {
  isLoading: false,
  error: "",
  user: {
    name: "",
    password: "",
    email: "",
  },
  register: {
    name: "",
    email: "",
    idLogin: "",
  },
};

export const registerUser = createAsyncThunk(
  "registerUser/register",
  async (user: Login): Promise<void> => {
    const loginCreated = await loginService.addLogin(user);

    const register: Register = {
      name: user.name,
      email: user.email,
      idLogin: loginCreated.user.uid,
    };

    await registerService.addRegister(register);
  }
);

const registerUserSlice = createSlice({
  name: "registerUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error";
    });
  },
});

export default registerUserSlice.reducer;
