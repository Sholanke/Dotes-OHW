import React, { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();
const initialToken = localStorage.getItem("token") || "";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ token: initialToken });

  const triggerSetData = (data) =>
    setUser((prevData) => ({ ...prevData, ...data }));

  const login = (formData, successFn) => {
    const url = `https://dotess.herokuapp.com/login`;

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((responseObject) => {
        if (responseObject.status !== "error") {
          triggerSetData({ token: responseObject.data.token });
          successFn();
        }
      });
  };

  const getUserData = (token) => {
    const url = `https://dotess.herokuapp.com/profile`;

    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    })
      .then((res) => res.json())
      .then((responseObject) => {
        triggerSetData({ ...responseObject.data.user_details });
      });
  };

  useEffect(() => {
    if (user.token) {
      localStorage.setItem("token", user.token);
      getUserData(user.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);

  return (
    <userContext.Provider value={{ ...user, login, set: triggerSetData }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
