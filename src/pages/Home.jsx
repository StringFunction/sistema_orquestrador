import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle, PauseCircle, Filter, Asterisk } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { mockBots } from "../lib/mock-data.js";
import {API_URL} from "../service/api.js"

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [filterMaq, setFilterMaq] = useState("all");
  const [Age, setAge] = useState([])
  //SOLICITICAO DE DADOS
  const buscarAgendamentos = ( async () => {
    try {
      const response = await fetch(`${API_URL}/movimento`, {
        method : "GET"
      })
      if (response.status == 200) {
        const obj = await response.json()
        return obj
        
        
        
        
      }
      
    } catch (error) {
      console.log("Erro durante execucao");
      
      
    }
  })

  useEffect(() => {
    console.log("Fazendo requisao de agendamentos");

  // Criamos uma função interna para poder usar o await
  const carregarDados = async () => {
    const dados = await buscarAgendamentos(); // <-- O await resolve a Promise
    
    if (dados) {
      setAge(dados.agendamentos)
      console.log("Dados recebidos:", dados.agendamentos);
    

      
      // Salvando dentro de uma const/estado do React:
      // setAgendamentos(dados.agendamentos);
    }
  };

  carregarDados();
    
  }, [])


  // contar quantos bots estão em cada estado (failure, success e paused) e memorizar esses resultados para evitar cálculos desnecessários
  const counts = useMemo(() => ({
    failure: Age.filter((b) => b.atualizacao === "failure").length,
    success: Age.filter((b) => b.atualizacao === "success").length,
    paused: Age.filter((b) => b.atualizacao === "Pronto").length,
  }), [Age]);

  
  const filtered = Age.filter((b) => {
    const okQ = b.Agendamento.Bot.nome.toLowerCase().includes(query.toLowerCase()) || b.Agendamento.id.toString().toLowerCase().includes(query.toLowerCase()) || b.Agendamento.Bot.Maquina.nome.toLowerCase().includes(query.toLowerCase());
    // const okS = filter === "all" || b.atualizacao === filter;
    // const okM = filterMaq === "all" || b.atualizacao === filterMaq;
    return okQ //&& okS;
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
                  <option style={{color : "white", background : "#0a0f17"}} value="paused">Em espera</option>
                </select>
              </div>
              <div className="input" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px" }}>
                <Filter size={14} color="var(--muted)" />
                <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ background: "#0a0f1711", border: "none", outline: "none", fontSize: 13 }}>
                  {}
                  <option style={{color : "white", background : "#0a0f1711"}} value="all">Todos</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="success">Sucesso</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="failure">Falha</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="running">Em execução</option>
                  <option style={{color : "white", background : "#0a0f17"}} value="paused">Em espera</option>
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
                    <td className="mono">{(b.Agendamento.id.toString())}</td>
                    <td style={{ fontWeight: 500 }}>{b.Agendamento.Bot.nome}</td>
                    <td className="text-muted">{b.Agendamento.Bot.Maquina.nome}</td>
                    <td>{b.Agendamento.horario}</td>
                    <td><StatusBadge status={b.atualizacao} /></td>
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
