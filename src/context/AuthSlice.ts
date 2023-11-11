import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  validToken: boolean;
  token: string;
}

const initialState: AuthState = {
  validToken: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.validToken = true;
      state.token = action.payload;
    },

    logout: (state) => {
      state.validToken = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
