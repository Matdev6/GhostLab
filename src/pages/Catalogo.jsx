import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import Beats from '../components/Beats';
import BeatsMobile from '../components/BeatsMobile';
import beat1 from "../assets/beat1.jfif"
import beat2 from "../assets/beat2.jfif"
import beat3 from "../assets/beat3.jfif"
import beat4 from "../assets/beat4.jfif"
import beat5 from "../assets/beat5.jfif"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Catalogo = () => {

    const beats = [
        { name: "Nome do beat 01", img: beat1 },
        { name: "Nome do beat 02", img: beat2 },
        { name: "Nome do beat 03", img: beat3 },
        { name: "Nome do beat 04", img: beat4 },
        { name: "Nome do beat 05", img: beat5 },
    ];

    return (
        // Cria section que irá exibir o catalogo
        <section className="w-screen altura-tela  bg-black flex flex-col">
            <div className='flex flex-col my-auto'>
                <h1 className='text-white font-bold text-3xl lg:text-4xl mb-20 mx-auto lg:ml-24 uppercase '>Beats Exclusivos 🔥</h1>
                {/* Catalogo dos beats no pc, no mobile irá ficar oculto */}
                <div className=' h-3/4 w-full mx-auto  justify-center gap-4 items-center lg:flex-row hidden lg:flex'>
                    <button>
                        <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#AD26E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
                        </svg>
                    </button>
                    {/* Usa o map para redendizar o componente Beats para cada imagem*/}

                    {[beat1, beat2, beat3, beat4, beat5].map((beat, index) => (
                        <Beats imageSrc={beat} key={index} />
                    ))}
                    <button><svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#AD26E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                </div>
                {/* Catalogo mobile usando o Swiper para fazer um carrosel, fica oculto no pc */}
                <div className='flex lg:hidden justify-center w-full my-auto'>
                    <motion.div className='max-w-[100%]'
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}>
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            centeredSlides={true}
                            scrollbar={{ draggable: true }}
                            style={{
                                '--swiper-navigation-color': '#AD26E3', // Customiza as cores do navigation
                            }}
                        >
                            {beats.map((beat, index) => (
                                <SwiperSlide className='text-white' key={index}>
                                    <BeatsMobile imageSrc={beat.img} name={beat.name} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </section>

    )

}

export default Catalogo