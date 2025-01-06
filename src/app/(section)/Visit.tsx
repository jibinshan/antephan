import Image from "next/image";
import React from "react";

const Visit: React.FC = () => {
  return (
    <section className="relative z-0 h-full w-full py-12">
      <div className="absolute inset-0">
        <Image
          src="/images/home/visit/visit.png"
          width={1920}
          height={775}
          alt="relative-bg"
          className="h-full w-full"
        />
      </div>
      <div className="relative z-10 flex w-full max-w-[1300px] flex-col items-center justify-center gap-8 md:flex-row md:gap-28">
        <div className="relative">
          <div className="absolute bottom-2 left-2.5 right-2 top-4">
            <Image
              src="/images/home/visit/frame-visit.svg"
              width={100}
              height={100}
              alt="frame"
              className="h-[311px] w-[180px]"
            />
          </div>
          <Image
            src="/images/home/visit/frame-visit.svg"
            width={100}
            height={100}
            alt="frame"
            className="h-[341px] w-[200px]"
          />
        </div>
        <div className="mx-4 flex flex-col items-center gap-6 md:items-start">
          <h3 className="font-montserrat text-[24px] font-semibold uppercase leading-[35px] tracking-[3px] text-white">
            Visit our place
          </h3>
          <hr className="w-[140px] text-primary" />

          <p className="font-cormorant text-[12px] font-normal italic leading-[26px] text-white opacity-70">
            Lorem ipsum dolor sit amet, ne nulla quidam causae qui, dicam
            mandamus est ad. Qui officiis <br />
            gloriatur id. Vivendo verterem definitionem id nam, altera nostrud
            quaestio has ut, ea facilis <br />
            ocurreret per. Euripidis pertinacia ullamcorper ne ius, has tale.
          </p>
          <div className="flex flex-row gap-6">
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/home.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[26px] w-[26px]"
                  />
                  <span className="font-cormorant text-[12px] font-normal italic leading-[20px] text-white opacity-70">
                    Friedrichstrase 123, 10117 Berlin
                  </span>
                </li>
                <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/phone.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[26px] w-[26px]"
                  />
                  <span className="font-cormorant text-[12px] font-normal italic leading-[20px] text-white opacity-70">
                    Friedrichstrase 123, 10117 Berlin
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/mail.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[26px] w-[26px]"
                  />
                  <span className="font-cormorant text-[12px] font-normal italic leading-[20px] text-white opacity-70">
                    Friedrichstrase 123, 10117 Berlin
                  </span>
                </li>
                <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/system.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[26px] w-[26px]"
                  />
                  <span className="font-cormorant text-[12px] font-normal italic leading-[20px] text-white opacity-70">
                    Friedrichstrase 123, 10117 Berlin
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
