import { pokemonTypeInterface, userPokemonsType } from "../utils/Types"
import { GoGitCompare } from 'react-icons/go'
import { RiHeartAddFill } from 'react-icons/ri'
import { IoTrashBinOutline } from 'react-icons/io5'
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { addToCompare, setCurrentPokemon } from "../app/slices/PokemonSlice"
import { clearToasts, setPokemonTab, setToast } from "../app/slices/AppSlice"

import { addPokemonToList } from "../app/reducers/addPokemonToList"
import { removePokemon } from "../app/reducers/removePokemonFromUserList"
import { pokemonTabs } from "../utils/Constants"
import Loading from "./loading"


function PokemonCardGrid({ pokemons, loading }: { pokemons: userPokemonsType[], loading: any }) {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    return (
        <div className="pokemon-card-grid-container max-h-[80vh]  sm:max-h-[100vh] overflow-y-auto pb-40 ms:pb-4">
            <Loading loading={loading} />
            <div className="pokemon-card-grid grid grid-cols-2  gap-4 mt-4 mx-2 mb-8 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] sm:mx-20 sm:gap-16">
                {pokemons && pokemons.length > 0 && pokemons?.map((data: userPokemonsType) => {
                    const keys = Object.keys(data.types[0])
                    const keys2 = Object.keys(data.types)
                    //console.log(keys2.length);

                    const colorBorderImg = data.types[0][keys[0]].colorBorder
                    const colorBgCard = data.types[0][keys[0]].background
                    //console.log(data.types[0][keys[0]].color);

                    //console.log(data?.types[0]?.image);
                    //console.log(typeof keys);

                    return <div
                        className={` pokemon-card w-auto flex justify-center items-center flex-col rounded-3xl bg-gradient-to-tl border-[0.05rem] border-white/10 ${colorBgCard} shadow-[0px_0px_6px_2px] shadow-slate-800/50 p-4 relative sm:w-[250px]`}
                        key={data.id}
                    >
                        <div className="pokemon-card-list absolute top-4 left-4 cursor-pointer">
                            {location.pathname.includes('/pokemon') || location.pathname.includes('/search') ?
                                (<RiHeartAddFill
                                    //size={18}
                                    className="text-orange-500 text-lg transform duration-300 ease-in-out  hover:text-2xl hover:text-orange-600"
                                    onClick={() => dispatch(addPokemonToList(data))}
                                />) :
                                (<IoTrashBinOutline
                                    //size={18} 
                                    className="text-red-500 text-lg transform duration-300 ease-in-out  hover:text-2xl hover:text-red-600"
                                    onClick={async () => {
                                        await dispatch(removePokemon({ id: data.firebaseId! }))
                                        dispatch(setToast(`${data.name} has been eliminated`))
                                    }
                                    }
                                />)
                            }

                        </div>
                        <div className="pokemon-card-compare absolute top-4 right-4 cursor-pointer">
                            <GoGitCompare
                                // size={18}
                                className=" text-[#DCA20E] text-lg transform duration-300 ease-in-out  hover:text-2xl hover:text-[#C79411]"
                                onClick={() => {
                                    dispatch(clearToasts)
                                    //toast.success('holaaaaaaa'))
                                    dispatch(addToCompare(data))

                                    dispatch(setToast(`${data.name} Pokemon added to compare`))

                                }}
                            />
                        </div>
                        <div className={`${colorBorderImg} z-40 border-t-[0.5px] border-l-[0.5px] rounded-full cursor-pointer `}>
                            <img
                                src={data.image}
                                alt={data.name}
                                loading="lazy" className="pokemon-card-image h-20 sm:h-40"
                                onClick={() => {
                                    dispatch(setPokemonTab(pokemonTabs.description))
                                    dispatch(setCurrentPokemon(undefined))
                                    navigate(`/pokemon/${data.id}`)
                                }}
                            />
                        </div>

                        <h3 className="pokemon-card-title capitalize  text-xs text-center cursor-pointer mt-4 sm:text-sm">{data.name}</h3>
                        <div className={`pokemon-card-types w-full  grid grid-cols-2 ${keys2.length > 1 ? 'sm:grid-cols-[repeat(auto-fit,_minmax(60px,_1fr))]' : 'sm:grid-cols-[repeat(1,_minmax(60px,_120px))] grid-cols-[repeat(1,_minmax(40px,_65px))]'} gap-1 sm:gap-4 mt-4 sm:mt-8 items-center justify-center`}>
                            {data.types.map((type: pokemonTypeInterface, index: number) => {


                                const keys = Object.keys(type)
                                //console.log(typeof keys);
                                return (
                                    <div className={`pokemon-card-types-type flex border-[.5px] ${type[keys[0]].colorBorder} rounded-lg py-1 px-1 sm:px-2 justify-between items-center`} key={index}>
                                        <img
                                            src={type[keys[0]].image} alt="pokemon type"
                                            loading="lazy"
                                            className="h-3 sm:h-5"
                                        />
                                        <h6 className={`text-[0.3rem] sm:text-[0.45rem] capitalize ${type[keys[0]].colorText}`}>
                                            {keys[0]}
                                        </h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default PokemonCardGrid