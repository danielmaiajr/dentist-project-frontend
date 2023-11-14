import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./AuthSlice";
import patientSlice from "./PatientSlice";
import appointmentSlice from "./AppointmentSlice";

import usersSlice from "./users/users.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    patient: patientSlice,
    appointment: appointmentSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
