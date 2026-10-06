function AnimalCard({ animal }) {
    return (
        <div className="animal-card">
            <h2>{animal.nome}</h2>

            <p>
                <strong>Espécie:</strong> {animal.especie}
            </p>

            <p>
                <strong>Idade:</strong> {animal.idade} anos
            </p>

            <p>
                <strong>Sexo:</strong> {animal.sexo}
            </p>
        </div>
    )
}

export default AnimalCard