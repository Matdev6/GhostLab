import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { motion } from "framer-motion";
import BeatsMobile from '../components/BeatsMobile';
import Beats from '../components/Beats';
import beat1 from "../assets/beat1.jfif"
import beat2 from "../assets/beat2.jfif"
import beat3 from "../assets/beat3.jfif"
import beat4 from "../assets/beat4.jfif"
import beat5 from "../assets/beat5.jfif"

const NaoExclusivo = () => {

    const beats = [
        { name: "Nome do beat 01", img: beat1,},
        { name: "Nome do beat 02", img: beat2 },
        { name: "Nome do beat 03", img: beat3 },
        { name: "Nome do beat 04", img: beat4 },
        { name: "Nome do beat 05", img: beat5 },
    ];

    return(
        <section className="altura-tela bg-black w-screen">
            <div className="flex flex-col ">
                <h1 className="text-white text-3xl font-semibold uppercase mx-auto m-20 lg:ml-24">Beats não exclusivos</h1>
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
                <motion.div className='flex lg:hidden mt-10'>
                    <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true}}
                    style={{
                        '--swiper-navigation-color': '#AD26E3', // Customiza as cores do navigation
                    }}>
                        {beats.map((beat, index) => (
                            <SwiperSlide>
                                <BeatsMobile imageSrc={beat.img} name={beat.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}

export default NaoExclusivo