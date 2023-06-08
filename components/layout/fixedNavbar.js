import React from "react";
import HAMBURGER from "@/assets/hamburger.svg";
import Image from "next/image";
function FixedNavbar() {
  return (
    <div className="fixed bottom-0 bg-white flex w-screen md:hidden justify-between px-4 pt-2 text-xs z-50 rounded-t-lg">
      <div className="flex flex-col items-center gap-y-1">
        <Image src={HAMBURGER} width={30} />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center self-start">
        <Image src={HAMBURGER} width={30} />
        <span>Promotions</span>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <Image src={HAMBURGER} width={30} />
        <span>Others</span>
      </div>
    </div>
  );
}

export default FixedNavbar;
