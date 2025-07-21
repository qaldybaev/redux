// src/pages/Register.styles.js

import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);
  width: 100%;
  max-width: 400px;

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #0077ff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0077ff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background-color: #005ddd;
  }
`;
