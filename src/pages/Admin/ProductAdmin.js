import React from "react";
import { HeaderPage } from "../../components/Admin";
import Words from "../../utils/Words";

export function ProductAdmin() {
  return (
    <>
      <HeaderPage title={Words.products} btnTitle="Nuevo producto" />
    </>
  );
}
