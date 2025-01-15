import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative flex h-auto w-full flex-col justify-center py-32 md:h-[100vh] md:py-96">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/home/reserve/reserve-bg.png"
          layout="fill"
          objectFit="cover"
          alt="reserve"
        />
      </div>
      <div className="absolute -top-32 left-0 w-full">
        <Image
          src="/images/home/reserve/top.png"
          width={1920}
          height={165}
          alt="logo"
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="absolute -bottom-16 left-0 w-full">
        <Image
          src="/images/home/reserve/bottom.png"
          width={1705}
          height={128}
          alt="logo"
          className="h-[115px] w-full object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto flex flex-col items-center justify-center gap-8 md:max-w-[1300px] md:flex-row md:gap-10">
        <div className="flex w-full flex-col items-center gap-6 md:w-1/2 md:flex-row">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/home/reserve/reserve1.png"
              width={318}
              height={318}
              alt="reserve"
              className="h-[150px] w-[150px] md:h-[230px] md:w-[230px]"
            />
            <Image
              src="/images/home/reserve/reserve2.png"
              width={318}
              height={318}
              alt="reserve"
              className="h-[150px] w-[150px] md:h-[230px] md:w-[230px]"
            />
            <Image
              src="/images/home/reserve/head.svg"
              width={100}
              height={100}
              alt="head"
              className="mt-4 h-[20px] w-[40px] md:h-[32px] md:w-[64px]"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/home/reserve/head.svg"
              width={100}
              height={100}
              alt="head"
              className="mb-4 h-[20px] w-[40px] md:h-[32px] md:w-[64px]"
            />
            <Image
              src="/images/home/reserve/reserve3.png"
              width={318}
              height={318}
              alt="reserve"
              className="h-[150px] w-[150px] md:h-[230px] md:w-[230px]"
            />
            <Image
              src="/images/home/reserve/reserve4.png"
              width={318}
              height={318}
              alt="reserve"
              className="h-[150px] w-[150px] md:h-[230px] md:w-[230px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:w-1/2 md:items-start md:text-left">
          <h4 className="font-montserrat text-[20px] font-semibold uppercase leading-[24px] tracking-[2px] text-white md:text-[25px] md:leading-[28px] md:tracking-[3.2px]">
            Reserve <br /> Your Table <br /> Today
          </h4>
          <Image
            src="/images/home/reserve/underline.svg"
            width={141}
            height={11}
            alt="underline"
            className="h-[8px] w-[100px] md:h-[11px] md:w-[141px]"
          />
          <p className="w-full font-cormorant text-sm italic leading-5 text-white text-opacity-70 md:w-3/4 md:text-lg md:leading-7">
            The sector`s deep-rooted brand Cobanoglu flavor group, which
            continues its dessert and baklava adventure that started in
            Gaziantep in 1984 under different brands, continues its claim in the
            kunefe and katmer sector with the Antebim kunefe brand
          </p>
          <Button className="rounded-none bg-primary px-6 py-5 font-montserrat text-xs font-extralight uppercase tracking-[2.4px] ring-1 ring-primary ring-offset-1 ring-offset-black">
            Book Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
