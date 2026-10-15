import { useState } from 'react'
import Navbar from '../components/navbar'
import {
    buscarMinhasSolicitacoes,
    cancelarSolicitacao,
    
} from '../services/storage'
import '../styles/solicitacoes.css'

function MinhasSolicitacoes() {

    // Armazena as solicitações do usuário
    const [solicitacoes, setSolicitacoes] = useState(
        () => buscarMinhasSolicitacoes()
    )


    

    // Função responsável pelo cancelamento
    function handleCancelar(id) {
        const confirmar = window.confirm(
            'Deseja realmente cancelar esta solicitação?'
        )

        if (!confirmar) return

        const sucesso = cancelarSolicitacao(id)

        if (sucesso) {
            setSolicitacoes(buscarMinhasSolicitacoes())
        } else {
            alert('Não foi possível cancelar a solicitação.')
        }
    }

    return (
        <>
            <Navbar />

            <main className="solicitacoes-pagina">
                <h1>Minhas Solicitações</h1>

               


                <p>Acompanhe seus pedidos de adoção.</p>

                {solicitacoes.length === 0 ? (
                    <p>Você ainda não possui solicitações de adoção.</p>
                ) : (
                    <div className="solicitacoes-lista">
                        {solicitacoes.map((solicitacao) => (
                            <div
                                className="solicitacao-card"
                                key={solicitacao.id}
                            >
                                <h2>{solicitacao.nomeAnimal}</h2>

                                <p>
                                    Status: {solicitacao.status}
                                </p>

                                {solicitacao.status === 'Pendente' && (
                                    <button
                                        className="solicitacao-cancelar"
                                        onClick={() =>
                                            handleCancelar(solicitacao.id)
                                        }
                                    >
                                        Cancelar solicitação
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}

export default MinhasSolicitacoes
