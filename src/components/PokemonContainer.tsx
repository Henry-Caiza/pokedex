
import { useAppDispatch } from '../app/hooks';
import { addPokemonToList } from '../app/reducers/addPokemonToList';
import imgBallBg from '../assets/pokebg.png'
import { currentPokemonType } from '../utils/Types';
import { RiHeartAddFill } from 'react-icons/ri'


function PokemonContainer({
    data,
}: {
    data: currentPokemonType | undefined;
}) {
    const dispatch = useAppDispatch();
    return (
        <div className="w-full h-full flex justify-center relative ">
            <div className="h-[45%] w-[26rem] cell:w-full md:w-full md:h-full flex items-end justify-center md:items-center max-md:absolute -top-0 max-md:bg-gradient-to-b max-md:from-[var(--accent-color)] max-md:to-white  rounded-bl-full rounded-br-full pb-2 md:pb-40 lg:pb-0">
                <img src={data?.image} alt="" className='w-52 lg:w-72' />
                <img src={imgBallBg} alt="" className='hidden md:flex md:absolute h-64 lg:h-[22rem] -z-20 drop-shadow-[0px_0px_50px_var(--accent-color)] opacity-50 ' />
                <button
                    className='flex z-50 text-white w-[30px] h-[30px] rounded-full bg-primary absolute bottom-1 items-center justify-center border-[1px] border-[var(--accent-color)] md:hidden '
                    onClick={() => dispatch(addPokemonToList(data!))}
                >
                    <RiHeartAddFill size={18} className='' />
                </button>
            </div>
        </div>
    )
}

export default PokemonContainer