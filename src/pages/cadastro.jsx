import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { buscarUsuarios, salvarUsuarios } from '../services/storage'

import '../styles/auth.css'


function Cadastro(){
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [erro, setErro] = useState('')

    function handleSubmit(event){
        event.preventDefault()

        setErro('')

        if(!nome || !email || !senha || !confirmarSenha){
            setErro('Preencha todos os campos.')
            return
        }

        if(senha !== confirmarSenha){
            setErro('As senhas não coincidem.')
            return
        }

        const usuarios = buscarUsuarios()

        const emailJaCadastrado = usuarios.some(
            usuario => usuario.email === email
        )

        if(emailJaCadastrado){
            setErro('Este e-mail já está cadastrado.')
            return
        }

        const novoUsuario = {
            id: Date.now(),
            nome,
            email,
            senha
        }

        const usuariosAtualizados = [
            ...usuarios,
            novoUsuario
        ]

        salvarUsuarios(usuariosAtualizados)

        navigate('/login')
    }

    return (
        <main className="auth-page">
            <section className="auth-visual">
                <div className="auth-visual-conteudo">
                    <span className="auth-marca">
                        AdotaPet
                    </span>

                    <h1>Um novo começo pode começar com você.</h1>

                    <p>
                        Crie sua conta e encontre animais que
                        estão esperando por um novo lar.
                    </p>
                </div>
            </section>

            <section className="auth-form-area">
                <div className="auth-card">
                    <div className="auth-cabecalho">
                        <span className="auth-logo">
                            🐾 AdotaPet
                        </span>

                        <h2>Criar conta</h2>

                        <p>
                            Preencha seus dados para começar.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {erro && (
                            <div className="auth-erro">
                                {erro}
                            </div>
                        )}

                        <div className="auth-campo">
                            <label htmlFor="nome">Nome</label>

                            <input
                                id="nome"
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(event) =>
                                    setNome(event.target.value)
                                }
                            />
                        </div>

                        <div className="auth-campo">
                            <label htmlFor="email">E-mail</label>

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

                        <div className="auth-campo">
                            <label htmlFor="confirmarSenha">
                                Confirmar senha
                            </label>

                            <input
                                id="confirmarSenha"
                                type="password"
                                placeholder="Repita sua senha"
                                value={confirmarSenha}
                                onChange={(event) =>
                                    setConfirmarSenha(event.target.value)
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="auth-botao"
                        >
                            Criar minha conta
                        </button>
                    </form>

                    <p className="auth-alternativa">
                        Já possui uma conta?

                        <Link to="/login">
                            Entrar
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Cadastro