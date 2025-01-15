import Image from "next/image";
import React from "react";

const Famous: React.FC = () => {
  return (
    <section className="relative flex h-full w-full items-center justify-center py-12">
      <div className="absolute left-0 top-0 z-10 h-full w-full py-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/images/home/famous/left.png')",
            backgroundSize: "7%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top left",
          }}
        />
      </div>
      <div className="absolute bottom-5 right-0">
        <Image
          src="/images/home/famous/right-fa.svg"
          width={100}
          height={100}
          alt="right"
          className="mb-8 hidden h-[100px] w-[140px] md:block"
        />{" "}
      </div>
      <div className="absolute bottom-1/2 right-5">
        <Image
          src="/images/home/famous/leaf-fa.svg"
          width={100}
          height={100}
          alt="right"
          className="mb-8 hidden h-[60px] w-[100px] md:block"
        />{" "}
      </div>
      <div className="flex h-full w-full px-[130px] flex-col items-center gap-4">
        <h4 className="text-center font-montserrat text-2xl font-semibold uppercase leading-[44px] tracking-[3.2px] text-black md:text-3xl">
          Our Famous Kunefe Flavors
        </h4>
        <Image
          src="/images/home/classic/kunefe-underline.svg"
          width={100}
          height={100}
          alt="underline"
          className="mb-8 h-[12px] w-[140px]"
        />{" "}
        <div className="w-full flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <ul className="w-full flex flex-col gap-5">
              <li className="w-full flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
              <li className="flex flex-row items-center justify-center gap-3">
                <Image
                  src="/images/home/famous/Ellipse.svg"
                  width={100}
                  height={100}
                  alt="underline"
                  className="h-[77px] w-[77px]"
                />{" "}
                <div className="flex flex-col">
                  <span className="font-montserrat text-sm font-semibold uppercase tracking-[1.08px] text-black">
                    Pumpkin tart
                  </span>
                  <div className="flex flex-row items-center gap-3">
                    <p className="font-cormorant text-xs font-normal italic leading-[31px] text-black opacity-70">
                      Pumpkin, ginger, cinnamon, almond{" "}
                    </p>
                    <Image
                      src="/images/home/famous/Line.svg"
                      width={100}
                      height={100}
                      alt="underline"
                      className="hidden h-[2px] w-[140px] md:block"
                    />{" "}
                    <span className="font-cormorant text-[12px] font-normal italic leading-[24px] text-black">
                      $10
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Famous;
