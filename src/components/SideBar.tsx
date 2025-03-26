import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          {/* <SheetTitle>
            <Image
              src="/images/home/hero/logo.png"
              width={162}
              height={35}
              alt="Foodo "
              className="h-[30px] w-[30px]"
            />
          </SheetTitle> */}
          <SheetDescription className="flex w-full flex-col items-start justify-start gap-7 pt-14">
            <Link
              href="/"
              className="px-0 font-montserrat text-[22px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent text-black hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="px-0 font-montserrat text-[22px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent text-black hover:text-primary"
            >
              Menu
            </Link>
            <Link
              href="/about-us"
              className="px-0 font-montserrat text-[22px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent text-black hover:text-primary"
            >
              ABOUT US
            </Link>
            {/* <Link
              href="/table-booking"
              className="px-0 font-montserrat text-[22px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent text-black hover:text-primary"
            >
              BRANCH
            </Link> */}
            <Link
              href="/contact"
              className="px-0 font-montserrat text-[22px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent text-black hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="px-0 font-montserrat text-[22px] font-semibold uppercase leading-[20px] tracking-[2.40px] text-accent text-black hover:text-primary"
            >
              BOOK TABLE
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
