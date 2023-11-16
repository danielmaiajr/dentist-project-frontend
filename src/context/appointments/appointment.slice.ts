import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/appointments";

export interface AppointmentState {
  id: Number;
  patientId: Number;
  dentistId: Number;
}

const initialState: AppointmentState = {
  id: 0,
  patientId: 0,
  dentistId: 0,
};

export const getAppointmentById = createAsyncThunk<
  AppointmentState,
  Number,
  { state: RootState }
>("appointment/getAppointmentById", async (appointmentId, { getState }) => {
  const state = getState();
  const config = {
    headers: { Authorization: `Bearer ${state.auth.token}` },
  };
  try {
    const appointment = await axios.get(
      BASE_URL + API_URL + "/" + appointmentId,
      config
    );
    return appointment.data;
  } catch (error) {
    console.error(error);
    return {};
  }
});

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppointmentById.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.patientId = action.payload.patientId;
      state.dentistId = action.payload.dentistId;
    });
  },
});

export default appointmentSlice.reducer;
