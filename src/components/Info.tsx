
import { pokemonTypes } from "../utils/getPokemonTypes";
import { useAppDispatch } from "../app/hooks";
import { addPokemonToList } from "../app/reducers/addPokemonToList";
import { setPokemonTab } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/Constants";
import { currentPokemonType, pokemonStatsType } from "../utils/Types";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


export default function Info({
    data,
}: {
    data: currentPokemonType | undefined;
}) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const createStatsArray = (types: string[], statType: string) => {
        const statsSet = new Set();
        try {
            types.forEach((type: string) => {
                // @ts-ignore
                // console.log(pokemonTypes[type][statType]);
                // @ts-ignore
                pokemonTypes[type][statType].forEach((stat: string) => {


                    if (!statsSet.has(stat)) {
                        statsSet.add(stat[0].toUpperCase() + stat.slice(1));
                    }
                });
            });
        } catch (err) {
            console.log(err);

        }

        return Array.from(statsSet);
    };

    return (
        <>
            <div className="details absolute top-4 left-4 p-4 rounded-2xl md:rounded-r-full bg-primary/50 shadow-[0px_0px_6px_2px] shadow-[var(--accent-color)] w-11/12 justify-center items-center flex flex-col md:bg-slate-400/10 md:items-start  md:w-80 md:before:h-1 md:before:rounded-r-full md:before:w-36 md:before:contents-[''] md:before:bg-[var(--accent-color)] md:before:absolute md:before:top-0 md:before:left-0  z-20">
                <h1 className="name uppercase text-base mb-4 text-center md:text-left">{data?.name}</h1>
                <div className='flex md:hidden w-full justify-between absolute top-2 left-0 px-2 z-50'>
                    <button
                        className=' z-50 '
                        onClick={() => navigate(-1)}
                    >
                        <BsFillArrowLeftCircleFill size={30} className='text-white/80' />
                    </button>
                    <button
                        className=' z-50 bg-white/80 rounded-full w-[30px] h-[30px] flex items-center justify-center'
                        onClick={() => navigate('/search')}
                    >
                        <AiFillHome size={20} className='text-primary/60' />
                    </button>
                </div>
                <h3 className="hidden md:block text-[.6rem] capitalize mb-2">TYPE: {data?.types.join(" - ")}</h3>
                <h3 className="text-[.6rem]">EVOLUTION: {data?.evolutionLevel}</h3>
                <button
                    className="text-[.5rem] absolute right-4 -bottom-6 p-2 bg-primary border-[0.1rem] border-[var(--accent-color)] rounded-r-full cursor-pointer z-50 "
                    onClick={() => dispatch(setPokemonTab(pokemonTabs.evolution))}>
                    Evolutions
                </button>
            </div>
            {
                data?.types.length === 1 ?
                    //@ts-ignore
                    <div className={`md:hidden w-[5rem] left-[calc(50%-2.5rem)] h-6 absolute top-[calc(49%-1rem)] px-2  flex items-center justify-center   ${data?.types[0] as unknown as string[]} rounded-lg`}>
                        <h3 className=" text-[.4rem] capitalize ">  {data?.types[0] as unknown as string[]}</h3>

                    </div> :
                    <div className="md:hidden h-6 absolute top-[calc(49%-1rem)] flex items-center justify-center w-[10rem] left-[calc(50%-5rem)] gap-1">
                        {
                            //@ts-ignore
                            <div className={`h-full flex items-center justify-center  px-2  ${data?.types[0] as unknown as string[]} rounded-lg`}>
                                <h3 className=" text-[.4rem] capitalize ">  {data?.types[0] as unknown as string[]}</h3>

                            </div>}
                        {
                            //@ts-ignore
                            <div className={`h-full flex items-center justify-center  px-2  ${data?.types[1] as unknown as string[]} rounded-lg`}>
                                <h3 className=" text-[.4rem] capitalize ">  {data?.types[1] as unknown as string[]}</h3>
                            </div>}
                    </div>
            }

            <div className="stats absolute max-md:left-2.5 top-[calc(60%-3rem)] h-28 md:h-[24%] lg:h-[34%] md:top-4 max-lg:right-0 lg:top-[calc(60%-3rem)]  lg:bottom-32 text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem] z-20 bg-slate-400/10 p-2 md:p-4 rounded-xl border-[1px] border-white/5 w-[95%] md:w-auto ">
                <ul className="flex flex-col gap-2 w-full h-full md:gap-3 lg:gap-4  justify-center">
                    {data?.stats?.map((stat: pokemonStatsType) => {
                        return (
                            <li
                                className="grid grid-cols-[1fr_auto_auto] items-start uppercase  gap-4"
                                key={stat.name}>
                                <p className="">{stat.name}</p>
                                <p>{stat.value}</p>

                                <progress
                                    max={190}
                                    value={stat.value}
                                    className="w-40 md:w-16 lg:w-24 xl:w-36 2xl:w-40"
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="battle-stats absolute max-md:top-[calc(60%+4rem)] max-lg:top-[calc(52%+3.5rem)] lg:bottom-12 right-0 md:right-2 lg:right-4 text-[0.35rem] md:text-[0.5rem] p-2 md:p-4 lg:p-6 w-full md:w-[98%] lg:w-[30%] z-20 leading-loose bg-transparent  md:bg-slate-400/10 md:shadow-[0px_0px_6px_2px] md:shadow-[var(--accent-color)] md:before:h-1  md:before:w-36 md:before:contents-[''] md:before:bg-[var(--accent-color)] md:before:absolute md:before:top-0 md:before:right-0">
                {
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-3 lg:flex lg:flex-col lg:gap-2">
                        <li className="flex flex-col flex-wrap gap-1 lg:gap-2 lg:flex-col ">
                            <span className="text-[0.5rem] lg:text-[0.6rem] font-semibold">Strengths: </span>
                            <div className="grid grid-cols-3 items-center justify-center gap-1 md:gap-x-3 md:gap-y-2">
                                {
                                    createStatsArray(
                                        data?.types as unknown as string[],
                                        "strength"
                                    ).map((type: any) => {
                                        return (
                                            <div className={`${type} rounded-md flex items-center justify-center py-[2px]`}>
                                                {type!}
                                            </div>
                                        )
                                    })
                                }
                            </div>


                        </li>
                        <li className="flex flex-col flex-wrap gap-1 lg:gap-2 lg:flex-col">
                            <span className="text-[0.5rem] lg:text-[0.6rem] font-semibold">Weakness: </span>
                            <div className="grid grid-cols-3 items-center justify-center gap-1 md:gap-x-3 md:gap-y-2">
                                {
                                    createStatsArray(
                                        data?.types as unknown as string[],
                                        "weakness"
                                    ).map((type: any) => {
                                        return (
                                            <div className={`${type} rounded-md flex items-center justify-center py-[2px]`}>
                                                {type!}
                                            </div>
                                        )
                                    })
                                }
                            </div>


                        </li>
                        <li className="flex flex-col flex-wrap gap-1 lg:gap-2 lg:flex-col">
                            <span className="text-[0.5rem] lg:text-[0.6rem] font-semibold">Resistant: </span>
                            <div className="grid grid-cols-3 items-center justify-center gap-1 md:gap-x-3 md:gap-y-2">
                                {
                                    createStatsArray(
                                        data?.types as unknown as string[],
                                        "resistance"
                                    ).map((type: any) => {
                                        return (
                                            <div className={`${type} rounded-md flex items-center justify-center py-[2px]`}>
                                                {type!}
                                            </div>
                                        )
                                    })
                                }
                            </div>


                        </li>
                        <li className="flex flex-col flex-wrap gap-1 lg:gap-2 lg:flex-col">
                            <span className="text-[0.5rem] lg:text-[0.6rem] font-semibold">Vulnerable: </span>
                            <div className="grid grid-cols-3 items-center justify-center gap-1 md:gap-x-3 md:gap-y-2">
                                {
                                    createStatsArray(
                                        data?.types as unknown as string[],
                                        "vulnerable"
                                    ).map((type: any) => {
                                        return (
                                            <div className={`${type} rounded-md flex items-center justify-center py-[2px]`}>
                                                {type!}
                                            </div>
                                        )
                                    })
                                }
                            </div>


                        </li>
                    </ul>
                }
                <button
                    onClick={() => dispatch(addPokemonToList(data!))}
                    className="hidden md:flex add-pokemon absolute -bottom-6 right-0 border border-[var(--accent-color)] p-2 bg-secondary"
                >
                    Add Pokemon
                </button>
            </div>
        </>
    );
}