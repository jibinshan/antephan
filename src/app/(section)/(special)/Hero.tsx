import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-fit w-full items-center justify-center px-4 py-12 md:h-[100vh] md:py-24">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/images/home/hero/hero.png"
          height={1074}
          width={1920}
          alt="hero"
          className="object-cover"
        />
      </div>
      <div className="z-10 flex w-full max-w-[1100px] flex-col items-start justify-center gap-4">
        <p className="font-mrs_saint text-4xl font-normal text-white md:text-9xl">
          <span className="text-primary">Antepehan</span> <br /> Kunefev
        </p>
        <p className="font-montserrat text-[10px] font-semibold capitalize leading-[21.6px] tracking-[1.08px] text-white">
          Special Taste from Gaziantep
        </p>

        <Button className="rounded-none px-3 py-2 font-montserrat text-[13px] font-medium ring-2 ring-primary ring-offset-1 ring-offset-black">
          VIEW MENU
        </Button>
      </div>
    </section>
    //  <div
    //     className="h-screen w-full bg-cover bg-center"
    //     style={{ backgroundImage: "url(/images/hero.png)" }}
    //   >
    //     <span className="absolute left-[52px] top-[282px] font-mrs_saint text-[82px] font-normal text-primary md:left-[282px] md:text-[102px]">
    //       Antepehan
    //     </span>
    //     <span className="absolute left-[62px] top-[375px] font-mrs_saint text-[72px] font-normal text-white md:left-[315px] md:text-[92px]">
    //       Kunefev
    //     </span>

    //     <p className="absolute left-[52px] top-[510px] font-montserrat text-[10px] font-semibold capitalize leading-[21.6px] tracking-[1.08px] text-white md:left-[282px]">
    //       Special Taste from Gaziantep
    //     </p>

    //     <Button className="absolute left-[52px] top-[560px] border border-black bg-primary px-3 py-2 font-montserrat text-[13px] font-medium text-white md:left-[282px]">
    //       VIEW MENU
    //     </Button>
    //   </div>
  );
};

export default HeroSection;
