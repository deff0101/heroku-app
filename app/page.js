import Category from "@/components/pages/category";
import JumboTron from "@/components/jumboTron";
import Trending from "@/components/pages/trending";
import foodBG from "@/assets/foodBG.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="max-w-[1185px] mx-auto mb-20 md:mb-24">
        <div className="absolute z-[-1] opacity-5 max-w-[1185px]">
          <Image src={foodBG} className="object-cover" />
        </div>
        <JumboTron />
      </section>
      <section className="mb-20 md:mb-24">
        <Category />
      </section>
      <section className="mb-20 md:mb-24">
        <Trending />
      </section>
    </main>
  );
}
