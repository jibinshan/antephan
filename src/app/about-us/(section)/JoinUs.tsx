import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join-us.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl leading-[60px] text-[#C19D56]">
            Join Us for an
            <br />
            Unforgettable Meal
          </h1>
          <p className="max-w-[450px] text-center font-light leading-[160%] text-[#fff]">
            Step into the world of Antephan, where every cut is a masterpiece.
            Whether you seek an intimate dinner or a grand celebration, we
            invite you to indulge in flavors crafted with precision and passion.
            Experience the true art of steak, redefined.
          </p>

          <Button
            variant="outline"
            className="group w-fit items-center gap-[1.19rem] border-primary bg-transparent py-7 font-semibold uppercase text-white hover:bg-[#C19D56]"
          >
            <Link href={"/table-booking"}> Book Now</Link>
            <Icons.rightArrow className="text-primary duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
