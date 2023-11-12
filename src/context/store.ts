import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./AuthSlice";
import userSlice from "./UserSlice";
import patientSlice from "./PatientSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    patient: patientSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
