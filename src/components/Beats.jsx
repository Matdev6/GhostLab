import { Link } from "react-router-dom"


const Beats = ({ imageSrc, label = "Novidade!", name}) => {
    return (
        <Link to={`/home/beat/${name}`}>
            <div className="flex flex-col">
                <div className='bg-white w-72 md:w-72 h-72 md:h-72 mx-auto relative'>
                    <img src={imageSrc} alt={name} className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>{label}</h1>
                </div>
                <h1 className="sm:ml-10 ml-10 mt-3 mb-2 text-lg font-semibold text-violet-400 ">{name}</h1>
            </div>
        </Link>
    )
}

export default Beats