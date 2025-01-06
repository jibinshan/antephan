import Image from "next/image";
import React from "react";

const Customer: React.FC = () => {
  return (
    <section className="relative h-full w-full py-14 md:h-[70vh]">
      <div className="absolute left-0 top-11 hidden md:block">
        <Image
          src="/images/home/customer/leaf.svg"
          width={100}
          height={100}
          alt="user"
          className="h-[129px] w-[111px]"
        />
      </div>
      <div className="absolute bottom-11 right-0 hidden md:block">
        <Image
          src="/images/home/customer/tyre.svg"
          width={100}
          height={100}
          alt="user"
          className="h-[113px] w-[118px]"
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="font-montserrat text-[18px] font-semibold uppercase leading-[30px] tracking-[3px] text-black">
          Customer Reviews
        </h3>
        <Image
          src="/images/home/classic/kunefe-underline.svg"
          width={100}
          height={100}
          alt="underline"
          className="h-[12px] w-[140px]"
        />
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/home/customer/user.svg"
            width={100}
            height={100}
            alt="user"
            className="h-[52px] w-[52px]"
          />
          <h6 className="text-center font-montserrat text-[12px] font-bold uppercase leading-[20px] tracking-[4px] text-gray-700">
            Anna Mathew
          </h6>
          <span className="text-center font-montserrat text-[11px] font-light tracking-[0.80px] text-black opacity-70">
            One day ago
          </span>
        </div>
      </div>
    </section>
  );
};

export default Customer;
