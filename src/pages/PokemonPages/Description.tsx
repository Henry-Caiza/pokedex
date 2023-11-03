import { useAppSelector } from "../../app/hooks"
import Info from "../../components/Info"
import PokemonContainer from "../../components/PokemonContainer"

function Description() {
    try {

    } catch (error) {

    }
    const pokemonData = useAppSelector((
        {
            pokemon: { currentPokemon }
        }
    ) => currentPokemon)



    return (
        <div className="w-full h-full relative">
            <Info data={pokemonData} />
            {pokemonData && <PokemonContainer data={pokemonData} />}
        </div>
    )
}

export default Description