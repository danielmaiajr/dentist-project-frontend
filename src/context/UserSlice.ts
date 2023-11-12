import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/users";

export interface UserState {
  id: Number;
  email: string;
}

const initialState: UserState = {
  id: 0,
  email: "",
};

export const getUser = createAsyncThunk<
  UserState,
  undefined,
  { state: RootState }
>("user/getUser", async (arg, { getState }) => {
  const state = getState();
  const config = {
    headers: { Authorization: `Bearer ${state.auth.token}` },
  };
  try {
    const user = await axios.get(BASE_URL + API_URL + "/", config);
    return user.data;
  } catch (error) {
    console.error(error);
    return {};
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      (state.id = action.payload.id), (state.email = action.payload.email);
    });
  },
});

export default userSlice.reducer;
