import { Link } from 'react-router';

function AnimalCard({ animal }) {
  return (
    <Link
      to={`/animais/${animal.id}`}
      className="animal-card"
      aria-label={`Ver detalhes de ${animal.nome}`}
    >
      <img
        className="animal-card-imagem"
        src={animal.imagem}
        alt={`Foto de ${animal.nome}`}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src =
            'https://placehold.co/800x600/eaf4ef/2d6a4f?text=Foto+indisponivel';
        }}
      />

      <div className="animal-card-conteudo">
        <h2>{animal.nome}</h2>

        <p>
          <strong>Espécie:</strong> {animal.especie}
        </p>

        <p>
          <strong>Idade:</strong> {animal.idade}{' '}
          {animal.idade === 1 ? 'ano' : 'anos'}
        </p>

        <p>
          <strong>Sexo:</strong> {animal.sexo}
        </p>

        <span className="animal-card-acao">
          Ver detalhes →
        </span>
      </div>
    </Link>
  );
}

export default AnimalCard;
