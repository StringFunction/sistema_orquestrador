
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";


export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");


  return (
   
<div className="min-h-screen w-full flex justify-center items-center p-4 bg-background">

  <div className="
    w-full max-w-[900px]
    min-h-[500px]
    flex flex-col md:flex-row
    justify-between items-center
    rounded-3xl
    border
    p-6 md:p-8
    gap-8 md:gap-0
  ">

    {/* LADO ESQUERDO */}
    <div className="
      w-full md:w-1/2
      flex flex-col
      justify-center items-center
      gap-6
    ">
      <FaRegUser
        className="
          text-[70px] md:text-[100px]
          border
          w-[140px] h-[140px]
          md:w-[200px] md:h-[200px]
          p-5
          rounded-2xl
        "
      />

      <h2 className="text-xl md:text-2xl font-semibold">
        Bem-vindo!
      </h2>
    </div>

    {/* DIVISÓRIA */}
    <div className="
      hidden md:block
      border-l
      h-[350px]
    " />

    {/* LADO DIREITO */}
    <div className="
      w-full md:w-1/2
      flex flex-col
      justify-center
      items-center
      px-2 md:px-8
    ">

      <h1 className="text-3xl font-bold mb-8">
        Login
      </h1>

      <form className="w-full max-w-[350px] flex flex-col gap-6">

        {/* MATRÍCULA */}
        <div className="flex flex-col gap-2">
          <label htmlFor="matricula" className="font-medium">
            Matrícula
          </label>

          <input
            id="matricula"
            type="text"
            placeholder="Digite sua matrícula"
            className="
              w-full
              border-b
              bg-transparent
              px-2 py-3
              outline-none
              focus:border-primary
              text-center
            "
          />
        </div>

        {/* SENHA */}
        <div className="flex flex-col gap-2">
          <label htmlFor="senha" className="font-medium">
            Senha
          </label>

          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            className="
              w-full
              border-b
              bg-transparent
              px-2 py-3
              outline-none
              focus:border-primary
              text-center
            "
          />
        </div>

        {/* BOTÃO */}
        <button
          type="submit"
          className="
            w-full
            rounded-lg
            py-3
            font-semibold
            bg-primary
            text-primary-foreground
            hover:opacity-90
            transition
          "
        >
          Entrar
        </button>

        {/* LINKS */}
        <div className="
          flex
          flex-col sm:flex-row
          justify-between
          items-center
          gap-3
          text-sm
        ">
          <button type="button" className="hover:underline">
            Esqueceu a senha?
          </button>

          <button type="button" className="hover:underline">
            Primeiro acesso
          </button>
        </div>

      </form>
    </div>

  </div>
</div>
  );
}

