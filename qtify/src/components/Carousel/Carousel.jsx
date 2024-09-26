import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwipper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./Carousel.module.css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";

const Carousel = ({ data, callback }) => {
  return (
    <Swiper
      style={{ padding: "0px 2.5vw" }}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
      navigation={true}
    >
      <CarouselRightNavigation />
      {data.map((item) => (
        <SwiperSlide key={item.id} style={{ width: "fit-content" }}>
          {callback(item, "album")}
        </SwiperSlide>
      ))}
      <CarouselLeftNavigation />
    </Swiper>
  );
};
export default Carousel;
