import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/users";

export interface AuthState {
  validToken: boolean;
  token: string;
}

export interface LoginState {
  email: string;
  password: string;
}

const initialState: AuthState = {
  validToken: false,
  token: "",
};

export const login = createAsyncThunk<
  AuthState,
  LoginState,
  { state: RootState }
>("auth/login", async (data) => {
  try {
    const user = await axios.post(BASE_URL + API_URL + "/login", data);

    return user.data;
  } catch (err) {}
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.validToken = false;
      state.token = "";
      localStorage.removeItem("token");
    },
    setToken: (state, action) => {
      state.validToken = true;
      state.token = action.payload;

      if (action.payload.token)
        localStorage.setItem("token", action.payload.token);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.validToken = true;
      state.token = action.payload.token;

      if (action.payload.token)
        localStorage.setItem("token", action.payload.token);
    });
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
