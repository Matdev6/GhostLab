import beat1 from "../assets/beat1.jfif"



const Beats = ({ imageSrc, label = "Novidade!" }) => {
    return (
        <div className='bg-white w-2/12  relative'>
            <img src={imageSrc} alt="beat1" className='w-full h-full object-cover' />
            <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>{label}</h1>
        </div>
    )
}

export default Beats

