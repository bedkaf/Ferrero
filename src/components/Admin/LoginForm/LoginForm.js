import React from "react";
import { Form, Button } from "semantic-ui-react";
import Words from "../../../utils/Words";
import { useAuth } from "../../../hooks";
import { loginApi } from "../../../api/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "./LoginForm.scss";

export function LoginForm() {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (fromValue) => {
      try {
        const response = await loginApi(fromValue);
        const { access } = response;
        login(access);
      } catch (error) {
        toast.error(error.message);
      }
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
