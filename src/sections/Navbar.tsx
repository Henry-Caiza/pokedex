import { Link, useLocation, useNavigate } from 'react-router-dom';
import pokeballIcon from '../assets/pokeball-icon.png'
import pokemon from '../assets/pokemon.png'
import fire from '../assets/fire.png'
import search from '../assets/search.png'
import favorites from '../assets/favorites.png'
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/FirebaseConfig';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setToast, setUserStatus } from '../app/slices/AppSlice';
import ButtonsUser from '../components/ButtonsUser';


function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { userInfo } = useAppSelector(({ app }) => app)

    const navigationRoutes = [
        {
            name: "Search",
            route: "/search",
            rootColor: 'shadow-md shadow-[#13b412]',
            color: 'bg-[#13b412]',
            color2: 'bg-[#13b412]/40',
            icon: search,
        },
        {
            name: "Compare",
            route: "/compare",
            rootColor: 'border-[#dca20e]',
            color: 'bg-[#dca20e]',
            color2: 'bg-[#dca20e]/40',
            icon: fire
        },
        {
            name: "Pokemon",
            route: "/pokemon",
            rootColor: 'border-[#b70202]',
            color: 'bg-[#b70202]',
            color2: 'bg-[#b70202]/40',
            icon: pokemon
        },
        {
            name: "My List",
            route: "/list",
            rootColor: 'border-[#c2410c]',
            color: 'bg-[#c2410c]',
            color2: 'bg-[#c2410c]/40',
            icon: favorites
        },
    ];

    useEffect(() => {
        const index = navigationRoutes.findIndex(({ route }) =>
            location.pathname.includes(route)
        )

        ul(index)
        underlineColor(index)
    }, [location.pathname, navigationRoutes])

    function underlineColor(index: number) {
        const underlines = document.querySelectorAll<HTMLElement>('.underline')
        removeBgUnderline(index, underlines[0])
        underlines[0].classList.add(navigationRoutes[index]?.color)

    }

    function removeBgUnderline(index: number, underline: any) {
        for (let i = 0; i < 4; i++) {
            if (i !== index) {
                underline.classList.remove(navigationRoutes[i]?.color)
            }
        }
    }

    function ul(index: number) {
        const underlines = document.querySelectorAll<HTMLElement>('.underline')
        for (let i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = "translate3d(" + index * 118 + "%,0,0)"
        }
    }


    const handleLogout = () => {
        signOut(firebaseAuth)
        dispatch(setUserStatus(undefined))
        dispatch(setToast('You have been logged out'))
    }


    return (

        <nav className={`flex flex-col border-b-[0.5px] border-slate-800  md:bg-secondary/50 md:grid md:grid-cols-[10rem_auto_10rem] xl:grid-cols-[11rem_auto_11rem] tv:grid-cols-[20rem_auto_20rem] ${location.pathname.includes('/compare') || location.pathname.includes('/pokemon')
            ? 'max-md:row-start-2 max-md:row-end-2' : 'max-md:row-start-1 max-md:row-end-1'} `}>
            <div
                className="blockk hidden justify-start items-center pl-4 md:flex tv:pl-8 order-1"
                onClick={() => navigate('./search')}
            >
                <img src={pokeballIcon} alt="pokeball icon" className='cursor-pointer h-10 tv:h-16' />
            </div>
            <div className="data order-3 md:order-2  px-4 md:px-0 lg:px-20 xl:px-60 ">
                <ul className='grid grid-cols-2 gap-x-3 gap-y-4 py-3 h-full z-10 relative md:grid md:grid-cols-[repeat(4,22%)] md:gap-4 lg:gap-5 xl:gap-7 tv:gap-16'>
                    <div className="hidden md:block underline absolute z-0 bottom-0  w-[22%] h-[calc(4px/2)] mix-blend-normal pointer-events-none transition ease-in-out duration-500 rounded-full"></div>
                    {
                        navigationRoutes.map(({ name, route, color, color2, icon }, i) => {
                            //console.log(color);

                            return (
                                <Link
                                    to={route}
                                    key={i}
                                    className={`h-[4.5rem]  border-b border-transparent rounded-3xl font-sans font-bold  my-auto hover:opacity-90  ${color2} sm:h-24 md:h-10 lg:h-11 xl:text-xs tv:h-16`}
                                >
                                    <div className={`w-full h-full flex justify-start pl-5 md:pl-2 xl:pl-4 items-center border-item-nav relative ${color}`}>

                                        <li className='uppercase cursor-pointer tracking-wider text-[0.8rem] sm:text-lg md:text-[0.6rem] lg:text-[0.8rem] tv:text-2xl'>{name}
                                        </li>
                                        <img src={icon} alt="icono" className='absolute w-12 h-12 sm:w-20 sm:h-20  md:w-6 md:h-6  xl:w-10 xl:h-10 -top-1 right-3' />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
            <ButtonsUser />

        </nav>

    )
}

export default Navbar