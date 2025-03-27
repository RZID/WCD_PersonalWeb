// Deps
import { BrowserRouter, Route, Routes } from "react-router";

// Global CSS
import "./styles/index.css";
import "./styles/fonts.css";

// Pages
import LandingPage from "./pages/home";
import ContactPage from "./pages/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
