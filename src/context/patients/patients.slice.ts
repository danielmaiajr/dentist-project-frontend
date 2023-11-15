import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/patients";

const getAuthConfig = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export interface PatientState {
  id: number;
  name: string;
  clinicId: number;
  createdAt: string;
  updateAt: string;
}

export interface PostPatientType {
  name: string;
}
export interface PutPatientByIdType {
  id: number;
  name: string;
}

const initialState: PatientState[] = [];

export const createPatients = createAsyncThunk<
  PatientState,
  PostPatientType,
  { state: RootState }
>("patients/createPatient", async (data, { getState }) => {
  const state = getState();

  try {
    const patient = await axios.post(
      BASE_URL + API_URL + "/",
      data,
      getAuthConfig(state.auth.token)
    );

    return patient.data;
  } catch (error) {}
});

export const getAllPatients = createAsyncThunk<
  PatientState[],
  undefined,
  { state: RootState }
>("patients/getAllPatients", async (arg, { getState }) => {
  const state = getState();

  try {
    const patient = await axios.get(
      BASE_URL + API_URL + "/",
      getAuthConfig(state.auth.token)
    );

    return patient.data;
  } catch (error) {}
});

export const putPatientById = createAsyncThunk<
  PatientState,
  PutPatientByIdType,
  { state: RootState }
>("patients/putPatientById", async (data, { getState }) => {
  const state = getState();
  try {
    const patients = await axios.put(
      BASE_URL + API_URL + `/${data.id}`,
      { name: data.name },
      getAuthConfig(state.auth.token)
    );

    return patients.data;
  } catch (err) {}
});

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPatients.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createPatients.fulfilled, (state, action) => {
      if (action.payload) state.push(action.payload);
    });
    builder.addCase(putPatientById.fulfilled, (state, action) => {
      if (action.payload) {
        const patient = state.find(
          (patient) => patient.id === action.payload.id
        );

        if (patient) patient.name = action.payload.name;
      }
    });
  },
});

export default patientSlice.reducer;
