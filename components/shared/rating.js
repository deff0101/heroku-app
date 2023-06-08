import React from "react";
import STARFILL from "../../assets/starfill.svg";
import STARNOFILL from "../../assets/starnofill.svg";
import Image from "next/image";

export default function Rating({ rate }) {
  const filledStar = new Array(rate).fill("").map((_, i) => true);
  const noFillStar = new Array(5 - rate).fill("").map((_, i) => false);
  const allArray = [...filledStar, ...noFillStar];
  return (
    <div className="flex">
      {allArray.map((el) => {
        return el ? (
          <Image src={STARFILL} alt="star-yellow" />
        ) : (
          <Image src={STARNOFILL} alt="star" />
        );
      })}
    </div>
  );
}
