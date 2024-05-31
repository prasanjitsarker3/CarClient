"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { UserInformation } from "../ServerAction/Auth/UserRegister";
const AuthContext = createContext<any>({
  user: null,
  setUser: () => {},
});
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const fetch = async () => {
    const res = await UserInformation();
    setUser(res);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
