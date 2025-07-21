import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & form {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5);

    a {
      text-decoration: none;
      color: #fff;
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }

    display: flex;
    flex-direction: column;
    gap: 15px;

    input,
    button {
      padding: 10px 14px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
    }

    input:focus {
      border-color: #0077ff;
      outline: none;
    }

    button {
      background-color: #0077ff;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      background-color: #005dda;
    }
  }
`;
