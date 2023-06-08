import Image from "next/image";
import React from "react";
import LOGO from "@/assets/elmeslogo.svg";
import MailSvg from "@/assets/mailIcon";
import PhoneSvg from "@/assets/phoneIcon";
import IgSvg from "@/assets/igIcon";

function Footer() {
  return (
    <section className="hidden md:block max-w-[1185px] mx-auto mb-20 md:span-0 px-6">
      <div className="grid grid-cols-[2fr,1fr,1fr,1fr] text-sm gap-x-20">
        <div className="space-y-5">
          <Image src={LOGO} className="mb-5" alt="elmes-logo" />
          <span>
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </span>
          <div className="flex justify-start gap-x-2">
            <span className="bg-theme-greeny p-[10px] rounded-full h-[40px]">
              <MailSvg color="#fff" />
            </span>
            <span className="p-[10px] rounded-full h-[40px]">
              <PhoneSvg color="#8BAC3E" />
            </span>
            <span className="p-[10px] rounded-full h-[40px]">
              <IgSvg color="#8BAC3E" />
            </span>
          </div>
        </div>
        <div className=" flex flex-col space-y-4">
          <h3 className="mb-[33px] font-bold text-[18px]">Categories</h3>
          <span>Cupcake</span>
          <span>Pizza</span>
          <span>Kebab</span>
          <span>Salmon</span>
          <span>Doughnut</span>
        </div>
        <div className=" flex flex-col space-y-4">
          <h3 className="mb-[33px] font-bold text-[18px]">About Us</h3>
          <span>About Us</span>
          <span>FAQ</span>
          <span>Report Problem</span>
        </div>
        <div className=" space-y-4">
          <h3 className="mb-[33px] font-bold text-[18px]"> Newsletter</h3>
          <span>
            Get now free 50% discount for alll products on your first order
          </span>
          <div className="flex">
            <input
              type="text"
              placeholder="your email address"
              className="ring-1 ring-black rounded-[8px_0px_0px_8px] h-[35px] px-2"
            />
            <button className="bg-theme-greeny text-white rounded-[0px_8px_8px_0px] h-[35px] px-2 ring-1 ring-theme-greeny-2">
              SEND
            </button>
          </div>
          <div className="">
            <MailSvg color="#8BAC3E" />
            <span className="font-semibold"> elemesid@gmail.com</span>
          </div>
          <div className="fill-black">
            <PhoneSvg color="#8BAC3E" />
            <span className="font-semibold"> 0888 1111 2222 </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
