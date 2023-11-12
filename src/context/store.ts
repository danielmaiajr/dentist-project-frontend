import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./AuthSlice";
import userSlice from "./UserSlice";
import patientSlice from "./PatientSlice";
import dentistSlice from "./DentistSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    patient: patientSlice,
    dentist: dentistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
