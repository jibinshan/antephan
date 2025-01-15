import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Dealer: React.FC = () => {
  return (
    <section className="relative z-0 h-full w-full py-24">
      <div className="absolute top-0 z-10 h-full w-full">
        <Image
          src="/images/home/dealer/d-top.png"
          width={1920}
          height={120}
          alt="logo"
          className="h-[50px] w-full"
        />
      </div>
      <div className="absolute bottom-0 z-10 w-full">
        <Image
          src="/images/home/dealer/d-bottom.png"
          width={1920}
          height={120}
          alt="logo"
          className="h-[50px] w-full"
        />
      </div>

      <div className="absolute inset-0">
        <Image
          src="/images/home/dealer/dealer-bg.png"
          width={1920}
          height={730}
          alt="relative-bg"
          className="h-full w-full"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <h2 className="text-center font-montserrat text-2xl font-semibold uppercase leading-[24px] tracking-[3px] text-[#FFF]">
          WOULD YOU LIKE <br />
          TO BE OUR DEALER?
        </h2>
        <Image
          src="/images/home/dealer/underline-dealer.svg"
          width={100}
          height={100}
          alt="underline"
          className="h-[12px] w-[140px]"
        />
        <p className="w-full max-w-[650px] text-center font-cormorant text-sm font-normal italic leading-[24px] text-white opacity-80 md:text-xl">
          Join Our Dealer Network! Become a valued part of our growing family
          and unlock exclusive opportunities to elevate your business. As a
          dealer, you`ll gain access to premium products, competitive pricing,
          and unmatched support. Let`s grow together!
        </p>
        <Button className="mt-3 rounded-none px-6 py-5 font-montserrat text-[11px] font-normal uppercase leading-[20px] tracking-[2.40px] ring-1 ring-primary ring-offset-1 ring-offset-black">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default Dealer;
