import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#fff]">
        <h2 className="font-oswald text-center text-8xl text-[#C19D56] md:left-[15%] md:text-8xl">
          The Antephan
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#fff] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image1.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#C19D56] sm:text-7xl md:text-start">
              From Vision
              <br />
              to Legacy
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#000] md:text-start">
              What started as a vision to create something extraordinary soon
              became the heart of Antephan's identity. In 2010, founders Elias
              and Victor set out with a singular mission—to craft an experience
              that blended heritage, culture, and excellence. From a small
              artisan workshop to a renowned destination, Antephan has remained
              true to its roots, celebrating authenticity and craftsmanship.
              <br />
              <br />
              Every creation, meticulously designed and perfected over time,
              reflects years of dedication and passion. And while Antephan has
              evolved, the essence remains unchanged—to offer an unparalleled
              experience where tradition meets timeless artistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
