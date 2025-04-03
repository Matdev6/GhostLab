import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

import Beats from '../components/Beats';
import beats from '../components/beatsData'; // Agora funciona com default export
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Catalogo = () => {



    return (
        // Cria section que irá exibir o catalogo
        <section className="w-screen altura-tela bg-neutral-950 flex flex-col">
            <div className='flex flex-col my-auto'>
                <h1 className='text-white font-semibold text-3xl  mb-20 mx-auto lg:ml-24 uppercase '>Beats Exclusivos 🔥</h1>
                {/* Catalogo dos beats no pc, no mobile irá ficar oculto */}

                {/* Catalogo mobile usando o Swiper para fazer um carrosel, fica oculto no pc */}
                <div className='flex  justify-center w-full my-auto'>
                    <motion.div className='max-w-[100%]'
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}>
                            <div className='lg:mx-10'>
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            scrollbar={{ draggable: true }}
                            breakpoints={{
                                760: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 5,
                                },
                            }}
                            style={{
                                '--swiper-navigation-color': '#AD26E3', // Customiza as cores do navigation
                            }}
                        >
                            {beats.map((beat, index) => (
                                <SwiperSlide className='text-white' key={index}>
                                    <Beats imageSrc={beat.img} name={beat.name}  />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    )

}

export default Catalogo