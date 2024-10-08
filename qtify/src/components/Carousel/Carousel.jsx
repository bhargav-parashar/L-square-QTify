import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";

const Carousel = ({ data, callback, type }) => {
  return (
    <Swiper
      style={{ padding: "0px 2vw" }}
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
          {callback(item, type)}
        </SwiperSlide>
      ))}
      <CarouselLeftNavigation />
    </Swiper>
  );
};
export default Carousel;
