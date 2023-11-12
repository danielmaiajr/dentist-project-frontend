import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/patients";

export interface PatientState {
  id: Number;
  name: string;
  userId: Number;
}

const initialState: PatientState = {
  id: 0,
  name: "",
  userId: 0,
};

export const getPatientById = createAsyncThunk<
  PatientState,
  Number,
  { state: RootState }
>("patient/getPatientById", async (patientId, { getState }) => {
  const state = getState();
  const config = {
    headers: { Authorization: `Bearer ${state.auth.token}` },
  };
  try {
    const patient = await axios.get(
      BASE_URL + API_URL + "/" + patientId,
      config
    );
    return patient.data;
  } catch (error) {
    console.error(error);
    return {};
  }
});

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientById.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.userId = action.payload.userId;
    });
  },
});

export default patientSlice.reducer;
