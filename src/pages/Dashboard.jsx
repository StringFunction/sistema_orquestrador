import { Activity, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";
import PageHeader from "../components/PageHeader.jsx";
import StatCard from "../components/StatCard.jsx";
import { executionsByHour, successTrend, statusDistribution } from "../lib/mock-data.js";

const tooltipStyle = { contentStyle: { background: "#1a212d", border: "1px solid #232c3a", borderRadius: 8, fontSize: 12 } };

export default function Dashboard() {
  return (
    <>
      <PageHeader title="Dashboard executivo" subtitle="Métricas estratégicas dos últimos 7 dias" />
      <div className="page">
        <div className="grid-4">
          <StatCard title="Execuções hoje" value="167" delta="+8.4% vs ontem" Icon={Activity} tone="primary" />
          <StatCard title="Falhas" value="12" delta="-3 vs média" Icon={AlertTriangle} tone="danger" />
          <StatCard title="Tempo economizado" value="284h" delta="Este mês" Icon={Clock} tone="info" />
          <StatCard title="Taxa de sucesso" value="94.2%" delta="+1.6 p.p." Icon={TrendingUp} tone="success" />
        </div>

        <div className="grid-charts">
          <div className="card card-pad">
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Execuções por hora</h3>
            <p style={{ margin: "4px 0 24px", fontSize: 12, color: "var(--muted)" }}>Distribuição diária</p>
            <div style={{ height: 280 }}>
              <ResponsiveContainer>
                <BarChart data={executionsByHour}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#232c3a" vertical={false} />
                  <XAxis dataKey="hour" stroke="#8a94a6" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#8a94a6" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip {...tooltipStyle} cursor={{ fill: "#232c3a", opacity: 0.3 }} />
                  <Bar dataKey="execucoes" fill="#6c8cff" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card card-pad">
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Distribuição de status</h3>
            <p style={{ margin: "4px 0 24px", fontSize: 12, color: "var(--muted)" }}>Últimos 7 dias</p>
            <div style={{ height: 280 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={statusDistribution} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3}>
                    {statusDistribution.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip {...tooltipStyle} />
                  <Legend wrapperStyle={{ fontSize: 11 }} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="card card-pad">
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Taxa de sucesso semanal</h3>
          <p style={{ margin: "4px 0 24px", fontSize: 12, color: "var(--muted)" }}>Em percentual</p>
          <div style={{ height: 280 }}>
            <ResponsiveContainer>
              <LineChart data={successTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#232c3a" vertical={false} />
                <XAxis dataKey="day" stroke="#8a94a6" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#8a94a6" fontSize={11} domain={[80, 100]} tickLine={false} axisLine={false} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="taxa" stroke="#6c8cff" strokeWidth={2.5} dot={{ fill: "#6c8cff", r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
