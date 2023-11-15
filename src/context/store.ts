import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./AuthSlice";
import appointmentSlice from "./AppointmentSlice";

import usersSlice from "./users/users.slice";
import patientsSlice from "./patients/patients.slice";
import insurancesSlice from "./insurances/insurances.slice";
import clinicsSlice from "./clinics/clinics.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    appointment: appointmentSlice,
    clinic: clinicsSlice,
    users: usersSlice,
    patients: patientsSlice,
    insurances: insurancesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
