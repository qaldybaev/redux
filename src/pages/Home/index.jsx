import React from "react";
import { auth } from "../../utils/auth.fake";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout(() => {
      navigate("/login");
    });
  };
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
