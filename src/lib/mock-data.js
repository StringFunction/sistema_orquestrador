export const mockBots = [
  { id: "BOT-001", name: "Faturamento Mensal", description: "Gera relatórios fiscais e envia ao financeiro", machine: "SRV-RPA-01", scheduledTime: "08:00", status: "success", lastRun: "Hoje, 08:02", responsible: "Marina Costa", avgTime: "4m 12s", lastFailure: "12/04/2026", history: [{ date: "12/05 08:02", status: "success", duration: "4m 08s" }, { date: "11/05 08:01", status: "success", duration: "4m 18s" }, { date: "10/05 08:00", status: "failure", duration: "1m 32s" }], logs: ["Conectado ao ERP", "Extraídas 1.248 notas", "Relatório enviado"] },
  { id: "BOT-002", name: "Conciliação Bancária", description: "Concilia extratos com sistema interno", machine: "SRV-RPA-02", scheduledTime: "09:30", status: "running", lastRun: "Em execução", responsible: "Rafael Lima", avgTime: "12m 40s", lastFailure: "28/04/2026", history: [{ date: "11/05 09:30", status: "success", duration: "11m 22s" }], logs: ["Banco conectado", "Lendo OFX...", "Comparando lançamentos"] },
  { id: "BOT-003", name: "Importação NF-e", description: "Baixa XMLs da SEFAZ", machine: "SRV-RPA-01", scheduledTime: "10:00", status: "failure", lastRun: "Hoje, 10:04", responsible: "Marina Costa", avgTime: "6m 30s", lastFailure: "Hoje, 10:04", history: [{ date: "12/05 10:04", status: "failure", duration: "0m 42s" }], logs: ["Timeout na SEFAZ", "Tentativa 3/3 falhou"] },
  { id: "BOT-004", name: "Backup CRM", description: "Backup diário de leads e oportunidades", machine: "SRV-RPA-03", scheduledTime: "11:15", status: "paused", lastRun: "Ontem, 11:15", responsible: "Ana Pereira", avgTime: "22m", lastFailure: "—", history: [{ date: "11/05 11:15", status: "success", duration: "21m" }], logs: ["Pausado pelo administrador"] },
  { id: "BOT-005", name: "Envio de Holerites", description: "Distribui holerites por e-mail", machine: "SRV-RPA-02", scheduledTime: "13:00", status: "success", lastRun: "Hoje, 13:01", responsible: "João Marques", avgTime: "8m 55s", lastFailure: "—", history: [{ date: "12/05 13:01", status: "success", duration: "8m 49s" }], logs: ["432 holerites enviados"] },
  { id: "BOT-006", name: "Atualização de Estoque", description: "Sincroniza estoque entre filiais", machine: "SRV-RPA-04", scheduledTime: "14:30", status: "success", lastRun: "Hoje, 14:31", responsible: "Rafael Lima", avgTime: "5m", lastFailure: "02/05/2026", history: [{ date: "12/05 14:31", status: "success", duration: "4m 58s" }], logs: ["Sincronização concluída"] },
  { id: "BOT-007", name: "Relatório de Vendas", description: "Consolida vendas e envia para diretoria", machine: "SRV-RPA-01", scheduledTime: "17:00", status: "running", lastRun: "Em execução", responsible: "Ana Pereira", avgTime: "3m 20s", lastFailure: "—", history: [], logs: ["Coletando dados..."] },
  { id: "BOT-008", name: "Coleta de Boletos", description: "Baixa boletos do portal bancário", machine: "SRV-RPA-03", scheduledTime: "18:00", status: "failure", lastRun: "Hoje, 18:03", responsible: "João Marques", avgTime: "9m", lastFailure: "Hoje, 18:03", history: [{ date: "12/05 18:03", status: "failure", duration: "1m" }], logs: ["Falha de autenticação"] },
];

export const executionsByHour = [
  { hour: "06h", execucoes: 4 }, { hour: "08h", execucoes: 12 }, { hour: "10h", execucoes: 18 },
  { hour: "12h", execucoes: 9 }, { hour: "14h", execucoes: 22 }, { hour: "16h", execucoes: 17 },
  { hour: "18h", execucoes: 14 }, { hour: "20h", execucoes: 6 },
];

export const successTrend = [
  { day: "Seg", taxa: 92 }, { day: "Ter", taxa: 95 }, { day: "Qua", taxa: 88 },
  { day: "Qui", taxa: 97 }, { day: "Sex", taxa: 94 }, { day: "Sáb", taxa: 99 }, { day: "Dom", taxa: 96 },
];

export const statusDistribution = [
  { name: "Sucesso", value: 142, color: "#34d399" },
  { name: "Falha", value: 12, color: "#ef4444" },
  { name: "Em execução", value: 8, color: "#60a5fa" },
  { name: "Pausado", value: 5, color: "#fbbf24" },
];
