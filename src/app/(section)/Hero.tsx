import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex h-[100vh] w-full items-center justify-center px-4 py-12 md:py-24">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/images/home/hero/hero.png"
          height={1074}
          width={1920}
          alt="hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-4 px-4 md:items-start md:px-[120px] lg:px-[180px] 2xl:px-[250px]">
        <p className="text-center font-mrs_saint text-7xl font-normal text-white md:text-start md:text-9xl">
          <span className="text-primary">Antepehan</span> <br /> Kunefev
        </p>
        <p className="font-mrs_saint text-[11px] font-semibold capitalize leading-[21.6px] tracking-[1.08px] text-white">
          Special Taste from Gaziantep
        </p>

        <Button className="mt-3 rounded-none px-6 py-6 font-montserrat text-[11px] font-normal leading-[20px] tracking-[2.40px] ring-1 ring-primary ring-offset-1 ring-offset-black">
          VIEW MENU
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
