import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import beat1 from "../assets/beat1.jfif"
import beat2 from "../assets/beat2.jfif"
import beat3 from "../assets/beat3.jfif"
import beat4 from "../assets/beat4.jfif"
import beat5 from "../assets/beat5.jfif"

const Catalogo = () => {


    return (

        <div className="w-screen altura-tela  bg-black flex flex-col">
            <h1 className='text-white font-bold text-4xl my-auto ml-24 uppercase'>Beats Exclusivos 🔥</h1>
            <div className=' h-3/4 w-full mx-auto flex justify-center gap-4 items-center flex-col lg:flex-row'>
                <button>⬅️</button>
                <div className='bg-white w-52 h-52 md:w-56 md:h-56 relative'>
                    <img src={beat1} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-56 md:h-56 relative'>
                    <img src={beat2} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-56 md:h-56 relative'>
                    <img src={beat3} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-56 md:h-56 relative'>
                    <img src={beat4} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-56 md:h-56 relative'>
                    <img src={beat5} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <button>➡️</button>
            </div>
        </div>

    )

}

export default Catalogo