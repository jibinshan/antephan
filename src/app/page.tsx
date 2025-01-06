import Navbar from "@/components/Navbar";
import HeroSection from "./(section)/Hero";
import Taste from "./(section)/Taste";
import Kunefe from "./(section)/Kunefe";
import Classic from "./(section)/Classic";
import Reserve from "./(section)/Reserve";
import Footer from "./(section)/Footer";
import CheckOut from "./(section)/Checkout";
import Dealer from "./(section)/Dealer";
import Customer from "./(section)/Customer";
import Visit from "./(section)/Visit";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <HeroSection />
        <Taste />
        <Kunefe />
        <Classic />
        <Reserve />
        <Dealer />
        <Customer />
        <Visit />
        <CheckOut />
        <Footer />
      </div>
      {/* <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
        <ViewMenu />
      </div> */}
    </main>
  );
}
