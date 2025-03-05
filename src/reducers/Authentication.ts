import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Profile } from "../type/authentication";
import loginService from "../service/loginService";

export interface AuthenticationState {
  isLoading: boolean;
  error: string;
  user: Login;
  profile: Profile;
}

const initialState: AuthenticationState = {
  isLoading: false,
  error: "",
  user: {
    name: "",
    password: "",
    email: "",
  },
  profile: {
    username: "",
    email: "",
    token: "",
    userReference: "",
  },
};

interface LoginPayload {
  email: string;
  password: string;
}

export const fetchLogin = createAsyncThunk(
  "authentication/login",
  async (user: LoginPayload): Promise<Profile> => {
    const response = await loginService.login(user.email, user.password);

    const profile: Profile = {
      username: response.user.email || "",
      email: response.user.email || "",
      token: response.user.refreshToken || "",
      userReference: response.user.uid || "",
    };

    return profile;
  }
);

// export const fetchLoginWithGoogle = createAsyncThunk(
//   "authentication/loginGoogle",
//   async () => {
//     const response = await loginService.loginGoogle();
//     console.log(response);
//     return response;
//   }
// );

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("Profile:", action.payload);
      state.profile = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "An unknown error occurred";
    });
  },
});

export default authenticationSlice.reducer;
