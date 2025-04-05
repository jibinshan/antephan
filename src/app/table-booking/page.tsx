import Hero from "@/app/table-booking/(section)/Hero";
import TableBooking from "@/app/table-booking/(section)/TableBooking";
import Navbar from "@/components/Navbar";
import Footer from "../(section)/Footer";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-transparent">
        <Navbar position="absolute" />
        <Hero />
        <TableBooking />
        <Footer />
      </div>
    </main>
  );
}
