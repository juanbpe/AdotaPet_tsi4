import { Link, useParams } from 'react-router'
import { useState } from 'react'
import Navbar from '../components/navbar'
import '../styles/animal_detalhes.css'

function AnimalDetalhes() {
    const { id } = useParams()
    const [status, setStatus] = useState('Não solicitada')

    const solicitarAdocao = () => {
        setStatus('Pendente')
    }

    return (
        <>
            <Navbar />

            <main className="animal-detalhes">
                <Link to="/animais" className="voltar">
                    ← Voltar para animais
                </Link>

                <section className="animal-card-detalhes">
                    <div className="animal-image">
                        <div className="sem-imagem">
                            <span>🐾</span>
                            <p>Foto do animal</p>
                        </div>
                    </div>

                    <div className="animal-info">
                        <span className="especie-badge">Cachorro</span>

                        <h1>Nome do animal</h1>
                        <p className="raca">Raça do animal</p>

                        <div className="animal-dados">
                            <div className="dado">
                                <span className="dado-label">Idade</span>
                                <strong>2 anos</strong>
                            </div>

                            <div className="dado">
                                <span className="dado-label">Sexo</span>
                                <strong>Macho</strong>
                            </div>

                            <div className="dado">
                                <span className="dado-label">Porte</span>
                                <strong>Médio</strong>
                            </div>

                            <div className="dado">
                                <span className="dado-label">ID</span>
                                <strong>#{id}</strong>
                            </div>
                        </div>

                        <div className="descricao-box">
                            <h2>Sobre o animal</h2>
                            <p>
                                Este animal está disponível para adoção.
                                Entre em contato através da solicitação
                                de adoção para demonstrar seu interesse.
                            </p>
                        </div>

                        <div className="solicitacao">
                            <span className="status-label">
                                Estado da solicitação
                            </span>

                            <span className={`status status-${status.toLowerCase().replace(' ', '-')}`}>
                                {status}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="btn-adotar"
                            onClick={solicitarAdocao}
                            disabled={status === 'Pendente'}
                        >
                            {status === 'Pendente'
                                ? '✓ Solicitação enviada'
                                : 'Solicitar adoção'}
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default AnimalDetalhes