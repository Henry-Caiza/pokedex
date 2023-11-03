
const Wrapper = (Component: React.FC) => () => {
    return (
        <div className="content mx-2 sm:mx-4 lg:mx-20  h-screen flex justify-center relative overflow-hidden">
            <Component />
        </div>
    )
}



export default Wrapper