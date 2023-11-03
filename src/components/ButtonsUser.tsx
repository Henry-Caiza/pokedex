import { useNavigate } from "react-router-dom"
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/FirebaseConfig';

import { setToast, setUserStatus } from '../app/slices/AppSlice';
import { useAppDispatch, useAppSelector } from "../app/hooks";



function ButtonsUser() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { userInfo } = useAppSelector(({ app }) => app)

    const handleLogout = () => {
        signOut(firebaseAuth)
        dispatch(setUserStatus(undefined))
        dispatch(setToast('You have been logged out'))
    }


    return (
        <>
            {
                userInfo ? <div className='flex   gap-2 items-center justify-end pr-4 my-4 md:my-0 lg:gap-4 tv:pr-8 '>
                    <button
                        className=' bg-white text-black h-9 font-sans px-6 py-2 w-auto flex items-center rounded-full font-semibold hover:opacity-90 text-[0.8rem] lg:text-base tv:h-14 tv:px-10 lg:w-auto lg:py-1 xl:py-2 tv:text-xl md:w-20 justify-center'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    <div className="bg-[#613eedc4] w-10 h-10 justify-center rounded-full flex items-center tv:w-16 tv:h-16">
                        <p className="text-2xl text-white uppercase font-sans font-semibold tv:text-3xl=">{userInfo?.email.slice(0, 1)}</p>
                    </div>
                </div> :
                    <div className=' flex  gap-4 items-center justify-end pr-4 my-4 md:my-0'>
                        <div
                            className=' bg-white h-9 font-sans px-6 py-2 w-auto flex items-center justify-center rounded-full hover:opacity-90 cursor-pointer'
                            onClick={() => navigate('/list')}

                        >
                            <p className=" text-black text-base font-sans font-semibold">Log in</p>
                        </div>
                    </div>
            }


        </>
    )
}

export default ButtonsUser