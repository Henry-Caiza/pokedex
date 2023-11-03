
import imgBallBg from '../assets/pokebg.png'



function PokemonContainer({ image }: { image: string }) {
    return (
        <div className="w-full h-full flex justify-center relative ">

            <div className="h-[45%] w-[26rem] cell:w-full md:w-full md:h-full flex items-end justify-center md:items-center max-md:absolute -top-0 max-md:bg-gradient-to-b max-md:from-[var(--accent-color)] max-md:to-white  rounded-bl-full rounded-br-full pb-2 md:pb-40 lg:pb-0">
                <img src={image} alt="" className='w-52 lg:w-72' />
                <img src={imgBallBg} alt="" className='hidden md:flex md:absolute h-64 lg:h-[22rem] -z-20 drop-shadow-[0px_0px_50px_var(--accent-color)] opacity-50 ' />
            </div>
        </div>
    )
}

export default PokemonContainer