import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Taste: React.FC = () => {
  return (
    <section className="relative flex h-full w-full flex-col md:flex-row">
      <div className="absolute -bottom-11 left-1/4 hidden h-[84px] w-[94px] lg:block">
        <Image
          src="/images/home/taste/cardamom.png"
          width={156}
          height={158}
          alt="cardamom"
          className="h-full w-full"
        />
      </div>
      <div className="h-full w-full md:w-1/2">
        <Image
          src="/images/home/taste/candy.png"
          width={970}
          height={910}
          alt="candy"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="relative flex w-full flex-col justify-center gap-4 bg-bgBlue px-4 py-8 md:w-1/2 md:px-24">
        <div className="absolute -left-8 top-0 hidden h-full w-full items-start justify-start md:flex">
          <Image
            src="/images/home/taste/Asset.png"
            width={82}
            height={910}
            alt="asset"
            className="h-full"
          />
        </div>
        <div>
          <Image
            src="/images/home/taste/badam.png"
            width={130}
            height={129}
            alt="badam"
            className="absolute left-[400px] top-[140px] hidden h-[74px] w-[80px] md:block"
          />
        </div>
        <div>
          <Image
            src="/images/home/taste/tyre-special.png"
            width={513}
            height={506}
            alt="round"
            className="absolute bottom-0 right-0 hidden h-[338px] w-[346px] md:block"
          />
        </div>
        <h4 className="font-montserrat text-[25px] font-semibold uppercase leading-[28px] tracking-[3.2px] text-white">
          Special <br /> Taste from <br /> Gaziantep
        </h4>
        <Image
          src="/images/home/taste/underline.svg"
          width={100}
          height={100}
          alt="underline"
          className="h-[11px] w-[141px]"
        />
        <div>
          <p className="w-3/4 font-cormorant text-xl font-[400] italic leading-[20px] text-white text-opacity-70 md:text-xl">
            The sector`s deep-rooted brand Cobanoglu flavor group, which
            continues its dessert and baklava adventure that started in
            Gaziantep in 1984 under different brands, continues its claim in the
            kunefe and katmer sector with the Antebim kunefe brand
          </p>
        </div>

{/*         <div>
          <Button className="mt-3 rounded-none bg-black px-6 py-5 font-montserrat text-[11px] font-extralight leading-[1px] tracking-[2.40px] ring-1 ring-black ring-offset-1 ring-offset-bgBlue">
            OUR STORY
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Taste;
