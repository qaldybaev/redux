import { NavLink, useNavigate } from "react-router";
import { auth, fakeLoginApiFn } from "../../utils/auth.fake";
import { LoginWrapper } from "./Login.styles";
import { use, useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fakeLoginApiFn({
        email: e.target.email.value,
        password: e.target.password.value,
      });

      if (!!res?.token) {
        login(res.user, res.token);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }

    e.target.reset();
  };
  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input
          required
          name="email"
          type="text"
          className="input"
          placeholder="Email"
        />
        <input
          required
          name="password"
          type="password"
          className="input"
          placeholder="Password"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
        <NavLink to="/register">Register</NavLink>
      </form>
    </LoginWrapper>
  );
};

export default LoginPage;
