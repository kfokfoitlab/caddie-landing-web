import "@/styles/reset.css";
import "@/styles/global.css";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Privacy from "@/pages/privacy";
import MainPage from "@/pages/main";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}
