const map = {
  success: { label: "Sucesso", cls: "success" },
  failure: { label: "Falha", cls: "danger" },
  running: { label: "Em execução", cls: "info" },
  paused: { label: "Pausado", cls: "warning" },
};
export default function StatusBadge({ status }) {
  const s = map[status];
  return (<span className={"badge " + s.cls}><span className="dot-sm" />{s.label}</span>);
}
