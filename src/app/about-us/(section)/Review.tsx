"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-transparent">
      <div
        className="absolute left-0 top-0 z-10 hidden h-full w-full md:block"
        style={{
          backgroundImage: "url('/images/home/customer/leaf.svg')",
          backgroundSize: "10%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
        }}
      ></div>
      <div className="z-20 flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 pb-24 pt-12 md:pb-12 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <h3 className="font-montserrat text-2xl font-[600] uppercase leading-[30px] tracking-[3px] text-black lg:text-3xl">
            Customer Reviews
          </h3>
          <Image
            src="/images/home/classic/kunefe-underline.svg"
            width={100}
            height={100}
            alt="underline"
            className="h-[12px] w-[140px]"
          />
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="h-fit w-full px-4">
              <CarouselContent className="ml-4 flex h-fit w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex h-fit w-full basis-full flex-col items-center justify-center gap-6 rounded-2xl bg-[#f4eee0] md:bg-transparent"
                  >
                    <div
                      className="relative w-full px-3 py-12 md:mt-14 md:max-w-[700px] md:px-32"
                      style={{
                        backgroundImage:
                          "url('/images/home/reviews/reviewbg.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                      }}
                    >
                      <div className="absolute -top-10 left-[305px] hidden h-full w-full md:block">
                        <Image
                          src="/images/home/reviews/frame.svg"
                          width={70}
                          height={70}
                          alt="frame"
                        />
                      </div>
                      <div className="mb-4 flex w-full justify-center">
                        {Array.from({ length: review?.rating }).map(
                          (_, index) => (
                            <Icons.star key={index} className="text-primary" />
                          ),
                        )}
                      </div>
                      <div className="">
                        <p className="line-clamp-5 text-center font-poppins text-sm tracking-[1.18px] text-[#000]">
                          {review?.text?.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-2 pb-8">
                      <Image
                        src={
                          review?.authorAttribution?.photoUri ||
                          "/images/home/customer/user.svg"
                        }
                        width={54}
                        height={54}
                        alt={review?.authorAttribution?.displayName}
                      />
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-montserrat text-base font-[700] uppercase tracking-[4px] text-[#595959]">
                          {review?.authorAttribution?.displayName}
                        </p>
                        <span className="font-montserrat text-sm font-[400] tracking-[0.90px] text-[#292929]">
                          {review?.relativePublishTimeDescription}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden h-14 w-14 bg-[#fffaef] text-[#A27C47] transition-transform duration-300 ease-in-out hover:text-[#A27C47] group-hover:-translate-x-2 md:flex" />
              <CarouselNext className="hidden h-14 w-14 bg-[#fffaef] text-[#A27C47] transition-transform duration-300 ease-in-out hover:text-[#A27C47] group-hover:-translate-x-2 md:flex" />
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out md:hidden">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
