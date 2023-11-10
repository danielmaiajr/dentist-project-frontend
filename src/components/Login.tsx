import { useState } from "react";
import { useNavigate } from "react-router-dom";

import auth from "../auth/axios";

import { login } from "../context/AuthSlice";
import { useAppDispatch } from "../hooks";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await auth.login(email, password);

    dispatch(login(response?.data?.token));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button>Sign In</button>
    </form>
  );
};

export default Login;
