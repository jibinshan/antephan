import Image from "next/image";
import React from "react";

const Classic: React.FC = () => {
  return (
    <section className="relative flex h-[100vh] w-full justify-center px-4 py-20 md:py-28">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/images/home/classic/antephan-bgimage.png"
          width={1920}
          height={1065}
          alt="bg-image"
          className="h-full w-full"
        />
      </div>
      <div className="absolute flex w-full max-w-[1300px] flex-col items-center justify-center gap-3">
        <div className="absolute bottom-[50px] right-0">
          <Image
            src="/images/home/classic/leaf.png"
            width={87}
            height={88}
            alt="leaf"
            className="hidden h-[62px] w-[70px] md:block"
          />
        </div>
        <h4 className="font-montserrat text-[20px] font-semibold uppercase tracking-[3px] text-black">
          Antephan Specials
        </h4>
        <Image
          src="/images/home/classic/kunefe-underline.svg"
          width={100}
          height={100}
          alt="underline"
          className=""
        />
      </div>
    </section>
  );
};

export default Classic;
