import styled from "styled-components";

export const NavbarStyles = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  .nav-links {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
  }

  button {
    padding: 6px 12px;
    background-color: #f44336;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #d32f2f;
  }
`;
