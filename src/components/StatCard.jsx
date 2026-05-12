export default function StatCard({ title, value, delta, Icon, tone = "primary" }) {
  return (
    <div className="stat-card">
      <div className="header">
        <div>
          <p className="label">{title}</p>
          <p className="value">{value}</p>
          {delta && <p className={"delta tone-" + tone} style={{ background: "transparent" }}>{delta}</p>}
        </div>
        <div className={"stat-icon tone-" + tone}><Icon size={20} /></div>
      </div>
    </div>
  );
}
