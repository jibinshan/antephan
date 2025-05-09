import { Icons } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CheckOut: React.FC = () => {
  return (
    <section className="flex h-full w-full flex-col gap-8 py-16">
      <div className="flex flex-col gap-2">
        <h3 className="text-center font-montserrat text-xl font-[600] uppercase leading-[40px] tracking-[3.2px] text-black md:text-3xl">
          checkout our instagram
        </h3>
        <div className="flex justify-center">
          <Image
            src="/images/home/footer/underline-footer.svg"
            width={100}
            height={100}
            alt="underline"
            className="h-[12px] w-[140px]"
          />{" "}
        </div>

        <ul className="mt-6 flex h-full w-full flex-row">
          {[
            "checkout1.png",
            "checkout2.png",
            "checkout3.png",
            "checkout4.png",
          ].map((img, index) => (
            <li key={index} className="flex-1">
              <Image
                src={`/images/home/checkout/${img}`}
                alt={`Image ${index + 1}`}
                layout="responsive"
                width={100}
                height={12}
                className="h-auto w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex h-full w-full items-center justify-center px-4 md:px-28">
        <div className="mx-4 flex h-full w-full flex-col items-center justify-center gap-6 py-12 md:flex-row md:gap-0 md:pb-10 md:pt-20">
          <div className="flex h-full w-full flex-col items-center gap-2 md:w-1/4">
            <Image
              src="/images/home/checkout/96.svg"
              width={100}
              height={100}
              alt="underline"
              className="h-[92px] w-[150px]"
            />
            <span className="font-montserrat text-sm font-[600] uppercase tracking-[1.08px] text-black">
              Clients
            </span>
            <p className="text-center font-cormorant text-xs font-normal italic leading-6 text-black opacity-80">
              Lorem ipsum dolor sit amet, est at alii <br />
              oporteat moderatius.
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-center gap-2 md:w-1/4">
            <Image
              src="/images/home/checkout/13.svg"
              width={100}
              height={100}
              alt="underline"
              className="h-[72px] w-[130px]"
            />
            <span className="font-montserrat text-sm font-[600] uppercase tracking-[1.08px] text-black">
              Employees
            </span>
            <p className="text-center font-cormorant text-xs font-normal italic leading-6 text-black opacity-80">
              Lorem ipsum dolor sit amet, est at alii <br />
              oporteat moderatius.
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-center gap-2 md:w-1/4">
            <Image
              src="/images/home/checkout/84.svg"
              width={100}
              height={100}
              alt="underline"
              className="h-[92px] w-[150px]"
            />
            <span className="font-montserrat text-sm font-[600] uppercase tracking-[1.08px] text-black">
              Clients
            </span>
            <p className="text-center font-cormorant text-xs font-normal italic leading-6 text-black opacity-80">
              Lorem ipsum dolor sit amet, est at alii <br />
              oporteat moderatius.
            </p>
          </div>
          <div className="flex h-full w-full flex-col items-center gap-2 md:w-1/4">
            <Image
              src="/images/home/checkout/715.svg"
              width={100}
              height={100}
              alt="underline"
              className="h-[72px] w-[130px]"
            />
            <span className="font-montserrat text-sm font-[600] uppercase tracking-[1.08px] text-black">
              Cakes
            </span>
            <p className="text-center font-cormorant text-xs font-normal italic leading-6 text-black opacity-80">
              Lorem ipsum dolor sit amet, est at alii <br />
              oporteat moderatius.
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <Link
          href={"https://www.instagram.com/antephan.baklava.uk/"}
          target="_blank"
        >
          <Icons.instagram className="h-20 w-20 text-primary md:h-40 md:w-40" />
        </Link>
        <Link
          href={"https://www.instagram.com/antephan.baklava.uk/"}
          target="_blank"
          className="text-center font-montserrat text-xl font-[600] uppercase leading-[40px] tracking-[3.2px] text-black md:text-3xl"
        >
          Follow Us
        </Link>
      </div>
    </section>
  );
};

export default CheckOut;
