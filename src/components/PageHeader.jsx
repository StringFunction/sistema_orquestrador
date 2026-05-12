import { Bell, Search } from "lucide-react";

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header">
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="header-actions">
        <div className="search-box">
          <Search size={16} color="var(--muted)" />
          <input placeholder="Buscar bots, máquinas, logs..." />
        </div>
        <button className="icon-btn"><Bell size={16} /><span className="badge" /></button>
      </div>
    </header>
  );
}
