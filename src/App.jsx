import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Rpa from "./pages/Rpa.jsx";
import Settings from "./pages/Settings.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rpa" element={<Rpa />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div style={{ padding: 40 }}>404 — Página não encontrada</div>} />
        </Routes>
      </main>
    </div>
  );
}
