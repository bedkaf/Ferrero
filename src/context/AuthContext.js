import React, { useEffect, useState, createContext } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export function AuthProvider(props) {
  const { children } = props;

  const valueContext = {
    auth: null,
    login: () => console.log("Iniciando el login"),
    logout: () => console.log("Saloindo sesión"),
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
