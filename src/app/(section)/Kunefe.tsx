import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Kunefe: React.FC = () => {
  return (
    <section className="flex h-full w-full items-center justify-center bg-white px-4 py-12 md:py-24">
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <h3 className="font-montserrat text-[22px] font-semibold uppercase tracking-[3.2px] md:text-3xl">
          Antephan Kunefe
        </h3>
        <div>
          <Image
            src="/images/home/kunefe/kunefe-underline.svg"
            width={100}
            height={100}
            alt="kunefe-underline"
            className="h-[12px] w-[540px]"
          />
        </div>
        <ul className="flex flex-col gap-8 md:flex-row">
          <li className="flex w-full flex-col items-center md:w-1/4">
            <Image
              src="/images/home/kunefe/wicker.png"
              width={322}
              height={323}
              alt="wicker"
              className="h-[200px] w-[200px] md:h-[280px] md:w-[280px]"
            />
            <h6 className="mt-6 font-montserrat text-[14px] font-semibold uppercase leading-[23px] tracking-[1.08px] text-black">
              Wicker
            </h6>
            <span className="font-montserrat text-[12px] text-black opacity-80">
              kunefe
            </span>
          </li>
          <li className="flex w-full flex-col items-center md:w-1/4">
            <Image
              src="/images/home/kunefe/kayamkli.png"
              width={322}
              height={323}
              alt="Kaymakli"
              className="h-[200px] w-[200px] md:h-[280px] md:w-[280px]"
            />
            <h6 className="mt-6 font-montserrat text-[14px] font-semibold uppercase leading-[23px] tracking-[1.08px] text-black">
              Kaymakli
            </h6>
            <span className="font-montserrat text-[12px] text-black opacity-80">
              kunefe
            </span>
          </li>
          <li className="flex w-full flex-col items-center md:w-1/4">
            <Image
              src="/images/home/kunefe/pisthachio.png"
              width={322}
              height={323}
              alt="Pisthachio"
              className="h-[200px] w-[200px] md:h-[280px] md:w-[280px]"
            />
            <h6 className="mt-6 font-montserrat text-[14px] font-semibold uppercase leading-[23px] tracking-[1.08px] text-black">
              Pisthachio
            </h6>
            <span className="font-montserrat text-[12px] text-black opacity-80">
              kunefe
            </span>
          </li>
          <li className="flex w-full flex-col items-center md:w-1/4">
            <Image
              src="/images/home/kunefe/green.png"
              width={322}
              height={323}
              alt="Green-Sulthan"
              className="h-[200px] w-[200px] md:h-[280px] md:w-[280px]"
            />
            <h6 className="mt-6 font-montserrat text-[14px] font-semibold uppercase leading-[23px] tracking-[1.08px] text-black">
              Green Sulthan
            </h6>
            <span className="font-montserrat text-[12px] text-black opacity-80">
              kunefe
            </span>
          </li>
        </ul>
        <div className="mt-4">
          <Button className="mt-3 rounded-none px-6 py-5 font-montserrat text-[11px] font-normal leading-[20px] tracking-[2.40px] ring-1 ring-primary ring-offset-1 ring-offset-white hover:text-black">
            <Link href="/table-booking">Table Booking</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Kunefe;
