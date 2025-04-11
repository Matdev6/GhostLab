import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, useState } from 'react';
import Beats from '../components/Beats';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const Catalogo = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const [beats, setBeats] = useState([]);

    // GET dos beats exclusivos
    useEffect(() => {
        const fetchBeats = async () => {
            try {
                const response = await axios.get("http://localhost:8000/beats/");
                const exclusivos = response.data.filter(beat => beat.exclusive); // apenas exclusivos
                console.log("Beats exclusivos:", exclusivos);
                setBeats(exclusivos);
            } catch (error) {
                console.error("Erro ao buscar beats:", error);
            }
        };

        fetchBeats();
    }, []);

    // Inicializa os botões personalizados depois que o Swiper estiver renderizado
    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.swiper &&
            prevRef.current &&
            nextRef.current
        ) {
            const swiperInstance = swiperRef.current.swiper;

            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            swiperInstance.navigation.destroy(); // limpa navegação anterior
            swiperInstance.navigation.init();     // inicializa com os novos refs
            swiperInstance.navigation.update();   // atualiza
        }
    }, [beats]);

    return (
        <section className="w-screen altura-tela bg-neutral-950 flex flex-col relative">
            <div className="flex flex-col my-auto">
                <h1 className="text-white font-black text-3xl sm:text-4xl mb-20 mx-auto lg:ml-24 uppercase">
                    Beats Exclusivos
                </h1>

                <div className="flex justify-center w-full my-auto">
                    <div className="max-w-[95%] transition-all duration-500">
                        <div className="lg:mx-10 relative">
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={
                                    beats.length === 0
                                        ? 1
                                        : beats.length === 1
                                            ? 1
                                            : beats.length === 2
                                                ? 2
                                                : beats.length < 5
                                                    ? beats.length
                                                    : 5
                                }
                                navigation={true}
                                scrollbar={{ draggable: true }}
                                breakpoints={{
                                    760: {
                                        slidesPerView: beats.length >= 2 ? 2 : 1,
                                    },
                                    1024: {
                                        slidesPerView: beats.length >= 5 ? 5 : beats.length,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="swiper-no-scrollbar relative"
                            >
                                {beats.map((beat) => (
                                    <SwiperSlide className="text-white" key={beat.id}>
                                        <Beats
                                            imageSrc={`http://localhost:8000/uploads/${beat.image_path.split('/').pop()}`}
                                            name={beat.name}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Botões de navegação personalizados */}
                            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6 z-50">
                                <button
                                    ref={prevRef}
                                    className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all relative sm:right-14 right-8 bottom-8"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    ref={nextRef}
                                    className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all relative sm:left-14 left-8 bottom-8"
                                >
                                    <ChevronRight className="w-6 h-6 " />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalogo;
