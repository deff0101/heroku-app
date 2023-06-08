"use client";
import CATEGORIES from "../../constants/categories";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import salmon from "../../assets/salmon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import ARROWLEFT from "../../assets/arrowleft.png";
import ARROWRIGHT from "../../assets/arrowright.png";
import foodBG from "../../assets/foodBG.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function SwiperComponent() {
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        navigation={{
          prevEl: "custom-swiper-button-next",
          nextEl: "custom-swiper-button-prev",
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {CATEGORIES.image.map((item, i) => {
          const cardClass = clsx("card", {
            "bg-transparent-greeny": item.type === "cake",
            "bg-transparent-purplish": item.type === "kebab",
            "bg-transparent-magenta": item.type === "fish",
            "bg-transparent-yellow": item.type === "doughnut",
            "bg-transparent-bluish": item.type === "pizza",
          });
          return (
            <SwiperSlide
              key={i + item.name}
              className={clsx(
                "py-10 rounded-2xl cursor-pointer group",
                cardClass
              )}
            >
              <div className="flex flex-col items-center ">
                <Image
                  alt="food category"
                  src={item.src}
                  width={50}
                  className="group-hover:scale-110 transition-all ease-in duration-150"
                />
                <p className="font-bold">{item.name}</p>
                <p>{item.quantity} items</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="hidden float-right md:flex gap-x-2 mt-10">
        <div
          className=" flex items-center justify-center button-raw-primary gap-x-2 px-2 py-2"
          onClick={handlePrevSlide}
        >
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
            <Image className="" src={ARROWRIGHT} alt="asd" />
          </div>
          <p>PREV</p>
        </div>
        <div
          className="flex items-center justify-center button-raw-primary gap-x-2 px-2 py-2"
          onClick={handleNextSlide}
        >
          <p>NEXT</p>
          <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
            <Image className="" src={ARROWLEFT} alt="asd" />
          </div>
        </div>
      </div>
    </div>
  );
}
