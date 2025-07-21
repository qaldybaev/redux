import React from "react";
import { RegisterWrapper, Form, Input, Button } from "./Register.styles";
import { NavLink } from "react-router";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log("REGISTER DATA:", data);
    e.target.reset();
  };

  return (
    <RegisterWrapper>
      <Form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
        <Input name="name" placeholder="Name" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Register</Button>
        <NavLink to="/login">Login</NavLink>
      </Form>
    </RegisterWrapper>
  );
};

export default RegisterPage;
