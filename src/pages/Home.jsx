import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle, PauseCircle, Filter } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { mockBots } from "../lib/mock-data.js";
import {API_URL} from "../service/api.js"

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  // const [mockBots, setmockbots] = useState([])
  //SOLICITICAO DE DADOS
  const buscarAgendamentos = ( async () => {
    try {
      const response = await fetch(`${API_URL}`, {
        method : "GET"
      })
      if (response.status == 200) {
        console.log(response);
        
        
      }
      
    } catch (error) {
      console.log("Erro durante execucao");
      
      
    }
  })

  useEffect(() => {
    console.log("Fazendo requisao de agendamentos");
    
    buscarAgendamentos()

  }, [])


  // contar quantos bots estão em cada estado (failure, success e paused) e memorizar esses resultados para evitar cálculos desnecessários
  const counts = useMemo(() => ({
    failure: mockBots.filter((b) => b.status === "failure").length,
    success: mockBots.filter((b) => b.status === "success").length,
    paused: mockBots.filter((b) => b.status === "paused").length,
  }), []);

  const filtered = mockBots.filter((b) => {
    const okQ = b.name.toLowerCase().includes(query.toLowerCase()) || b.id.toLowerCase().includes(query.toLowerCase()) || b.machine.toLowerCase().includes(query.toLowerCase());
    const okS = filter === "all" || b.status === filter;
    return okQ && okS;
  });

  return (
    <>
      <PageHeader title="Visão geral" subtitle="Acompanhe a operação dos bots em tempo real" />
      <div className="page">
        <div className="grid-3">
          <StatCard title="Bots com Falha" value={counts.failure} delta="2 nas últimas 2h" Icon={XCircle} tone="danger" />
          <StatCard title="Bots com Sucesso" value={counts.success} delta="+12% vs ontem" Icon={CheckCircle2} tone="success" />
          <StatCard title="Bots em Pausa" value={counts.paused} delta="Aguardando ação" Icon={PauseCircle} tone="warning" />
        </div>

        <section className="table-section">
          <div className="table-head">
            <div>
              <h2>Bots agendados para hoje</h2>
              <p>{filtered.length} processos listados</p>
            </div>
            <div className="table-controls">
              <input className="input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por nome ou ID..." style={{ width: 220 }} />
              <div className="input" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px" }}>
                <Filter size={14} color="var(--muted)" />
                <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ background: "#0a0f1711", border: "none", outline: "none", fontSize: 13 }}>
                  <option style={{color : "white", background : "#0a0f1711"}} value="all">Todos</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="success">Sucesso</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="failure">Falha</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="running">Em execução</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="paused">Pausado</option>
                </select>
              </div>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome do Bot</th>
                  <th>Máquina</th>
                  <th>Horário</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((b) => (
                  <tr key={b.id}>
                    <td className="mono">{b.id}</td>
                    <td style={{ fontWeight: 500 }}>{b.name}</td>
                    <td className="text-muted">{b.machine}</td>
                    <td>{b.scheduledTime}</td>
                    <td><StatusBadge status={b.status} /></td>
                  </tr>
                ))}
                {filtered.length === 0 && (<tr><td colSpan={5} style={{ textAlign: "center", padding: 48, color: "var(--muted)" }}>Nenhum bot encontrado.</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
