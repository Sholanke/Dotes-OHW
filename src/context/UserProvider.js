import React, { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();
const initialToken = localStorage.getItem("token") || "";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ token: initialToken });

  const triggerSetData = (data) =>
    setUser((prevData) => ({ ...prevData, ...data }));

  useEffect(() => {
    !!user.token && localStorage.setItem("token", user.token);
  }, [user.token]);

  return (
    <userContext.Provider value={{ ...user, set: triggerSetData }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
