import { FcGoogle } from 'react-icons/fc'
import pokemonLogo from '../assets/pokemon-logo.png'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseAuth, firebaseDB, usersRef } from '../utils/FirebaseConfig'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useAppDispatch } from '../app/hooks'
import { setUserStatus } from '../app/slices/AppSlice'

function Login() {

    const dispatch = useAppDispatch();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const {
            user: { email, uid },
        } = await signInWithPopup(firebaseAuth, provider);

        if (email) {
            const firestoreQuery = query(usersRef, where("uid", "==", uid));
            const fetchedUser = await getDocs(firestoreQuery);
            if (fetchedUser.docs.length === 0) {
                await addDoc(collection(firebaseDB, "users"), {
                    uid,
                    email,
                });
            }
            dispatch(setUserStatus({ email }));
        }
    };


    return (
        <div className="login bg-slate-500/20 mt-4 w-4/5 md:w-2/5 mx-auto rounded-xl flex flex-col items-center gap-6 sm:gap-8 p-6 sm:p-8">
            <h2 className='text-xs sm:text-sm'>Welcome</h2>

            <div className='head-login flex flex-col gap-10 sm:gap-16 items-center'>
                <img src={pokemonLogo} alt="" className='w-4/5' />
                <h3 className='text-center text-sm sm:text-base px-4'>Start Adding Pokemons with an account for free</h3>
            </div>
            <button
                className='login-btn w-full flex justify-center items-center gap-2 sm:gap-4 border border-slate-700 bg-slate-900 rounded-full py-2 px-4 sm:px-8 hover:bg-slate-700 mb-2'
                onClick={handleLogin}
            >
                <FcGoogle className='text-xl md:text-3xl' />
                <p className='font-sans font-bold text-xs sm:text-sm tracking-wide'>Sign in with Google</p>
            </button>
        </div>
    )
}

export default Login