import React from "react";
import { useAuth } from "../../hooks";

export function HomeAdmin() {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Home admin</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
