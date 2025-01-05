"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import CartSheet from "./cart/CartSheet";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${position} top-5 z-50 flex h-[10vh] w-full max-w-[1300px] items-center bg-transparent p-4 transition-all duration-300 ease-in-out`}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/images/home/hero/logo.png"
            width={140}
            height={120}
            alt="logo"
            className="h-[50px] w-[50px]"
          />
        </Link>
        {!isScrolled && (
          <div className="hidden flex-row items-center justify-center gap-[3.48rem] md:flex">
            <Button
              asChild
              variant="link"
              className="px-0 font-montserrat text-[12px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-montserrat text-[12px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
            >
              <Link href="/menu">Menu</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-montserrat text-[12px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
            >
              <Link href="/contact">ABOUT US</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-montserrat text-[12px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
            >
              <Link href="/table-booking">BRANCH</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="px-0 font-montserrat text-[12px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent hover:text-primary"
            >
              <Link href="/table-booking">BOOKING</Link>
            </Button>
            <Button className="mt-3 rounded-none px-3 py-2 font-montserrat text-[11px] font-normal leading-[20px] tracking-[2.40px] ring-1 ring-primary ring-offset-1 ring-offset-black">
              BOOK TABLE
            </Button>
          </div>
        )}
        {isScrolled ? (
          <Sidebar>
            <Button
              variant="ghost"
              className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        ) : (
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <Icons.menu />
            </Button>
          </Sidebar>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
