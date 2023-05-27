import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContextAPI, AuthCredential, User, UserSignup } from "./types";
import { useLocation } from "react-router-dom";
import authService from "./services";
import {
  getCookieValue,
  removeCookie,
  setAuthToken,
  setCookie,
} from "../../config/Api";

const AuthContext = createContext<AuthContextAPI>({} as AuthContextAPI);

const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    if (error) setError(undefined);

    setAuthToken(getCookieValue("token"));
    authService
      .getCurrentUser()
      .then((res) => setUser(res.user))
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {
        setUser(undefined);
        setAuthToken(null);
      })
      .finally(() => setLoadingInitial(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const login = (credential: AuthCredential) => {
    setLoading(true);
    authService
      .login(credential)
      .then((res) => {
        if (res.accessToken) setCookie(res.accessToken);
        window.location.href = "/";
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const register = (userSignup: UserSignup) => {
    setLoading(true);
    if (userSignup.passwordConfirmation !== userSignup.password) {
      setError("Xác nhận mật khẩu chưa đúng");
      return setLoading(false);
    }

    authService
      .register(userSignup)
      .then((res) => setUser(res.user))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const changePassword = (newUser: UserSignup) => {
    setLoading(true);
    authService
      .changePassword(newUser)
      .then()
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    setUser(undefined);
    removeCookie();
    window.location.href = "/";
  };

  const memoValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      register,
      changePassword,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, error]
  );

  if (["/login", "/register"].indexOf(location.pathname) > -1 && user) {
    window.location.href = "/";

    return null;
  }

  const handleAdmin = (role: string) => {
    if (role && role !== "ADMIN") {
      console.log(role);
      const arr = location.pathname.split("/");
      if (arr.indexOf("manager") > -1) return (window.location.href = "/");
    }
  };

  handleAdmin(user?.role || "");

  return (
    <AuthContext.Provider value={memoValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextAPI => useContext(AuthContext);

export default AuthProvider;
