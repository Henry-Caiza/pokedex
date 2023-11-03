
import Wrapper from '../sections/Wrapper'
import { useAppSelector } from '../app/hooks'
import CompareContainer from '../components/CompareContainer'
import { useNavigate } from 'react-router-dom'
import ButtonsUser from '../components/ButtonsUser'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

function Compare() {
    const { compareQueue } = useAppSelector(({ pokemon }) => pokemon)
    const navigate = useNavigate()
    //console.log(compareQueue[0]);

    return (
        <div className='compare flex flex-col sm:grid sm:grid-cols-[49%_2%_49%] h-full w-full px-2 md:px4  max-sm:row-star-1 max-sm:row-end-1 relative pt-16 sm:pt-2'>
            <div className='flex sm:hidden w-full justify-between absolute top-0'>
                <button
                    className=' z-50 '
                    onClick={() => navigate(-1)}
                >
                    <BsFillArrowLeftCircleFill size={30} className='text-white/80' />
                </button>
                <ButtonsUser />
            </div>

            <CompareContainer
                pokemon={compareQueue[0]}
                isEmpty={compareQueue.length < 1}

            />
            <hr className='block sm:hidden my-4 border-[1px] border-white/20' />
            <div className='hidden sm:flex h-full w-[2px] bg-slate-800 place-self-center'></div>
            <CompareContainer
                pokemon={compareQueue[1]}
                isEmpty={compareQueue.length < 2}
            />
        </div>
    )
}

export default Wrapper(Compare)