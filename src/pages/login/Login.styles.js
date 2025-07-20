import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & form {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    input,
    button {
      padding: 6px;
      background-color: #ffffff98;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      font-weight: bold;
      cursor: pointer;
      background-color: #fff;
    }
  }
`;
