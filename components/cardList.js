import React from "react";
import PRODUCTS from "@/constants/products";
import Card from "./shared/card";
function CardList() {
  return (
    <div className="grid grid-col-1 md:grid-cols-4 md:grid-row-2 gap-x-[20px] gap-y-[30px] mb-10">
      {PRODUCTS.map((item) => (
        <Card item={item}></Card>
      ))}
    </div>
  );
}

export default CardList;
