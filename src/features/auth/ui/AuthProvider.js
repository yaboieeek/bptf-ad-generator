import { createContext, useEffect, useState } from "react";
import { getToken, setToken, removeToken } from "../lib/tokenStorage";
export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  //Token check before mounting
  useEffect(() => {
    setIsAuth(!!getToken());
  }, []);

  const login = (value) => {
    setToken(value);
    setIsAuth(true);
  };

  const logout = () => {
    removeToken();
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
