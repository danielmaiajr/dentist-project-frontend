import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/appointments";

const getAuthConfig = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export interface AppointmentState {
  id: number;
  status?: string;
  clinicId: number;
  patientId: number;
  userId: number;
  insuranceId: number;
}

const initialState: AppointmentState[] = [];

export const getAllAppointments = createAsyncThunk<
  AppointmentState[],
  undefined,
  { state: RootState }
>("appointments/getAllAppointments", async (args, { getState }) => {
  const state = getState();

  try {
    const appointments = await axios.get(
      BASE_URL + API_URL + "/",
      getAuthConfig(state.auth.token)
    );

    return appointments.data;
  } catch (error) {}
});

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAppointments.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default appointmentsSlice.reducer;
