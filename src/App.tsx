// Deps
import { BrowserRouter, Route, Routes } from "react-router";

// Global CSS
import "./styles/index.css";
import "./styles/fonts.css";

// Pages
import LandingPage from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
