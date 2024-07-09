'use client'
import html5 from "../../../public/images/html5.png";
import css3 from "../../../public/images/css3.png";
import javascript from "../../../public/images/javascript.png";
import jqueryImg from "../../../public/images/jquery.png";
import github from "../../../public/images/github.png";
import tailwind from "../../../public/images/tailwind.png";
import react from "../../../public/images/react.png";
import shopify from "../../../public/images/shopify.png";
import wordpress from "../../../public/images/wordpress.png";
import zoho from "../../../public/images/zoho.png";
import zapier from "../../../public/images/zapier.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Mousewheel } from 'swiper/modules';
import grid_bg from "../../../public/images/grid_bg.png";

const IconsWithTitles = () => {

    return (
        <div className="relative">
            <div className="min:h-[100vh] w-full icon_slider relative">
                <div className="w-full h-full flex items-center justify-center flex-col px-[20px] md:max-w-[80vw] mx-[auto]">
                    <Swiper
                        breakpoints={{
                            320: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 3,
                            },
                            1024: {
                              slidesPerView: 4,
                            },
                        }}
                        spaceBetween={30}
                        mousewheel={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Mousewheel, Autoplay]}
                        className='pt-[20px] flex flex-wrap justify-center items-start w-full'
                    >
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={html5.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>HTML5</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={css3.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>CSS3</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={javascript.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Javascript</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={jqueryImg.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Jquery</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={github.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>GitHub</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={tailwind.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Tailwind</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={react.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>React</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={shopify.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Shopify</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='contrast-[0] h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={wordpress.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>WordPress</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={zoho.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Zoho</span>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <img className='h-[70px] md:h-[120px] mx-[auto] object-contain w-[auto] icon_image' src={zapier.src} />
                            <span className='text-[3vw] md:text-[1.1vw] mt-[20px] block text-center'>Zapier</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default IconsWithTitles;