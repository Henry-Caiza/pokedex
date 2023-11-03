
import { pokemonTabs } from '../utils/Constants';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setPokemonTab } from '../app/slices/AppSlice';



function Footer() {

    const dispatch = useAppDispatch()
    const { currentPokemonTab } = useAppSelector(({ app }) => app)

    const routes = [
        {
            name: pokemonTabs.description,
            value: "Description",
            style_btn: 'border-emerald-600 shadow-emerald-600 from-emerald-500 to-emerald-900',
        },
        {
            name: pokemonTabs.evolution,
            value: "Evolutions",
            style_btn: 'border-pink-600 shadow-pink-600 from-pink-500 to-pink-900',
        },
        {
            name: pokemonTabs.locations,
            value: "Catching",
            style_btn: 'border-teal-600 shadow-teal-600 from-teal-500 to-teal-900',
        },
        {
            name: pokemonTabs.moves,
            value: "Moves",
            style_btn: 'border-rose-600 shadow-rose-600 from-rose-500 to-rose-900',
        },
    ];

    return (
        // <footer className='grid grid-cols-[5rem_auto_5rem] border-t-[0.5px] border-slate-800'>
        <footer className='w-full mt-1 footer-path bg-slate-600 h-full'>
            <div className="data w-[99.8%] h-[99%] mt-[1px] mx-auto footer-path border-slate-800 bg-secondary flex items-center">
                <ul className='w-full grid grid-cols-4 gap-1 sm:gap-4 lg:gap-12 px-8 sm:px-20 lg:px-40 md:pb-8 lg:pb-1'>
                    {routes.map((route) => {
                        return (
                            <li
                                key={route.name}
                                onClick={() => { dispatch(setPokemonTab(route.name)) }}
                                className={`border rounded-full text-[0.6rem] px-2 md:px-0 lg:text-base font-semibold py-1 text-center font-sans tracking-wider shadow-[0_0px_15px_-2px] cursor-pointer hover:bg-gradient-to-r 
                                ${route.style_btn} 
                                ${currentPokemonTab === route.name ? "bg-gradient-to-r" : ""}`}
                            >
                                {route.value}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </footer>
    )
}

export default Footer