import { useMemo, useState } from 'react';
import Navbar from '../components/navbar';
import AnimalCard from '../components/animalCard';
import { animais } from '../data/animais';
import '../styles/animais.css';

function Animais() {
  const [pesquisa, setPesquisa] = useState('');
  const [especie, setEspecie] = useState('Todas');

  const animaisFiltrados = useMemo(() => {
    return animais.filter((animal) => {
      const correspondeNome = animal.nome
        .toLowerCase()
        .includes(pesquisa.trim().toLowerCase());

      const correspondeEspecie =
        especie === 'Todas' || animal.especie === especie;

      return correspondeNome && correspondeEspecie;
    });
  }, [pesquisa, especie]);

  return (
    <>
      <Navbar />

      <main className="animais-pagina">
        <h1>Animais disponíveis</h1>

        <div className="animais-filtros">
          <input
            type="search"
            value={pesquisa}
            onChange={(event) => setPesquisa(event.target.value)}
            placeholder="Pesquisar animal pelo nome..."
            aria-label="Pesquisar animal pelo nome"
          />

          <select
            value={especie}
            onChange={(event) => setEspecie(event.target.value)}
            aria-label="Filtrar por espécie"
          >
            <option value="Todas">Todas as espécies</option>
            <option value="Cachorro">Cachorros</option>
            <option value="Gato">Gatos</option>
          </select>
        </div>

        {animaisFiltrados.length > 0 ? (
          <section className="animais-grid">
            {animaisFiltrados.map((animal) => (
              <AnimalCard
                key={animal.id}
                animal={animal}
              />
            ))}
          </section>
        ) : (
          <p className="animais-vazio">
            Nenhum animal encontrado com esses filtros.
          </p>
        )}
      </main>
    </>
  );
}

export default Animais;
