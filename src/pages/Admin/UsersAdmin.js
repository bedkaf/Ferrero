import React, { useEffect } from "react";
import { HeaderPage } from "../../components/Admin/HeaderPage";
import { useUser } from "../../hooks";

export function UsersAdmin() {
  const { loading, users, getUsers } = useUser();
  console.log(loading);
  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <HeaderPage title="Usuarios" />
      <h1>estamos en User Admin</h1>
    </>
  );
}
