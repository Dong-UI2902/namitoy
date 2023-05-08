import Api from "../../config/Api";
import { AuthCredential, UserRespone, UserSignup } from "./types";

async function login(credential: AuthCredential): Promise<UserRespone> {
  const response = await Api.post("auth/login", credential);

  return response.data;
}

async function register(user: UserSignup): Promise<UserRespone> {
  const response = await Api.post("auth/register", user);

  return response.data;
}

async function changePassword(credential: UserSignup): Promise<void> {
  const response = await Api.put("auth/changepassword", credential);

  return response.data;
}

async function getCurrentUser() {
  const response = await Api.get("auth/me", {
    headers: { "Cache-Control": "no-cache" },
  });

  return response.data;
}

export default {
  getCurrentUser,
  login,
  register,
  changePassword,
};
