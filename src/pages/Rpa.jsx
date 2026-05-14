import { useState } from "react";
import { Eye, Pencil, Trash2, Plus, X } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { mockBots } from "../lib/mock-data.js";

export default function Rpa() {
  const [bots, setBots] = useState(mockBots);
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", description: "", machine: "", scheduledTime: "", status: "paused" });

  const addBot = (e) => {
    e.preventDefault();
    setBots([...bots, {
      id: `BOT-${String(bots.length + 1).padStart(3, "0")}`,
      ...form, lastRun: "—", responsible: "Lucas Barros", avgTime: "—", lastFailure: "—", history: [], logs: [],
    }]);
    setForm({ name: "", description: "", machine: "", scheduledTime: "", status: "paused" });
    setShowForm(false);
  };

  const removeBot = (id) => setBots((b) => b.filter((x) => x.id !== id));

  return (
    <>
      <PageHeader title="Gestão de RPA" subtitle="Cadastre, edite e monitore seus bots" />
      <div className="page">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 600 }}>{bots.length} bots cadastrados</h2>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--muted)" }}>Gerencie a frota completa de automações</p>
          </div>
          <button className="btn-primary" onClick={() => setShowForm(true)}><Plus size={16} /> Novo Bot</button>
        </div>

        <div className="table-section">
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>ID</th><th>Nome</th><th>Descrição</th><th>Máquina</th><th>Última execução</th><th className="flex justify-center">Ações</th></tr>
              </thead>
              <tbody>
                {bots.map((b) => (
                  <tr key={b.id}>
                    <td className="mono">{b.id}</td>
                    <td style={{ fontWeight: 500 }}>{b.name}</td>
                    <td className="text-muted" style={{ maxWidth: 260, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.description}</td>
                    <td className="text-muted">{b.machine}</td>
                    <td className="text-muted">{b.lastRun}</td>
                    <td className="text-right">
                      <div className="row-actions">
                        <button onClick={() => setSelected(b)} aria-label="Detalhes"><Eye size={16} /></button>
                        <button aria-label="Editar"><Pencil size={16} /></button>
                        <button onClick={() => removeBot(b.id)} aria-label="Excluir"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="modal-backdrop" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Novo Bot</h3>
              <button onClick={() => setShowForm(false)}><X size={16} /></button>
            </div>
            <form onSubmit={addBot} className="modal-body">
              {[
                { k: "name", l: "Nome do Bot", t: "text" },
                { k: "description", l: "Descrição", t: "text" },
                { k: "machine", l: "Máquina", t: "text" },
                { k: "scheduledTime", l: "Horário", t: "time" },
              ].map((f) => (
                <div key={f.k} className="field">
                  <label>{f.l}</label>
                  <input required type={f.t} value={form[f.k]} onChange={(e) => setForm({ ...form, [f.k]: e.target.value })} />
                </div>
              ))}
              <div className="field">
                <label>Status inicial</label>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                  <option value="paused">Pausado</option>
                  <option value="running">Em execução</option>
                  <option value="success">Sucesso</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn-ghost" onClick={() => setShowForm(false)}>Cancelar</button>
                <button type="submit" className="btn-primary">Cadastrar bot</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selected && (
        <div className="drawer-backdrop" onClick={() => setSelected(null)}>
          <aside className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-head">
              <div>
                <p className="mono" style={{ margin: 0 }}>{selected.id}</p>
                <h3 style={{ margin: "4px 0 0", fontSize: 15, fontWeight: 600 }}>{selected.name}</h3>
              </div>
              <button onClick={() => setSelected(null)}><X size={16} /></button>
            </div>
            <div className="drawer-body">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <StatusBadge status={selected.status} />
                <span style={{ fontSize: 12, color: "var(--muted)" }}>Responsável: {selected.responsible}</span>
              </div>
              <div className="kv-grid">
                <div className="kv-cell"><div className="l">Tempo médio</div><div className="v">{selected.avgTime}</div></div>
                <div className="kv-cell"><div className="l">Última falha</div><div className="v">{selected.lastFailure}</div></div>
              </div>
              <div>
                <p className="section-label">Histórico de execução</p>
                {selected.history.length === 0 && <p style={{ fontSize: 14, color: "var(--muted)" }}>Sem execuções recentes.</p>}
                {selected.history.map((h, i) => (
                  <div key={i} className="history-item">
                    <span className="text-muted">{h.date}</span>
                    <StatusBadge status={h.status} />
                    <span style={{ fontSize: 12 }}>{h.duration}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="section-label">Logs resumidos</p>
                <div className="logs">
                  {selected.logs.length === 0 ? <p>Sem logs disponíveis.</p> : selected.logs.map((l, i) => (<p key={i}><span className="arrow">›</span>{l}</p>))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
