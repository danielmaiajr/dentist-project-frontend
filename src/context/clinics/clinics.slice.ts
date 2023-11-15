import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/clinics";

const getAuthConfig = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export interface ClinicState {
  id?: number;
  name?: string;
}

export interface PostClinicType {
  email: string;
  password: string;
}
const initialState: ClinicState = {};

export const createClinic = createAsyncThunk<void, PostClinicType>(
  "clinics/createClinic",
  async (data) => {
    try {
      const clinic = await axios.post(BASE_URL + API_URL, data);

      console.log(clinic);
    } catch (err) {
      console.log(err);
    }
  }
);

export const getClinic = createAsyncThunk<
  ClinicState,
  undefined,
  { state: RootState }
>("clinics/getClinic", async (arg, { getState }) => {
  const state = getState();

  try {
    const clinic = await axios.get(
      BASE_URL + API_URL,
      getAuthConfig(state.auth.token)
    );

    return clinic.data;
  } catch (err) {}
});

export const putClinic = createAsyncThunk<
  ClinicState,
  ClinicState,
  { state: RootState }
>("clinics/putClinic", async (data, { getState }) => {
  const state = getState();

  try {
    const clinic = await axios.put(
      BASE_URL + API_URL,
      data,
      getAuthConfig(state.auth.token)
    );

    return clinic.data;
  } catch (err) {}
});

const clinicSlice = createSlice({
  name: "clinic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createClinic.fulfilled, (state, action) => {
      return;
    });
    builder.addCase(getClinic.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(putClinic.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default clinicSlice.reducer;
