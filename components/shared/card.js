import React from "react";
import clsx from "clsx";
import Image from "next/image";

import Rating from "./rating";

const Card = ({ item, children }) => {
  const cardClass = clsx("card", {
    "bg-transparent-greeny": item.type === "cake",
    "bg-transparent-purplish": item.type === "kebab",
    "bg-transparent-magenta": item.type === "salmon",
    "bg-transparent-yellow": item.type === "doughnut",
    "bg-transparent-bluish": item.type === "pizza",
  });
  return (
    <div
      className={clsx(
        "flex flex-col justify-start py-6 px-4 rounded-[17px]",
        cardClass
      )}
    >
      <Image src={item.src} className="mb-2" />
      <p className="capitalize font-bold text-[26px]">{item.name}</p>
      <p className="text-theme-greeny-2 mb-4">{item.type}</p>
      <Rating rate={item.stars} />
    </div>
  );
};

export default Card;
