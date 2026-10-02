import { useState } from 'react'
import { Link, useNavigate } from 'react-router'

import { buscarUsuarios, salvarUsuarioLogado } from '../services/storage'

import '../styles/auth.css'


function Login(){
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    function handleSubmit(event){
        event.preventDefault()

        setErro('')

        if(!email || !senha){
            setErro('Preencha todos os campos.')
            return
        }

        const usuarios = buscarUsuarios()

        const usuario = usuarios.find(
            usuario =>
                usuario.email === email &&
                usuario.senha === senha
        )

        if(!usuario){
            setErro('E-mail ou senha inválidos.')
            return
        }

        salvarUsuarioLogado(usuario)

        navigate('/animais')
    }

    return(
        <main className="auth-page">
            <section className="auth-visual">
                <div className="auth-visual-conteudo">
                    <span className="auth-marca">
                        AdotaPet
                    </span>

                    <h1>
                        Seu novo melhor amigo pode estar esperando por você.
                    </h1>

                    <p>
                        Entre na sua conta e encontre animais
                        que estão procurando um novo lar.
                    </p>
                </div>
            </section>

            <section className="auth-form-area">
                <div className="auth-card">
                    <div className="auth-cabecalho">
                        <span className="auth-logo">
                            🐾 AdotaPet
                        </span>

                        <h2>Entrar</h2>

                        <p>
                            Acesse sua conta para continuar.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {erro && (
                            <div className="auth-erro">
                                {erro}
                            </div>
                        )}

                        <div className="auth-campo">
                            <label htmlFor="email">
                                E-mail
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="voce@email.com"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>

                        <div className="auth-campo">
                            <label htmlFor="senha">
                                Senha
                            </label>
                            <input
                                id="senha"
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(event) =>
                                    setSenha(event.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="auth-botao"
                        >
                            Entrar
                        </button>
                    </form>

                    <p className="auth-alternativa">
                        Ainda não possui uma conta?

                        <Link to="/cadastro">
                            Criar conta
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Login