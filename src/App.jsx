import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Rpa from "./pages/Rpa.jsx";
import Settings from "./pages/Settings.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  const local = useLocation()
  const esconderSidebar = local.pathname === "/login";

  return (

      <div className="app-shell">
        {!esconderSidebar && <Sidebar></Sidebar>}
        {/* className sem funcao  */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/rpa" element={<Rpa />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<div style={{ padding: 40 }}>404 — Página não encontrada</div>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>

  );
}
