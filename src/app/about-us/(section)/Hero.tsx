import Image from "next/image";

const Hero = ({}) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#C19D56] lg:text-6xl">
                Welcome to
                <br /> Antephan Where
                <br /> Every Bite is an
                <br /> Art Form
              </h1>
              <p className="font-manrope font-normal text-[#000]">
                Discover the essence of Antephan, where tradition and
                sophistication come together. Every corner tells a story, every
                moment is an experience. From its rich heritage to its modern
                charm, immerse yourself in the beauty, culture, and warmth that
                make Antephan truly unforgettable.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-28 lg:w-1/2">
            <Image
              src="/images/about-us/image2.jpg"
              width={951}
              height={975}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
