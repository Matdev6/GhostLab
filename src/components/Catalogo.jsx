import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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


    return (

        <section className="w-screen altura-tela  bg-black flex flex-col">
            <h1 className='text-white font-bold text-4xl lg:text-4xl my-auto mx-auto lg:ml-24 uppercase'>Beats Exclusivos 🔥</h1>
            <div className=' h-3/4 w-full mx-auto  justify-center gap-4 items-center lg:flex-row hidden lg:flex'>
                <button>
                    <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#AD26E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
                    </svg>
                </button>
                <div className='bg-white w-52 h-52 md:w-48 md:h-48 relative'>
                    <img src={beat1} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-48 md:h-48 relative'>
                    <img src={beat2} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-48 md:h-48 relative'>
                    <img src={beat3} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-48 md:h-48 relative'>
                    <img src={beat4} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <div className='bg-white w-52 h-52 md:w-48 md:h-48 relative'>
                    <img src={beat5} alt="beat1" className='w-full h-full object-cover' />
                    <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                </div>
                <button><svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#AD26E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
            </div>
            <div className='flex lg:hidden justify-center w-full my-auto'>
                <div className='max-w-[90%] '>
                    <Swiper
                    // install Swiper modules
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={200}
                        slidesPerView={2}
                        navigation
                        centeredSlides={true}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='text-white'>
                            <div className='bg-white w-72 h-72  relative'>
                                <img src={beat1} alt="beat1" className='w-full h-full object-cover' />
                                <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-white'>
                            <div className='bg-white w-72 h-72  relative'>
                                <img src={beat2} alt="beat1" className='w-full h-full object-cover' />
                                <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-white'>
                            <div className='bg-white w-72 h-72  relative'>
                                <img src={beat3} alt="beat1" className='w-full h-full object-cover' />
                                <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-white'>
                            <div className='bg-white w-72 h-72  relative'>
                                <img src={beat4} alt="beat1" className='w-full h-full object-cover' />
                                <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='text-white'>
                            <div className='bg-white w-72 h-72  relative'>
                                <img src={beat5} alt="beat1" className='w-full h-full object-cover' />
                                <h1 className='bg-roxo-claro text-white px-4 py-1 text-sm absolute top-0 left-0'>Novidade!</h1>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    )

}

export default Catalogo