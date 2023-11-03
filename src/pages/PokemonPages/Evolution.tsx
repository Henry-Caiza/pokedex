import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useState, useEffect } from 'react'
import { getPokemonData } from "../../app/reducers/getPokemonData"
import PokemonCardGrid from "../../components/PokemonCardGrid"

function Evolution() {
    const dispatch = useAppDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    let [loading, setLoading] = useState(false);

    const { currentPokemon, randomPokemons } = useAppSelector(({ pokemon }) => pokemon)

    useEffect(() => {
        setLoading(true)
        try {
            const fetchData = async () => {
                const pokemons = currentPokemon?.evolution?.map(({ pokemon }) => pokemon)
                await dispatch(getPokemonData(pokemons!))
                setIsLoaded(true)
            }
            fetchData()
        } catch (error) {
            console.log(error);

        }
        setLoading(false)

    }, [dispatch, currentPokemon])

    return (
        <div className="page w-full h-full">
            <h2 className="text-center my-6">Evolutions</h2>
            {
                isLoaded && <PokemonCardGrid pokemons={randomPokemons!} loading={loading} />
            }
        </div>
    )
}

export default Evolution