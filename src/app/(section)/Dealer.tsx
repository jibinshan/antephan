import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Dealer: React.FC = () => {
  return (
    <section className="relative z-0 h-full w-full py-24">
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
        <h2 className="text-center font-montserrat text-[20px] font-semibold uppercase leading-[24px] tracking-[3px] text-white">
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
        <p className="text-center font-cormorant text-[12px] font-normal italic leading-[24px] text-white">
          Join Our Dealer Network! Become a valued part <br />
          of our growing family and unlock exclusive opportunities to elevate
          your <br />
          business. As a dealer, you`ll gain access to premium products,
          competitive <br />
          pricing, and unmatched support. Let`s grow together!
        </p>
        <Button className="mt-3 rounded-none px-5 py-2 font-montserrat text-[11px] font-normal uppercase leading-[20px] tracking-[2.40px] ring-1 ring-primary ring-offset-1 ring-offset-black">
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default Dealer;
