

import Compare from "./pages/Compare"
import MyList from "./pages/MyList"
import Pokemon from "./pages/Pokemon"
import Search from "./pages/Search"
import Navbar from "./sections/Navbar"
import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { clearToasts, setUserStatus } from "./app/slices/AppSlice"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseAuth } from "./utils/FirebaseConfig"

function App() {

  const { toasts } = useAppSelector(({ app }) => app)
  const dispatch = useAppDispatch()


  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        dispatch(setUserStatus({ email: currentUser.email }))
      }
    })
  }, [dispatch])

  useEffect(() => {
    if (toasts.length) {

      toasts.forEach((message: string) => {
        //toast(message, toastOptions)
        toast.success(message, {
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
            primary: '#61D345',
            secondary: 'white',
          },
        })
      })
      dispatch(clearToasts())
    }
  }, [toasts, dispatch])

  return (
    <div className=" relative w-full overflow-hidden h-full">
      {/* <Background /> */}
      <BrowserRouter>

        <div className="app z-10 bg-gradient-to-b from-primary from-20% md:from-50% to-secondary h-[100vh] w-full  md:h-[100vh] md:w-[100vw] backdrop-blur-xl border border-[rgba(23,20,20,0.37)] grid grid-rows-[auto_auto] md:grid md:grid-rows-[auto_auto] md:grid-cols-1 ">
          <Navbar />
          <Routes>
            <Route element={<Search />} path="/search" />
            <Route element={<MyList />} path="/list" />
            <Route element={<Compare />} path="/compare" />
            <Route element={<Pokemon />} path="/pokemon/:id" />
            <Route element={<Navigate to='/pokemon/1' />} path="*" />

          </Routes>

          <Toaster />
        </div>

      </BrowserRouter>

    </div>
  )
}

export default App