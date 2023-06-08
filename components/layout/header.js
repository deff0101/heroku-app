import LINKS from "@/constants/links.js";
import Link from "next/link";
import React from "react";
import LOGO from "@/assets/elmeslogo.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full md:max-w-[1185px] mx-auto mb-10 md:mb-0">
      <nav className="w-full flex justify-between items-center md:py-4 p-4 md:px-0">
        <div className="w-[150px] md:w-[200px]">
          <Image src={LOGO} className="" />
        </div>
        <div className=" hidden md:flex gap-x-8">
          {LINKS.header.map((item) =>
            item.text === "Promotions" ? (
              <div className="relative">
                <div className="text-white text-[9px] bg-red-600 px-[7px] py-[3px] rounded-lg absolute top-[-14px] right-[-14px] font-bold">
                  HOT
                </div>
                <Link href="#">Promotios</Link>
              </div>
            ) : (
              <div>
                <Link href={item.to}>{item.text}</Link>
              </div>
            )
          )}
        </div>
        <div className="inline-block text-xs md:text-base">
          <button className="mr-4 hidden md:inline-block">Masuk</button>
          <button className="button-primary font-bold">Daftar Sekarang</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
