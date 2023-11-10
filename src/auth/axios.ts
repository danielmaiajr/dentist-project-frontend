import axios from "axios";

const BASE_URL = "http://localhost:3333";
const API_URL = "/api/users";

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    return { "x-auth-token": user.accessToken };
  } else {
    return {};
  }
};

const signup = async (email: string, password: string) => {
  try {
    const response = await axios.post(BASE_URL + API_URL + "/", {
      email,
      password,
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(BASE_URL + API_URL + "/login", {
      email,
      password,
    });

    console.log(response);

    if (response.data.token) localStorage.setItem("token", response.data.token);

    return response;
  } catch (err) {
    console.log(err);
  }
};

const auth = {
  signup,
  login,
};

export default auth;
