// Import Swiper React components
import {image1,image3,image2,image4,image5,image6,image7} from '../../assets/images/images'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Slider=()=>{
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} className='w-full h-96 object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} className='w-full h-96 object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} className='w-full h-96 object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={image4} className='w-full h-96 object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={image5} className='w-full h-96 object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={image6} className='w-full h-96 object-cover' alt="" /></SwiperSlide>
        <SwiperSlide><img src={image7} className='w-full h-96 object-cover' alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}