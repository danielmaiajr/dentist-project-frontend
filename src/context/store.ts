import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./AuthSlice";
import userSlice from "./UserSlice";
import patientSlice from "./PatientSlice";
import appointmentSlice from "./AppointmentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    patient: patientSlice,
    appointment: appointmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
