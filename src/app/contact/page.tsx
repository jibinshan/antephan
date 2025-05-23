import Contact from "@/app/contact/(section)/Contact";
import Navbar from "@/components/Navbar";
import Footer from "../(section)/Footer";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#fff]">
        <Navbar position="absolute" />
        <div className="h-[10vh]" id="hero"></div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default page;
