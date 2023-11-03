

import { BounceLoader } from "react-spinners"

function Loading({ loading }: any) {


    return (
        <>
            {
                loading ?
                    <div
                        className={`h-full flex items-center justify-center bg-gradient-to-b from-primary from-40% to-secondary  w-full z-50 absolute`}
                    >
                        <BounceLoader color="#22c55e" size={60} loading={loading} className="w-screen h-screen" />
                    </div> :
                    null
            }
        </>


    )
}

export default Loading