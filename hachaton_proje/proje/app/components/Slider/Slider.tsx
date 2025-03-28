"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Slider.module.css";

const images = [
  "/images/hfttf2.jpeg",
  
  "/images/img_slider_34857_4007-2 SLİDER.jpg",
  "/images/img_slider_34844_4007  Açılış SLİDER.jpg",
  "/images/img_slider_34875_TÜBİTAK 2209-A ve 2209-B 1.jpg",
  "/images/img_slider_36334_ticaret-odasi-tekmer-is-birligi-SLİDER.jpg",

  "images/img_slider_36430_EGEKAF25 DOGE GAME JAM Serüveni SLİDER.jpg",
    "images/img_slider_36555_Kültür Buluşmaları AzerbaycanSLİDER.jpg",
    "images/img_slider_36540_17.png",
    "images/img_slider_36539_Robotik Eğitimleri Üzerine Semin.jpg",
    "images/img_slider_36534_ŞADİ OO Enerji Farkındalığı SLİDER.jpg",
    "images/img_slider_36430_EGEKAF25 DOGE GAME JAM Serüveni SLİDER.jpg",

];

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className={styles.slider2}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

