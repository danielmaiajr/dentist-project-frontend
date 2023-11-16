import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import RequireAuth from "./components/auth/RequireAuth.tsx";
import PuclicAuth from "./components/auth/PublicAuth.tsx";

import { store } from "./context/store.ts";
import { setToken } from "./context/auth/auth.slice.ts";

import "./index.css";
import PatientPage from "./components/PatientPage.tsx";
import SchedulerPage from "./components/SchedulerPage.tsx";
import ConfigPage from "./components/ConfigPage.tsx";
import InsurancePage from "./components/InsurancePage.tsx";
import ClinicPage from "./components/ClinicPage.tsx";

const token = localStorage.getItem("token");
if (token) {
  store.dispatch(setToken(token));
}

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<PuclicAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* private routes */}
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />}>
          <Route path="/patients" element={<PatientPage />}></Route>
          <Route path="/scheduler" element={<SchedulerPage />}></Route>
          <Route path="/config" element={<ConfigPage />}></Route>
          <Route path="/insurance" element={<InsurancePage />}></Route>
          <Route path="/clinic" element={<ClinicPage />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
