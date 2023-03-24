import HeroSection from "../src/components/HeroSection";
import Navbar from "../src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <HeroSection />
      </main>
    </>
  );
}
