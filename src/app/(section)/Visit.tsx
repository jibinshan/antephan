import Image from "next/image";
import React from "react";

const Visit: React.FC = () => {
  return (
    <section className="relative z-0 flex h-full w-full items-center justify-center px-4 py-12 md:px-24">
      <div className="absolute inset-0">
        <Image
          src="/images/home/visit/visit.png"
          width={1920}
          height={775}
          alt="relative-bg"
          className="h-full w-full"
        />
      </div>
      <div className="relative z-10 flex w-full flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-28">
        <div className="relative">
          <div className="absolute left-3 top-3">
            <div className="relative">
              <div className="absolute left-7 top-24">
                <ul className="flex flex-col gap-2">
                  <li>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <p className="text-center font-cormorant text-sm font-[200] italic leading-[21px] text-white opacity-80">
                        Monday
                      </p>
                      <Image
                        src="/images/home/visit/line-black.svg"
                        width={100}
                        height={100}
                        alt="underline"
                        className="mt-1 h-[4px] w-[70px] items-end"
                      />{" "}
                      <span className="font-cormorant text-xs font-[200] italic leading-[21px] text-white opacity-80">
                        08:00 - 23:00h
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <p className="text-center font-cormorant text-sm font-[200] italic leading-[21px] text-white opacity-80">
                        Tuesday
                      </p>
                      <Image
                        src="/images/home/visit/line-black.svg"
                        width={100}
                        height={100}
                        alt="underline"
                        className="mt-1 h-[4px] w-[74px] items-end"
                      />{" "}
                      <span className="font-cormorant text-xs font-[200] italic leading-[21px] text-white opacity-80">
                        08:00 - 23:00h{" "}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <p className="text-center font-cormorant text-sm font-[200] italic leading-[21px] text-white opacity-80">
                        Wednesday
                      </p>
                      <Image
                        src="/images/home/visit/line-black.svg"
                        width={100}
                        height={100}
                        alt="underline"
                        className="mt-1 h-[4px] w-[52px] items-end"
                      />{" "}
                      <span className="font-cormorant text-xs font-[200] italic leading-[21px] text-white opacity-80">
                        08:00 - 23:00h{" "}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <p className="text-center font-cormorant text-sm font-[200] italic leading-[21px] text-white opacity-80">
                        Thursday
                      </p>
                      <Image
                        src="/images/home/visit/line-black.svg"
                        width={100}
                        height={100}
                        alt="underline"
                        className="mt-1 h-[4px] w-[70px] items-end"
                      />{" "}
                      <span className="font-cormorant text-xs font-[200] italic leading-[21px] text-white opacity-80">
                        08:00 - 23:00h{" "}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <p className="text-center font-cormorant text-sm font-[200] italic leading-[21px] text-white opacity-80">
                        Friday
                      </p>
                      <Image
                        src="/images/home/visit/line-black.svg"
                        width={100}
                        height={100}
                        alt="underline"
                        className="mt-1 h-[4px] w-[85px] items-end"
                      />{" "}
                      <span className="font-cormorant text-xs font-[200] italic leading-[21px] text-white opacity-80">
                        08:00 - 23:00h{" "}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <p className="text-center font-cormorant text-sm font-[200] italic leading-[21px] text-white opacity-80">
                        Saturday
                      </p>
                      <Image
                        src="/images/home/visit/line-black.svg"
                        width={100}
                        height={100}
                        alt="underline"
                        className="mt-1 h-[4px] w-[70px] items-end"
                      />{" "}
                      <span className="font-cormorant text-xs font-[200] italic leading-[21px] text-white opacity-80">
                        08:00 - 23:00h{" "}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row items-center justify-center gap-1">
                      <p className="text-center font-cormorant text-sm font-[200] italic leading-[21px] text-white opacity-80">
                        Sunday
                      </p>
                      <Image
                        src="/images/home/visit/line-black.svg"
                        width={100}
                        height={100}
                        alt="underline"
                        className="mt-1 h-[4px] w-[80px] items-end"
                      />{" "}
                      <span className="font-cormorant text-xs font-[200] italic leading-[21px] text-white opacity-80">
                        08:00 - 23:00h{" "}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/images/home/visit/frame-visit.svg"
                width={100}
                height={100}
                alt="frame"
                className="h-[380px] w-[260px]"
              />
            </div>
          </div>
          <Image
            src="/images/home/visit/frame-visit.svg"
            width={100}
            height={100}
            alt="frame"
            className="h-[405px] w-[285px]"
          />
        </div>
        <div className="mx-4 flex flex-col items-center gap-4 md:items-start">
          <h3 className="font-montserrat text-[24px] font-[500] uppercase leading-[35px] tracking-[3px] text-[#FFF] md:text-[27px]">
            Visit our place
          </h3>
          <hr className="w-[90px] border-[1px] border-[#c19d56]" />

          <p className="w-full max-w-[630px] font-cormorant text-sm font-[200] italic leading-[20px] tracking-[0.80px] text-[#FFF] opacity-85">
            Antephan, a place where history meets elegance. Nestled in the heart
            of timeless architecture, it offers an experience unlike any other.
            From its rich cultural heritage to breathtaking landscapes, every
            moment spent here is a journey into beauty and serenity. Come and
            explore the wonders of Antephan, where the past and present blend
            seamlessly.
          </p>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:gap-28">
            <div>
              <ul className="flex flex-col gap-4">
                <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/home.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[22px] w-[22px]"
                  />
                  <span className="font-cormorant text-[13px] font-[200] italic leading-[20px] text-white opacity-85">
                    240 Hertford Rd, London EN3 5BL, United Kingdom{" "}
                  </span>
                </li>
                <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/phone.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[22px] w-[22px]"
                  />
                  <span className="font-cormorant text-[13px] font-[200] italic leading-[20px] text-white opacity-85">
                    +442083749043{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
{/*                 <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/mail.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[22px] w-[22px]"
                  />
                  <span className="font-cormorant text-[13px] font-[200] italic leading-[20px] text-white opacity-85">
                    dolcino@qodeinteractive.com
                  </span>
                </li> */}
{/*                 <li className="flex flex-row items-center gap-2">
                  <Image
                    src="/images/home/visit/system.svg"
                    width={100}
                    height={100}
                    alt="underline"
                    className="h-[22px] w-[22px]"
                  />
                  <span className="font-cormorant text-[13px] font-[200] italic leading-[20px] text-white opacity-85">
                    dolcino@qodeinteractive.com
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
