import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/users";

const getAuthConfig = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export interface Usertate {
  id?: number;
  email?: string;
  name?: string;
}

export interface PutUserByIdType {
  name: string;
}

const initialState: Usertate = {};

export const getUserById = createAsyncThunk<
  Usertate,
  undefined,
  { state: RootState }
>("user/getUserById", async (data, { getState }) => {
  const state = getState();

  try {
    const user = await axios.get(
      BASE_URL + API_URL + "/",
      getAuthConfig(state.auth.token)
    );

    return user.data;
  } catch (err) {}
});

export const putUserById = createAsyncThunk<
  Usertate,
  PutUserByIdType,
  { state: RootState }
>("user/putUserById", async (data, { getState }) => {
  const state = getState();
  try {
    const user = await axios.put(
      BASE_URL + API_URL + "/",
      data,
      getAuthConfig(state.auth.token)
    );

    return user.data;
  } catch (err) {}
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(putUserById.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default userSlice.reducer;
