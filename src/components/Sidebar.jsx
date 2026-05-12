import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard, Bot, Settings, LogOut, Workflow } from "lucide-react";

const items = [
  { to: "/", label: "Home", Icon: Home, end: true },
  { to: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  { to: "/rpa", label: "RPA", Icon: Bot },
  { to: "/settings", label: "Configurações", Icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo"><Workflow size={20} color="#0d1117" /></div>
        <div>
          <h1>RPA Orchestrator</h1>
          <p>Enterprise Suite</p>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        <p className="sidebar-section-label">Navegação</p>
        {items.map(({ to, label, Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
            
            {({ isActive }) => (
              <>
                <Icon size={16} className="icon" />
                <span>{label}</span>
                {isActive && <span className="dot" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-card">
          <div className="user-avatar">LB</div>
          <div className="user-info">
            <p>Lucas Barros</p>
            <span>Administrador</span>
          </div>
          <button className="logout-btn" aria-label="Sair"><LogOut size={16} /></button>
        </div>
      </div>
    </aside>
  );
}
