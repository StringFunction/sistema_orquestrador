
import { useState } from "react";


function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // lógica de autenticação futura
//     console.log({ usuario, senha });
//   };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-card-foreground">
            Bem-vindo
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre com suas credenciais para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="usuario"
              className="block text-sm font-medium text-card-foreground"
            >
              Usuário
            </label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Digite seu usuário"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-card-foreground"
            >
              Senha
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-card"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm">
          <a
            href="/primeira-vez"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Primeira vez
          </a>
          <a
            href="/esqueceu-senha"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Esqueceu senha
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login