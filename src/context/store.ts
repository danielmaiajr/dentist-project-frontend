import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth/auth.slice";
import clinicsSlice from "./clinics/clinics.slice";
import usersSlice from "./users/users.slice";
import patientsSlice from "./patients/patients.slice";
import insurancesSlice from "./insurances/insurances.slice";
import userSlice from "./user/user.slice";
import appointmentSlice from "./appointments/appointment.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    clinic: clinicsSlice,
    user: userSlice,
    users: usersSlice,
    patients: patientsSlice,
    insurances: insurancesSlice,
    appointment: appointmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
