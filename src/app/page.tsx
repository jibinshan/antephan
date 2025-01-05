import Navbar from "@/components/Navbar";
import HeroSection from "./(section)/Hero";
import Taste from "./(section)/Taste";
import Kunefe from "./(section)/Kunefe";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <HeroSection />
        <Taste />
        <Kunefe />
      </div>
      {/* <div className="fixed bottom-2 right-2 z-50 hidden md:flex">
        <ViewMenu />
      </div> */}
    </main>
  );
}
