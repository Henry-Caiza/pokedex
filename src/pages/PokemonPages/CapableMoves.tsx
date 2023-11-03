import { useAppSelector } from "../../app/hooks";

function CapableMoves() {
    const pokemonData = useAppSelector((
        {
            pokemon: { currentPokemon }
        }
    ) => currentPokemon)
    //console.log(pokemonData?.image);



    return (
        <div className=" w-full overflow-y-auto px-2 relative">
            <h2 className="text-center my-6">Abilities</h2>
            <img src={pokemonData?.image} alt="" className="fixed -z-50 opacity-10 w-[30rem] left-[calc(50%-15rem)] bottom-[6rem]" />
            <ul className="grid grid-cols-3 sm:grid-cols-5 auto-rows-[80px] sm:auto-rows-[130px] gap-2 sm:gap-4 mb-2 ">
                {
                    pokemonData?.pokemonAbilities?.abilities?.map((ability: string) => (
                        <li key={ability} className="bg-[var(--accent-color)] border border-white/5 text-[0.5rem] md:text-xs lg:text-sm  rounded-xl p-3 md:p-6 flex items-center justify-center">
                            {ability}
                        </li>
                    ))
                }
            </ul>

            <h2 className="text-center my-6">Moves</h2>
            <img src={pokemonData?.image} alt="" className="fixed -z-50 opacity-10 w-[30rem] left-[calc(50%-15rem)] bottom-[6rem]" />
            <ul className="grid grid-cols-3 sm:grid-cols-5 auto-rows-[80px] sm:auto-rows-[130px] gap-2 sm:gap-4 mb-2">
                {
                    pokemonData?.pokemonAbilities?.moves?.map((move: string) => (
                        <li key={move} className=" bg-white/5 border border-white/10 text-[0.5rem] md:text-xs lg:text-sm  rounded-xl p-3 md:p-6 flex items-center justify-center">
                            {move}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default CapableMoves