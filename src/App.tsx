// Deps
import { BrowserRouter, Route, Routes } from "react-router";

// Global CSS
import "./styles/index.css";
import "./styles/fonts.css";

// Pages
import LandingPage from "./pages/home";
import ContactPage from "./pages/contact";

const App = () => {
  const basename = import.meta.env["VITE_APP_BASE_PATH"] || undefined;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
