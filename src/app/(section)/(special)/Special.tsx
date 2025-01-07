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
const Special = ({ }) => {
  return (
    <section className="relative flex h-full w-full justify-center"
      style={{
        backgroundImage: "url('/images/home/classic/antephan-bgimage.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      {/* <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/images/home/classic/antephan-bgimage.png"
          width={1920}
          height={1065}
          alt="bg-image"
          className="h-full w-full"
        />
      </div> */}
      <div className="relative flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12 md:py-20">
        <div className="absolute w-full h-full left-0 top-0 py-10 z-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/images/home/classic/leaf.png')",
              backgroundSize: "5%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right"
            }}
          />
          {/* <Image
            src="/images/home/classic/leaf.png"
            width={87}
            height={88}
            alt="leaf"
            className="hidden h-[62px] w-[70px] md:block"
          /> */}
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h4 className="font-montserrat text-[20px] font-semibold uppercase tracking-[3px] text-black">
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
        <div className="relative z-20 flex min-h-[400px] w-full flex-col justify-center px-2">
          <EmblaCarousel slides={slideData} options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default Special;
