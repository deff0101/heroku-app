import React from "react";
import SwiperComponent from "../3rdclients/Swiper";

export default function Category() {
  return (
    <div className="max-w-[1185px] mx-auto md:p-0">
      <h2 className="capitalize text-[24px] md:text-4xl font-[700] md:mx-0 mx-6">
        Browser our category
      </h2>
      <h2 className="capitalize text-[24px] md:text-4xl font-[700] text-theme-greeny-2 mb-10 md:mx-0 mx-6">
        receipt
      </h2>
      <SwiperComponent />
    </div>
  );
}
