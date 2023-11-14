import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/insurances";

const getAuthConfig = (token: string) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

export interface InsuranceState {
  id: Number;
  name: string;
  clinicId: number;
}

export interface PostInsuranceType {
  name: string;
}

export interface PutInsuranceByIdType {
  id: number;
  name: string;
}

const initialState: InsuranceState[] = [];

export const createInsurance = createAsyncThunk<
  InsuranceState,
  PostInsuranceType,
  { state: RootState }
>("insurances/createInsurance", async (data, { getState }) => {
  const state = getState();

  try {
    const insurance = await axios.post(
      BASE_URL + API_URL + "/",
      data,
      getAuthConfig(state.auth.token)
    );

    return insurance.data;
  } catch (err) {}
});

export const getAllInsurances = createAsyncThunk<
  InsuranceState[],
  undefined,
  { state: RootState }
>("insurances/getAllInsurances", async (arg, { getState }) => {
  const state = getState();

  try {
    const insurances = await axios.get(
      BASE_URL + API_URL + "/",
      getAuthConfig(state.auth.token)
    );

    return insurances.data;
  } catch (err) {}
});

export const putInsuranceById = createAsyncThunk<
  InsuranceState,
  PutInsuranceByIdType,
  { state: RootState }
>("insurances/putInsuranceById", async (data, { getState }) => {
  const state = getState();
  try {
    const insurance = await axios.put(
      BASE_URL + API_URL + `/${data.id}`,
      { name: data.name },
      getAuthConfig(state.auth.token)
    );

    return insurance.data;
  } catch (err) {}
});

const usersSlice = createSlice({
  name: "insurances",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllInsurances.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createInsurance.fulfilled, (state, action) => {
      if (action.payload) state.push(action.payload);
    });
    builder.addCase(putInsuranceById.fulfilled, (state, action) => {
      if (action.payload) {
        const insurance = state.find(
          (insurance) => insurance.id === action.payload.id
        );

        if (insurance) insurance.name = action.payload.name;
      }
    });
  },
});

export default usersSlice.reducer;
