import React from "react";
import { Form, Button } from "semantic-ui-react";
import Words from "../../../utils/Words";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.scss";

export function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (fromValue) => {
      console.log("credenciales enviadas \n");
      console.log(fromValue);
    },
  });

  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder={Words.placeHolderEmail}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder={Words.placeHolderPassword}
        values={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" content={Words.login} primary fluid />
    </Form>
  );
}

function initialValues() {
  return {
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
