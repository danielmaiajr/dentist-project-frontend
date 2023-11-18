import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/users";

const getAuthConfig = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export interface UserState {
  id: Number;
  email: string;
  name: string;
  role?: string;
}

export interface PostUserType {
  email: string;
  password: string;
}

export interface PutUserByIdType {
  name: string;
}

const initialState: UserState[] = [];

export const createUser = createAsyncThunk<
  UserState,
  PostUserType,
  { state: RootState }
>("users/createUser", async (data, { getState }) => {
  const state = getState();

  try {
    const user = await axios.post(
      BASE_URL + API_URL + "/",
      data,
      getAuthConfig(state.auth.token)
    );

    return user.data;
  } catch (err) {}
});

export const getAllUsers = createAsyncThunk<
  UserState[],
  undefined,
  { state: RootState }
>("users/getAllUsers", async (arg, { getState }) => {
  const state = getState();

  try {
    const user = await axios.get(
      BASE_URL + API_URL + "/all",
      getAuthConfig(state.auth.token)
    );

    return user.data;
  } catch (err) {}
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload) state.push(action.payload);
    });
  },
});

export default usersSlice.reducer;
