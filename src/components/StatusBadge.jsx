import { Smile, Frown, Meh, RotateCw } from "lucide-react";
import { FaBed } from "react-icons/fa";

const map = {
  success: { label: "Sucesso", cls: "success" , icon : <Smile />},
  failure: { label: "Falha", cls: "danger", icon : <Frown/> },
  running: { label: "Em execução", cls: "info", icon: <RotateCw /> },
  Pronto: { label: "Dormindo", cls: "warning", icon: <FaBed className="text-[25px]"/> },
};
export default function StatusBadge({ status }) {
  const s = map[status];
  if (status ==  "running") return <span className={"badge " + s.cls}><span className="dot-sm" /><span className="animate-spin">{s.icon }</span>{s.label}</span>
  return (
  <span className={"badge " + s.cls}><span className="dot-sm" />{s.icon }{s.label}</span>

);
}
