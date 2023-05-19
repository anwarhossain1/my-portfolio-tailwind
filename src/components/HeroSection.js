import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import github from "../../assets/social/github.png";
import profilepic from "./../../assets/profile.jpg";
import fb from "./../../assets/social/fb.png";
import linkedin from "./../../assets/social/linkedin.png";

const socialLinks = [
  {
    image: github,
    link: "http://github.com/anwarhossain1",
  },
  {
    image: linkedin,
    link: "https://www.linkedin.com/in/anwarhossain1/",
  },
  {
    image: fb,
    link: "https://www.facebook.com/anwarirish",
  },
];

const HeroSection = () => {
  const router = useRouter();
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src={profilepic}
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Anwar Hossain!
          </h1>
          <p className="text-lg mt-4 mb-5 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Professional React Developer{" "}
            </span>
            based in Dhaka, Bangladesh. Working towards creating web
            applications that makes life easier and more meaningful.
          </p>
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 mb-10 ">
            {socialLinks.map((item, index) => {
              return (
                <Image
                  src={item.image}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full shadow-xl cursor-pointer"
                  key={index}
                  onClick={() => window.open(item.link, "_ blank")}
                />
              );
            })}
          </div>
          <Link
            to="projects"
            className="cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
