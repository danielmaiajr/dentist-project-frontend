import { useState } from "react";

import useAuth from "../hooks/useAuth";

import axios from "../api/axios";
const REGISTER_URL = "/api/users";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
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

export default Register;
