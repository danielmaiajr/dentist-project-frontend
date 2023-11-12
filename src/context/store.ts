import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./AuthSlice";
import userSlice from "./UserSlice";
import patientSlice from "./PatientSlice";
import dentistSlice from "./DentistSlice";
import appointmentSlice from "./AppointmentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    patient: patientSlice,
    dentist: dentistSlice,
    appointment: appointmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
