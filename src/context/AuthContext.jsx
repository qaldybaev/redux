import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetalis, setUserDetalis] = useState({});
  const [token, setToken] = useState("");

  const login = (user, jwtToken) => {
    setUserDetalis(user);
    setToken(jwtToken);
    localStorage.setItem("user", JSON.stringify(user));
    Cookies.set("token", jwtToken);
  };
  const logout = () => {
    setUserDetalis(null);
    setToken(null);
    localStorage.clear();
    Cookies.remove("token");
  };

  const isAuthenticated = !!userDetalis && !!token;

  return (
    <AuthContext.Provider
      value={{ userDetalis, token, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
