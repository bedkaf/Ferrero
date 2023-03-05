import React, { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableUsers,
  AddEditUserForm,
} from "../../components/Admin";
import { ModalBasic } from "../../components/Common";
import { useUser } from "../../hooks";
import Words from "../../utils/Words";

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, users, getUsers, deleteUser } = useUser();

  useEffect(() => {
    getUsers();
  }, [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addUser = () => {
    setTitleModal("Nuevo usuario");
    setContentModal(
      <AddEditUserForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateUser = (data) => {
    setTitleModal("Actualizar Usuario");
    setContentModal(
      <AddEditUserForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
        user={data}
      />
    );
    openCloseModal();
    console.log("Editar usuarios");
    console.log(data);
  };

  const onDeleteUser = async (data) => {
    const result = window.confirm(
      `${Words.user_deletion_message} ${data.email}`
    );
    if (result) {
      try {
        await deleteUser(data.id);
        onRefetch();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <HeaderPage
        title="Usuarios"
        btnTitle="Nuevo usuario"
        btnClick={addUser}
        size="small"
      />
      {loading ? (
        <Loader active inline="centered">
          {Words.loading}....
        </Loader>
      ) : (
        <TableUsers
          users={users}
          updateUser={updateUser}
          onDeleteUser={onDeleteUser}
        />
      )}

      <ModalBasic
        show={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
