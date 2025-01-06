import Image from "next/image";
import React from "react";

const CheckOut: React.FC = () => {
  return (
    <section className="flex h-full w-full flex-col gap-8 py-16">
      <div className="flex flex-col gap-2">
        <h3 className="text-center font-montserrat text-[16px] font-semibold uppercase tracking-[3.2px] text-black md:text-[18px]">
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
      <div className="mx-4 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-6 py-12 md:ml-28 md:flex-row md:gap-16 md:py-20">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/home/checkout/96.svg"
            width={100}
            height={100}
            alt="underline"
            className="h-[62px] w-[120px]"
          />
          <span className="font-montserrat text-[12px] font-semibold uppercase tracking-[1.08px] text-black">
            Clients
          </span>
          <p className="text-center font-cormorant text-[11px] font-normal italic text-black opacity-80">
            Lorem ipsum dolor sit amet, est at alii <br />
            oporteat moderatius.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/home/checkout/13.svg"
            width={100}
            height={100}
            alt="underline"
            className="h-[62px] w-[120px]"
          />
          <span className="font-montserrat text-[12px] font-semibold uppercase tracking-[1.08px] text-black">
            Clients
          </span>
          <p className="text-center font-cormorant text-[11px] font-normal italic text-black opacity-80">
            Lorem ipsum dolor sit amet, est at alii <br />
            oporteat moderatius.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/home/checkout/84.svg"
            width={100}
            height={100}
            alt="underline"
            className="h-[62px] w-[120px]"
          />
          <span className="font-montserrat text-[12px] font-semibold uppercase tracking-[1.08px] text-black">
            Clients
          </span>
          <p className="text-center font-cormorant text-[11px] font-normal italic text-black opacity-80">
            Lorem ipsum dolor sit amet, est at alii <br />
            oporteat moderatius.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/home/checkout/715.svg"
            width={100}
            height={100}
            alt="underline"
            className="h-[62px] w-[120px]"
          />
          <span className="font-montserrat text-[12px] font-semibold uppercase tracking-[1.08px] text-black">
            Clients
          </span>
          <p className="text-center font-cormorant text-[11px] font-normal italic text-black opacity-80">
            Lorem ipsum dolor sit amet, est at alii <br />
            oporteat moderatius.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
