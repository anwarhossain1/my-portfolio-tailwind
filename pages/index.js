import { ThemeProvider } from "next-themes";
import AboutMe from "../src/components/AboutMe";
import FramerAnimation from "../src/components/FramerAnimation";
import HeroSection from "../src/components/HeroSection";
import Navbar from "../src/components/Navbar";
import ProjectsSection from "../src/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
          <FramerAnimation>
            <HeroSection />
          </FramerAnimation>
          <AboutMe />
          <ProjectsSection />
        </main>
      </ThemeProvider>
    </>
  );
}
