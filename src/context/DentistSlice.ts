import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/dentists";

export interface DentistState {
  id: Number;
  name: string;
  userId: Number;
}

const initialState: DentistState = {
  id: 0,
  name: "",
  userId: 0,
};

export const getDentistById = createAsyncThunk<
  DentistState,
  Number,
  { state: RootState }
>("dentist/getDentistById", async (dentistId, { getState }) => {
  const state = getState();
  const config = {
    headers: { Authorization: `Bearer ${state.auth.token}` },
  };
  try {
    const dentist = await axios.get(
      BASE_URL + API_URL + "/" + dentistId,
      config
    );
    return dentist.data;
  } catch (error) {
    console.error(error);
    return {};
  }
});

const dentistSlice = createSlice({
  name: "dentist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDentistById.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
    });
  },
});

export default dentistSlice.reducer;
