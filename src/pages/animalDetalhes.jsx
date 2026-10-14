import { Link, useParams } from 'react-router';
import { useState } from 'react';
import { buscarAnimalPorId } from '../data/animais';
import Navbar from '../components/navbar';
import '../styles/animal_detalhes.css';

function AnimalDetalhes() {
  const { id } = useParams();
  const animal = buscarAnimalPorId(id);
  const [status, setStatus] = useState('Não solicitada');

  if (!animal) {
    return (
      <>
        <Navbar />

        <main className="animal-detalhes">
          <h1>Animal não encontrado</h1>
          <Link to="/animais" className="voltar">
            ← Voltar para animais
          </Link>
        </main>
      </>
    );
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
            <img
              src={animal.imagem}
              alt={`Foto de ${animal.nome}`}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src =
                  'https://placehold.co/800x800/eaf4ef/2d6a4f?text=Foto+indisponivel';
              }}
            />
          </div>

          <div className="animal-info">
            <span className="especie-badge">
              {animal.especie}
            </span>

            <h1>{animal.nome}</h1>
            <p className="raca">{animal.raca}</p>

            <div className="animal-dados">
              <div className="dado">
                <span className="dado-label">Idade</span>
                <strong>
                  {animal.idade}{' '}
                  {animal.idade === 1 ? 'ano' : 'anos'}
                </strong>
              </div>

              <div className="dado">
                <span className="dado-label">Sexo</span>
                <strong>{animal.sexo}</strong>
              </div>

              <div className="dado">
                <span className="dado-label">Porte</span>
                <strong>{animal.porte}</strong>
              </div>

              <div className="dado">
                <span className="dado-label">ID</span>
                <strong>#{animal.id}</strong>
              </div>
            </div>

            <div className="descricao-box">
              <h2>Sobre o animal</h2>
              <p>{animal.descricao}</p>
            </div>

            <div className="solicitacao">
              <span className="status-label">
                Estado da solicitação
              </span>

              <span className="status">
                {status}
              </span>
            </div>

            <button
              type="button"
              className="btn-adotar"
              onClick={() => setStatus('Pendente')}
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
  );
}

export default AnimalDetalhes;
