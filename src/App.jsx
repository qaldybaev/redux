import { Route, Routes } from "react-router";
import { HomePage, LoginPage } from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./layout/Main";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
