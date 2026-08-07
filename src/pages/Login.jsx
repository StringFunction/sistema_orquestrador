import { FaRegCircleUser } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";

import logo from "../assets/logo.png"


function Login(){
    return (
        <>
          <main className="md:w-full md:h-full">
            <div className="md:border md:w-[800px] md:h-[400px] md:flex md:justify-between md:items-center">
                <div>
                    <p>Seja Bem <span>Vindo </span>
                    Orquestrador</p>
                </div>

                <div>
                    <section>
                        <p className=""><CiUser></CiUser></p>
                        <p>Login</p>
                    </section>

                    <div>
                        <label htmlFor="Matricula">Matricula :</label>
                        <input type="text" />
                        <label htmlFor="">Senha</label>
                        <input type="password" name="" id="" />
                        <button>Entrar</button>
                    </div>
                    
                    <div>
                        <p>Esqueceu senha</p>
                        <p>Primeiro acesso</p>
                    </div>
                </div>
            </div>
          </main>
        </>
    )
}


export default Login