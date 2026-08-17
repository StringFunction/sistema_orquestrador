
import { useState } from "react";


export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");


  return (
   
    <div>
      <div>
        <p>Olá, Seja Bem Vindo de de voltar!</p>
        <p>Ainda nao sei o que cokicar aqyu </p>
      </div>

      <div>
        <div>
          <h1>Login</h1>
        </div>

        <form action="">
          <label htmlFor="">Matricula</label>
          <input type="text" placeholder="Digite sua matricula" />
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </form>

        <div>
          <p>Esqueceu senha</p>
          <p>Esqueceu senha</p>
        </div>
      </div>
    </div>
  );
}

