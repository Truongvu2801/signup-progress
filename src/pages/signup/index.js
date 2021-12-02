import React, {useState} from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";
import { ProgressBar } from "react-step-progress-bar";
import Button from "../../components/Button";

const FormSchema = object().shape({
  user_name: string().required("Name required"),
  role: string(),
  email: string().email('Invalid email').required('Email required'),
  // password: string().password('Invalid email').required('Required')
});

const SignUp = () => {
    const defaultValue = {
      user_name: "",
      role: "",
      email: "",
      password: ""
    }

  console.log('formValue: ', defaultValue)
  return (
    <>
      <Formik initialValues={{...defaultValue}} validationSchema={FormSchema}>
        {({
          handleChange,
          values,
          errors,
          handleSubmit,
          setFieldValue
        }) => {
          return (
            <Form className="signup__form" title="Signup Form">
              <ProgressBar />
              <h2>User Form:</h2>
              <FormInput
                label="name *"
                placeholder="name"
                type="text"
                name="user_name"
                id="user_name"
                error={errors.user_name}
                value={values.user_name}
                setFieldValue={setFieldValue}
              />
              <FormInput
                label="role"
                placeholder="eg. software developer"
                type="text"
                name="role"
                id="role"
                error={errors.role}
                value={values.role}
                setFieldValue={setFieldValue}
              />
              <FormInput
                label="email *"
                placeholder="email@example.com"
                type="email"
                name="email"
                error={errors.email}
                value={values.email}
                id="email"
                setFieldValue={setFieldValue}
              />
              <FormInput
                label="password *"
                placeholder="password"
                type="password"
                name="password"
                error={errors.password}
                value={values.password}
                id="password"
                setFieldValue={setFieldValue}
              />
              <Button name="Next" />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUp;
