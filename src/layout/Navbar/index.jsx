import { NavbarStyles } from "./Navbar.styles";
import { NavLink, useNavigate } from "react-router";
import { auth } from "../../utils/auth.fake";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout(() => {
      navigate("/login");
    });
  };
  return (
    <NavbarStyles>
      <div></div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
