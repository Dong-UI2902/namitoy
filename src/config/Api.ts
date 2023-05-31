// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

//TODO: fix url
export const axiosClient = axios.create({
  baseURL: "https://namitoy.herokuapp.com/api/",
  withCredentials: true,
});

export const setCookie = (cookie: string) => {
  document.cookie = `token=${cookie ? cookie : ""};path=/`;
};

export const removeCookie = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

export const getCookieValue = (name: string) => {
  return (
    document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || ""
  );
};

export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosClient.defaults.headers.common.Authorization;
  }
};

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.message)
);

export default axiosClient;
