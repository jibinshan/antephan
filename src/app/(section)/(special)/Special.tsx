"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };

const slideData: {
  modelUrl: string;
  price: string;
  name: string;
}[] = [
  {
    name: "Chicken Shish",
    price: "40",
    modelUrl: "/models/chicken-shish.glb",
  },
  {
    name: "Grilled Sea Bass",
    price: "50",
    modelUrl: "/models/grilled-sea-bass-(levrek).glb",
  },
  {
    name: "Lamb Doner",
    price: "60",
    modelUrl: "/models/lamb-doner.glb",
  },
  {
    name: "Lamb Kofte Beyti",
    price: "80",
    modelUrl: "/models/lamb-kofte-beyti.glb",
  },
  {
    name: "Lamb Shank",
    price: "100",
    modelUrl: "/models/lamb-shank.glb",
  },
  {
    name: "Mix Kebab",
    price: "100",
    modelUrl: "/models/mix-kebab-for-one.glb",
  },
  {
    name: "Mix Platter",
    price: "100",
    modelUrl: "/models/mix-platter-for-2.glb",
  },
];
const Special = ({}) => {
  return (
    <section
      className="relative flex h-full w-full justify-center pt-16 md:pb-0"
      style={{
        backgroundImage: "url('/images/home/classic/antephan-bgimage.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4">
        <div className="absolute left-0 top-0 z-10 hidden h-full w-full md:block">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('/images/home/classic/leaf.png')",
              backgroundSize: "5%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="mt-5 font-montserrat text-2xl font-semibold uppercase tracking-[3px] text-black md:mt-0 md:text-3xl">
            Antephan Specials
          </h4>
          <Image
            src="/images/home/classic/kunefe-underline.svg"
            width={100}
            height={100}
            alt="underline"
            className=""
          />
        </div>
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2 pb-24">
          <EmblaCarousel slides={slideData} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default Special;
