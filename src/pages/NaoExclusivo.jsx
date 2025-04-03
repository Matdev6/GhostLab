import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { motion } from "framer-motion";
import Beats from '../components/Beats';
import beats from '../components/beatsData';


const NaoExclusivo = () => {


    return(
        <section className="altura-tela bg-neutral-950 w-screen">
            <div className="flex flex-col ">
                <h1 className="text-white text-3xl w-3/4 text-center sm:text-start font-semibold uppercase mx-auto m-20 lg:ml-24">Beats não exclusivos</h1>
                <motion.div className='hidden lg:flex w-screen'>
                    <Swiper modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation
                    scrollbar={{ draggable: true}}
                    style={{
                        '--swiper-navigation-color': '#AD26E3', // Customiza as cores do navigation
                    }}
                    >

                    </Swiper>
                </motion.div>
                <motion.div className='flex  mt-10'>
                    <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true}}
                    breakpoints={{
                        760: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 5,
                        },
                    }}
                    sty
                    style={{
                        '--swiper-navigation-color': '#AD26E3', // Customiza as cores do navigation
                    }}>
                        {beats.map((beat, index) => (
                            <SwiperSlide key={index}>
                                <Beats imageSrc={beat.img} name={beat.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}

export default NaoExclusivo