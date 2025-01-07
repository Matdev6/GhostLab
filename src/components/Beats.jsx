import { useState } from "react"


const Beats = ({ imageSrc, label = "Novidade!" }) => {
    const [isModalOpen, setIsModelOpen] = useState(false)
    return (
        <div className='bg-white w-2/12  relative'>
            <div onClick={() => setIsModelOpen(true)}>
            <img src={imageSrc} alt="beat1" className='w-full h-full object-cover' />
            <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>{label}</h1>
            </div>
        </div>


    )
}

export default Beats

