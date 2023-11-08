import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";

import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* private routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
