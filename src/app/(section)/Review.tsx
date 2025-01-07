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

const Reviews = ({ }) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-transparent">
      <div className="absolute left-0 top-0 w-full h-full hidden md:block z-10"
        style={{
          backgroundImage: "url('/images/home/customer/leaf.svg')",
          backgroundSize: "10%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left"
        }}
      >
      </div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-start justify-center gap-4 pt-12 pb-24 md:pb-12 md:pt-24 z-20">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
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
        </div>
        <div className="flex w-full items-center justify-center p-4">
          {reviews && (
            <Carousel className="w-full px-4 h-fit">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4 h-fit">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full h-fit flex-col items-center justify-center gap-6 rounded-2xl bg-[#f4eee0] md:bg-transparent"
                  >
                    <div
                      className="w-full md:max-w-[700px] py-12 px-3 md:px-12"
                      style={{
                        backgroundImage: "url('/images/home/reviews/reviewbg.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center"
                      }}
                    >
                      <div className="flex w-full">
                        {Array.from({ length: review.rating }).map((_, index) => (
                          <Icons.star key={index} className="text-primary" />
                        ))}
                      </div>
                      <div className="">
                        <p className="text-primary line-clamp-5">{review.text}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full items-center justify-center gap-2 pb-8">
                      <Image
                        src={
                          review.profile_photo_url ||
                          "/images/home/reviews/pictures/anna-mathew.svg"
                        }
                        width={64}
                        height={64}
                        alt={review.author_name}
                      />
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-primary">{review.author_name}</p>
                        <span className="text-primary">
                          {review.relative_time_description}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex h-14 w-14 bg-[#fffaef] text-[#A27C47] hover:text-[#A27C47] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
              <CarouselNext className="hidden md:flex h-14 w-14 bg-[#fffaef] text-[#A27C47] hover:text-[#A27C47] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
              <div className="group absolute -bottom-12  left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out md:hidden">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section >
  );
};

export default Reviews;
