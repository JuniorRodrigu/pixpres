/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";



export default function Banner()  {

    return (
        <div className={styles.container}> 
        <Swiper
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        className={styles.swiper}
        modules={[Autoplay]}
        loop={true}
       
      >
        <SwiperSlide className={styles.slide} ><img src="https://firebasestorage.googleapis.com/v0/b/testedelyv.appspot.com/o/images%2Fdownload.jpg?alt=media&token=80465e59-9a1e-4dcc-9b63-52f7d96454fe" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.slide} ><img src="https://firebasestorage.googleapis.com/v0/b/testedelyv.appspot.com/o/images%2Fdownload.jpg?alt=media&token=80465e59-9a1e-4dcc-9b63-52f7d96454fe" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.slide} ><img src="https://firebasestorage.googleapis.com/v0/b/testedelyv.appspot.com/o/images%2Fdownload.jpg?alt=media&token=80465e59-9a1e-4dcc-9b63-52f7d96454fe" alt="" /></SwiperSlide>
        
        
      </Swiper></div>


    );




}