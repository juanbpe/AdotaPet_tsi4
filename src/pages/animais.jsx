import { useState } from 'react'
import Navbar from '../components/navbar'
import AnimalCard from '../components/animalCard'
import animais from '../data/animais'
import '../styles/animais.css'

function Animais() {
const [pesquisa, setPesquisa] = useState('')
const [especieSelecionada, setEspecieSelecionada] = useState('Todas')


const animaisFiltrados = animais.filter((animal) => {
    const nomeCorresponde = animal.nome
        .toLowerCase()
        .includes(pesquisa.toLowerCase())

    const especieCorresponde =
        especieSelecionada === 'Todas' ||
        animal.especie === especieSelecionada

    return nomeCorresponde && especieCorresponde
})

return (
    <>
        <Navbar />

        <main>
            <h1>Animais disponíveis</h1>

            <input
                type="text"
                placeholder="Pesquisar animal pelo nome..."
                value={pesquisa}
                onChange={(evento) => setPesquisa(evento.target.value)}
            />

            <select
                value={especieSelecionada}
                onChange={(evento) =>
                    setEspecieSelecionada(evento.target.value)
                }
            >
                <option value="Todas">Todas as espécies</option>
                <option value="Cachorro">Cachorros</option>
                <option value="Gato">Gatos</option>
            </select>

            <div className="lista-animais">
                {animaisFiltrados.map((animal) => (
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                    />
                ))}
            </div>

            {animaisFiltrados.length === 0 && (
                <p>Nenhum animal encontrado.</p>
            )}
        </main>
    </>
)


}

export default Animais
