import Navbar from '../components/navbar'
import AnimalCard from '../components/animalCard'
import animais from '../data/animais'

function Animais() {
    return (
        <>
            <Navbar />

            <main>
                <h1>Animais disponíveis</h1>

                <div>
                    {animais.map((animal) => (
                        <AnimalCard
                            key={animal.id}
                            animal={animal}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}

export default Animais