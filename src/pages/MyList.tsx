
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getUserPokemons } from '../app/reducers/getUserPokemons'
import Login from '../components/Login'
import PokemonCardGrid from '../components/PokemonCardGrid'
import Wrapper from '../sections/Wrapper'
import { useEffect, useState } from 'react'
import imageEmpty from '../assets/empty.png'
import toast from 'react-hot-toast'
import Loading from '../components/loading'

function MyList() {

    const { userInfo } = useAppSelector(({ app }) => app)
    const { userPokemons } = useAppSelector(({ pokemon }) => pokemon)
    const dispatch = useAppDispatch()
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        try {
            dispatch(getUserPokemons())
        } catch (error) {
            if (error) {
                toast.error('Error', {
                    //className: 'toast ',
                    style: {
                        border: 'transparente',
                        padding: '0.9rem 1rem',
                        color: 'white',
                        backgroundColor: '#333333',
                        fontSize: '1rem',
                        fontFamily: 'roboto',
                        textTransform: 'capitalize',
                    },
                    iconTheme: {
                        primary: '#A70408',
                        secondary: 'white',
                    },
                })
            }
        }
        setLoading(false)

    }, [userInfo, dispatch])

    //console.log(userPokemons);

    return (
        <div className='list h-full w-full relative'>

            {
                userInfo ? <h2 className='text-center my-6'>My List</h2> : <></>
            }
            <Loading loading={loading} />
            {
                userPokemons?.length === 0 && !loading ? <div className='w-full'>
                    <p className='text-base text-center mt-20'>You don't have pokemons yet</p>
                    <img src={imageEmpty} alt="" className='w-1/4 mx-auto' />
                </div> : null
            }
            {
                userInfo ?
                    <PokemonCardGrid pokemons={userPokemons} loading={loading} />
                    : <Login />
            }

        </div>
    )
}

export default Wrapper(MyList)