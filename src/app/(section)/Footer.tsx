import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <section className="bg-footer relative flex h-full w-full flex-col items-center justify-center">
      <div className="absolute top-0 hidden md:block">
        <Image
          src="/images/home/footer/footer-top.png"
          width={1920}
          height={120}
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <div className="bg-footer flex h-full w-full max-w-[1300px] flex-col items-center justify-between gap-14 px-4 py-12 md:mt-24 md:flex-row md:gap-0">
        <div className="flex flex-col gap-4">
          <h3 className="tex-[13px] font-montserrat font-semibold tracking-[1.08px] text-white">
            Contact
          </h3>
          <p className="font-cormorant text-[12px] font-normal italic leading-[20px] text-white opacity-60">
            Heinrichstrasse 267c / 3. Stock 8005 Zürich <br />{" "}
            E-mail:dolcino@qodeinteractive.com <br /> Phone:+88(0) 101 0000 000
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/images/home/footer/logo.png"
            width={101}
            height={101}
            alt="logo"
            className="h-[54px] w-[54px]"
          />
          <h1 className="nor text-center font-montserrat text-[18px] font-semibold uppercase leading-[25px] tracking-[1.62px] text-white">
            Special Taste <br /> from Gaziantep
          </h1>
          <Image
            src="/images/home/footer/underline-footer.svg"
            width={100}
            height={100}
            alt="underline"
            className="h-[12px] w-[140px]"
          />
          <div>
            <ul className="flex flex-row gap-4">
              <li>
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-montserrat text-[12px] font-normal uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
                >
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                {" "}
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-montserrat text-[12px] font-normal uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
                >
                  <Link href="/menu">Menu</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-montserrat text-[12px] font-normal uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
                >
                  <Link href="/contact">ABOUT US</Link>
                </Button>
              </li>
              <li>
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-montserrat text-[12px] font-normal uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
                >
                  <Link href="/table-booking">BRANCH</Link>
                </Button>
              </li>
              <li>
                {" "}
                <Button
                  asChild
                  variant="link"
                  className="px-0 font-montserrat text-[12px] font-normal uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
                >
                  <Link href="/table-booking">BOOKING</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-8 flex flex-row gap-5">
              <li>
                <Link href="#">
                  <Image
                    src="/images/home/footer/fb.png"
                    width={101}
                    height={101}
                    alt="logo"
                    className="h-[40px] w-[40px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src="/images/home/footer/twiter.png"
                    width={101}
                    height={101}
                    alt="logo"
                    className="h-[40px] w-[40px]"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src="/images/home/footer/insta.png"
                    width={101}
                    height={101}
                    alt="logo"
                    className="h-[40px] w-[40px]"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-14">
          <div>
            <div className="relative">
              <div className="absolute left-4 top-3.5">
                <div className="flex flex-row gap-1">
                  <Image
                    src="/images/home/footer/location.svg"
                    width={100}
                    height={100}
                    alt="box"
                    className="h-[24px] w-[24px]"
                  />
                  <span className="font-montserrat text-[13px] font-medium uppercase leading-[26px] tracking-[2.4px] text-primary">
                    Find our Location
                  </span>
                </div>
              </div>
              <Image
                src="/images/home/footer/box.svg"
                width={100}
                height={100}
                alt="box"
                className="h-[55px] w-[250px] text-primary"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute left-4 top-3.5">
                <div className="flex flex-row gap-3">
                  <Image
                    src="/images/home/footer/menue.svg"
                    width={100}
                    height={100}
                    alt="box"
                    className="h-[24px] w-[24px]"
                  />
                  <span className="font-montserrat text-[13px] font-medium uppercase leading-[26px] tracking-[2.4px] text-primary">
                    Explore Our Menu
                  </span>
                </div>
              </div>
              <Image
                src="/images/home/footer/box.svg"
                width={100}
                height={100}
                alt="box"
                className="h-[55px] w-[250px] text-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-copyRight flex h-[50px] w-full items-center justify-center text-center font-cormorant text-[10px] italic text-gray-500">
        <span className="text-center font-cormorant text-[13px] italic text-gray-500">
          © 2025 Antephankunefe,All Rights Reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
