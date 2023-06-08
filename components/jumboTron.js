import React from "react";
import PIZZA from "../public/pizza.svg";
import Image from "next/image";
import Rating from "./shared/rating";

export default function JumboTron() {
  return (
    <div className="grid md:grid-cols-[0.5fr,1fr] md:grid-rows-[repeat(3, minmax(auto, 1fr))] gap-x-10 md:p-0 px-6 gap-y-10 md:gap-y-0">
      <div className="text-5xl self-end">
        <p className="capitalize font-extrabold text-theme-greeny">
          good food us good mood
        </p>
      </div>
      <div className="relative md:col-start-2 md:row-span-3 flex md:items-center md:justify-center justify-start">
        <div className="rounded-full border-[20px] md:border-[40px] border-[#c4c4c4] border-opacity-10">
          <div className="w-[200px] md:w-[400px]">
            <Image src={PIZZA} alt="pizza" />
          </div>
        </div>
        <div className="flex items-center rounded-xl bg-white bg-opacity-75 absolute p-2 pr-10 gap-x-2 bottom-[40px] right-0 md:right-auto md:left-[150px] shadow-md backdrop-blur-sm">
          <div className="w-12 md:w-9">
            <Image src={PIZZA} alt="pizza" />
          </div>
          <div className="flex flex-col text-xs">
            <p className="font-bold">green salad tomato</p>
            <span>tomato</span>
            <Rating rate={4} />
          </div>
        </div>
      </div>
      <div className="self-center">
        <p>
          would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
      </div>
      <div>
        <button className="button-primary shadow-xl mr-4 font-bold">
          Daftar Sekarang
        </button>
        <button className="button-secondary">About Us</button>
      </div>
    </div>
  );
}
