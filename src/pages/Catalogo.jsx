import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import Beats from '../components/Beats';
import beats from '../components/beatsData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Catalogo = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
            swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <section className="w-screen altura-tela bg-neutral-950 flex flex-col relative">
            <div className="flex flex-col my-auto">
                <h1 className="text-white font-black text-3xl sm:text-4xl mb-20 mx-auto lg:ml-24 uppercase">Beats Exclusivos</h1>

                <div className="flex justify-center w-full my-auto">
                    <div className="max-w-[95%] transition-all duration-500">
                        <div className="lg:mx-10 relative">
                            {/* Swiper */}
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                                scrollbar={{ draggable: true }}
                                breakpoints={{
                                    760: { slidesPerView: 2 },
                                    1024: { slidesPerView: 5, spaceBetween: 0 },
                                }}
                                style={{ '--swiper-navigation-color': '#AD26E3' }}
                                className="swiper-no-scrollbar relative"
                            >
                                {beats.map((beat, index) => (
                                    <SwiperSlide className="text-white" key={index}>
                                        <Beats imageSrc={beat.img} name={beat.name} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Botões de navegação personalizados */}
                            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6 z-50">
                                <button ref={prevRef} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all relative sm:right-14 right-8 bottom-8">
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button ref={nextRef} className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all relative sm:left-14 left-8 bottom-8">
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
