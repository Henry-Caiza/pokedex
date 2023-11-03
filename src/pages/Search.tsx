import { useEffect, useState } from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData'
import { getPokemonData } from '../app/reducers/getPokemonData'
import PokemonCardGrid from '../components/PokemonCardGrid'

import { BsSearch } from 'react-icons/bs'
import { debounce } from '../utils/Debounce'
import Loading from '../components/loading'


function Search() {

    const dispatch = useAppDispatch()
    const { allPokemon, randomPokemons } = useAppSelector(({ pokemon }) => pokemon)

    let [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getInitialPokemonData())
    }, [dispatch])

    useEffect(() => {
        setLoading(true)
        try {
            if (allPokemon) {
                const clonedPokemons = [...allPokemon]
                const randomPokemonsId = clonedPokemons.sort(() => Math.random() - Math.random()).slice(0, 20)
                dispatch(getPokemonData(randomPokemonsId))
            }
        }
        catch (err) {
            console.log('Error: ', err);
        }
        setLoading(false)
    }, [allPokemon, dispatch])

    const handleChange = debounce((value: string) => getPokemon(value), 300)

    const getPokemon = async (value: string) => {

        if (value.length) {
            const pokemons = allPokemon?.filter((pokemon) =>
                pokemon.name.includes(value.toLowerCase()))
            dispatch(getPokemonData(pokemons!))
        } else {
            const clonedPokemons = [...(allPokemon as [])]
            const randomPokemonsId = clonedPokemons.sort(() => Math.random() - Math.random()).slice(0, 20)
            dispatch(getPokemonData(randomPokemonsId))
        }

    }

    return (
        <>

            <div className='search h-full w-full max-w-full relative '>
                <div className='w-11/12 lg:w-8/12 xl:w-5/12 h-[6%] md:h-[8%] mx-auto my-4 flex items-center border border-slate-700 rounded-xl bg-secondary/50 peer group hover:border-emerald-800 cursor-pointer'>
                    <label htmlFor="search-input" className='w-1/12 flex icente justify-center cursor-pointer '>
                        <BsSearch size={15} className=' text-slate-400 hover:text-emerald-600 ' />
                    </label>
                    <input type="text"
                        name='search-input'
                        id='search-input'
                        onChange={(e) => handleChange(e.target.value)}
                        className='pokemon-searchbar w-full h-full text-xs bg-transparent pl-4 border-l rounded-r-xl  border-slate-700 focus:outline-none focus:border-emerald-800 focus:border'
                        placeholder='
                Search a Pokemon'
                    />
                </div>

                <Loading loading={loading} />
                <PokemonCardGrid pokemons={randomPokemons!} loading={loading} />

            </div>

        </>
    )
}

export default Wrapper(Search)