import { Respone } from "../../config/type";

export interface User {
  _id?: string;
  name: string;
  username: string;
  role?: string;
  createdAt?: string;
}

export interface UserSignup extends User {
  password?: string;
  passwordConfirmation?: string;
}

export interface UserRespone extends Respone {
  accessToken?: string;
  user: User;
}

export interface ErrorProviderState {
  username?: string;
  password?: string;
  passwordConfirmation?: string;
}

export interface AuthProviderState {
  user?: User;
  loading: boolean;
  error?: ErrorProviderState;
}

export interface AuthCredential {
  username: string;
  password: string;
}

export interface AuthContextAPI extends AuthProviderState {
  login: (credential: AuthCredential) => void;
  register: (newUser: UserSignup) => void;
  logout: () => void;
  changePassword: (credential: UserSignup) => void;
}
