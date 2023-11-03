import { pokemonStatType, pokemonTypeInterface, userPokemonsType } from "../utils/Types"
import addImg from '../assets/add.png'
import { pokemonTypes } from "../utils/getPokemonTypes"
import { RiHeartAddFill } from 'react-icons/ri'
import { FaEye } from 'react-icons/fa'
import { IoTrashBinOutline } from 'react-icons/io5'
import { useAppDispatch } from "../app/hooks"
import { removeFromCompare } from "../app/slices/PokemonSlice"
import { useNavigate } from "react-router-dom"
import { addPokemonToList } from "../app/reducers/addPokemonToList"

function CompareContainer({ pokemon = undefined, isEmpty = false }: {
    pokemon?: userPokemonsType,
    isEmpty?: boolean
}) {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const createStatsArray = (types: pokemonTypeInterface[], statType: pokemonStatType) => {
        const statsArray: { name: string; image: string }[] = []
        const statsSet = new Set<string>()
        types.forEach((type: pokemonTypeInterface) => {
            const key = Object.keys(type)[0]

            type[key][statType].forEach((stat: string) => {
                if (!statsSet.has(stat)) {
                    //@ts-ignore
                    statsArray.push({ name: stat, image: pokemonTypes[stat].image })
                    statsSet.add(stat)
                }
            })
        })
        return statsArray
    }

    const getStats = () => {
        //const data = createStatsArray(pokemon?.types!, 'strength')
        return (
            <>
                <div className="pokemon-types grid grid-cols-[42%_58%] sm:grid-cols-[25%_75%] gap-2 w-full text-[0.4rem] lg:text-xs items-center border-b border-white/10">
                    <h4 className="pokemon-type-title">Strength</h4>
                    <div className="pokemon-type-icons flex flex-wrap gap-x-1 lg:gap-x-4 gap-y-1 w-full">
                        {
                            createStatsArray(pokemon?.types!, 'strength').map((stat: { image: string }) => (
                                <div className="pokemon-type flex justify-end items-center">
                                    <img src={stat.image} alt="pokemon type" className="w-4 h-4 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="pokemon-types  grid grid-cols-[42%_58%]  sm:grid-cols-[25%_75%] gap-2 w-full text-[0.4rem] lg:text-xs items-center border-b border-white/10">
                    <h4 className="pokemon-type-title">Resistance</h4>
                    <div className="pokemon-type-icons flex flex-wrap gap-x-1 lg:gap-x-4 gap-y-1 w-full">
                        {
                            createStatsArray(pokemon?.types!, 'resistance').map((stat: { image: string }) => (
                                <div className="pokemon-type flex justify-end items-center">
                                    <img src={stat.image} alt="pokemon type" className="w-4 h-4 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="pokemon-types  grid grid-cols-[42%_58%] sm:grid-cols-[25%_75%]  gap-2 w-full text-[0.4rem] lg:text-xs items-center border-b border-white/10">
                    <h4 className="pokemon-type-title">Vulnerable</h4>
                    <div className="pokemon-type-icons flex flex-wrap gap-x-1 lg:gap-x-4 gap-y-1 w-full">
                        {
                            createStatsArray(pokemon?.types!, 'vulnerable').map((stat: { image: string }) => (
                                <div className="pokemon-type flex justify-end items-center">
                                    <img src={stat.image} alt="pokemon type" className="w-4 h-4 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="pokemon-types grid-cols-[42%_58%] sm:grid-cols-[25%_75%] gap-2 w-full grid text-[0.4rem] lg:text-xs items-center border-b border-white/10">
                    <h4 className="pokemon-type-title">Weakness</h4>
                    <div className="pokemon-type-icons flex flex-wrap gap-x-1 lg:gap-x-4 gap-y-1 w-full">
                        {
                            createStatsArray(pokemon?.types!, 'weakness').map((stat: { image: string }) => (
                                <div className="pokemon-type flex justify-end items-center">
                                    <img src={stat.image} alt="pokemon type" className="w-4 h-4 md:h-6 md:w-6 lg:w-8 lg:h-8" />
                                </div>
                            ))
                        }
                    </div>
                </div>


            </>
        )
    }
    // const keys = Object.keys(pokemon!.types[0])
    //const bgTypePokemon = pokemon?.types[0][keys[0]].image
    //console.log(pokemon?.types[0][keys[0]].image);


    return (

        <div className="h-auto  sm:h-full w-full ">
            {
                isEmpty && (
                    <div className="empty flex justify-center items-center gap-4 sm:gap-12 flex-col h-full">
                        <button
                            className={`cursor-pointer p-8 flex justify-center items-center`}
                            onClick={() => navigate('/search')}
                        >
                            <img src={addImg} alt="" className="w-32 h-32 sm:w-40 sm:h-40 opacity-95" />
                        </button>
                        <h3 className="text-xs sm:text-sm">Add a Pokemon to Compare</h3>
                    </div>
                )
            }
            {
                pokemon && (
                    <div className="compare-element h-full flex flex-col gap-2 sm:grid md:grid-rows-[79%_11%] sm:gap-0  sm:grid-cols-1 relative">
                        <img src={pokemon?.types[0][Object.keys(pokemon!.types[0])[0]].image} alt="" className="absolute opacity-10 h-full sm:h-2/3  xl:h-5/6 -z-50" />
                        <div className="compare-info w-full flex sm:grid sm:grid-rows-[40%_60%] gap-2 sm:gap-0 px-0 sm:px-8">
                            <div className="compare-details flex flex-col justify-center items-center mt-4 w-5/12 sm:w-full">
                                <h3 className="uppercase text-sm sm:text-lg ">{pokemon?.name}</h3>
                                <img src={pokemon?.image} alt="pokemon" className="compare-image h-32 sm:h-44" />
                            </div>
                            <div className="pokemon-types-container flex flex-col gap-2 items-start justify-center place-self-center h-auto lg:h-full overflow-y-hidden overflow-x-hidden py-2 px-4 border-[0.005rem] border-white/10 lg:px-8  bg-white/5 rounded-xl mt-2 w-7/12 sm:w-full">
                                <div className="pokemon-types grid grid-cols-[42%_58%] sm:grid-cols-[25%_75%] gap-2  w-full text-[0.4rem] lg:text-xs items-center border-b border-white/10">
                                    <h4 className="pokemon-type-title">Type</h4>
                                    <div className="pokemon-type-icons flex gap-x-1 lg:gap-x-4 gap-y-1  w-full">
                                        {
                                            pokemon?.types.map((type: pokemonTypeInterface) => {
                                                const keys = Object.keys(type)
                                                return (
                                                    <div className="pokemon-type  flex justify-end items-center">
                                                        <img src={type[keys[0]].image} alt="iconstype pokemon"
                                                            className="w-4 h-4 md:h-6 md:w-6 lg:w-8 lg:h-8"
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    getStats()
                                }

                            </div>
                        </div>
                        {/* <div className="compare-actions-buttons grid grid-cols-3 w-full h-full"> */}
                        <div className="compare-actions-buttons w-full flex gap-4 justify-center items-center">
                            <button
                                className="compare-btn text-sm uppercase
                                border border-orange-600 hover:bg-gradient-to-r from-orange-600 to-orange-900 rounded-full w-8 h-8   sm:w-12 sm:h-12 cursor-pointer shadow-[0_0px_15px_0px] shadow-orange-600 group"
                                onClick={() => dispatch(addPokemonToList(pokemon))}

                            >
                                <RiHeartAddFill className="mx-auto text-base sm:text-2xl text-orange-600 group-hover:text-white" />
                            </button>
                            <button
                                className="compare-btn text-sm uppercase  hover:bg-gradient-to-r from-cyan-600 to-cyan-900 border border-cyan-600  rounded-full w-8 h-8   sm:w-12 sm:h-12 cursor-pointer  shadow-[0_0px_15px_0px] shadow-cyan-600 group"
                                onClick={() => navigate(`/pokemon/${pokemon.id}`)}
                            >
                                <FaEye className="mx-auto text-base sm:text-2xl text-cyan-600 group-hover:text-white" />
                            </button>
                            <button
                                className="compare-btn text-sm uppercase  hover:bg-gradient-to-r from-red-600 to-red-900 border border-red-600 rounded-full w-8 h-8   sm:w-12 sm:h-12 cursor-pointer shadow-[0_0px_15px_0px] shadow-red-600 group"
                                onClick={() => dispatch(removeFromCompare({ id: pokemon.id }))}
                            >
                                <IoTrashBinOutline className="mx-auto text-base sm:text-2xl text-red-600 group-hover:text-white" />
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CompareContainer