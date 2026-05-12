import { useState } from "react";
import { User, Lock, Palette, Bell, Plug } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";

function Section({ Icon, title, desc, children }) {
  return (
    <section className="card card-pad">
      <div className="settings-section">
        <div className="section-icon"><Icon size={20} /></div>
        <div>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{title}</h3>
          <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--muted)" }}>{desc}</p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
    </section>
  );
}

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [notif, setNotif] = useState({ email: true, push: false, failures: true, daily: true });
  const toggle = (k) => setNotif({ ...notif, [k]: !notif[k] });

  return (
    <>
      <PageHeader title="Configurações" subtitle="Preferências, segurança e integrações" />
      <div className="page">
        <div className="settings-grid">
          <Section Icon={User} title="Dados do usuário" desc="Informações exibidas no perfil">
            <div className="field"><label>Nome completo</label><input defaultValue="Lucas Barros" /></div>
            <div className="field"><label>E-mail corporativo</label><input defaultValue="lucas.barros@empresa.com" /></div>
            <div className="field"><label>Cargo</label><input defaultValue="Administrador" /></div>
            <button className="btn-primary" style={{ alignSelf: "flex-start" }}>Salvar alterações</button>
          </Section>

          <Section Icon={Lock} title="Alterar senha" desc="Use uma senha forte e única">
            <div className="field"><label>Senha atual</label><input type="password" placeholder="••••••••" /></div>
            <div className="field"><label>Nova senha</label><input type="password" placeholder="••••••••" /></div>
            <div className="field"><label>Confirmar nova senha</label><input type="password" placeholder="••••••••" /></div>
            <button className="btn-primary" style={{ alignSelf: "flex-start" }}>Atualizar senha</button>
          </Section>

          <Section Icon={Palette} title="Aparência" desc="Escolha o tema da interface">
            <div className="theme-grid">
              {["dark", "light"].map((t) => (
                <button key={t} className={"theme-option" + (theme === t ? " active" : "")} onClick={() => setTheme(t)}>
                  <div className={"theme-preview " + t} />
                  <p>{t === "dark" ? "Escuro" : "Claro"}</p>
                  <span>{t === "dark" ? "Recomendado" : "Beta"}</span>
                </button>
              ))}
            </div>
          </Section>

          <Section Icon={Bell} title="Notificações" desc="Como você quer ser avisado">
            {[
              ["email", "Alertas por e-mail"], ["push", "Notificações push"],
              ["failures", "Avisar em caso de falha"], ["daily", "Resumo diário às 18h"],
            ].map(([k, l]) => (
              <div key={k} className="toggle-row">
                <span>{l}</span>
                <button className={"toggle" + (notif[k] ? " on" : "")} onClick={() => toggle(k)} />
              </div>
            ))}
          </Section>

          <Section Icon={Plug} title="Integrações de API" desc="Conecte sistemas externos">
            <div className="field"><label>Endpoint base</label><input placeholder="https://api.suaempresa.com" /></div>
            <div className="field"><label>Token de acesso</label><input placeholder="sk_live_••••••••••••" /></div>
            <p style={{ fontSize: 12, color: "var(--muted)", margin: 0 }}>Configuração reservada para integração futura com sistemas internos.</p>
          </Section>
        </div>
      </div>
    </>
  );
}
