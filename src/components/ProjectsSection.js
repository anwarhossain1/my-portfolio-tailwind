import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import stackfood from "../../assets/project/stackfood.png";
import FramerAnimation from "./FramerAnimation";
import SlideUp from "./SlideUp";
const projects = [
  {
    name: "Stackfood",
    description:
      "Stackfood, is a food delivery system. I developed the whole system for my current work place.",
    image: stackfood,
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://stackfood-react.6amtech.com",
  },
  // {
  //   name: "PlatoIO",
  //   description: "PlatoIO is a to do list app that built using the PERN stack.",
  //   image: "/platoio.png",
  //   github: "https://github.com/hqasmei/platoio",
  //   link: "https://platoio.com/register",
  // },
  // {
  //   name: "Kator Family Photos",
  //   description:
  //     "Kator Family Photos is a photos and video digitization service in the LA area.",
  //   image: "/familyphotos.png",
  //   github: "https://github.com/hqasmei/katorfamilyphotos",
  //   link: "https://katorfamilyphotos.com/",
  // },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl" ref={ref}>
        My Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28" ref={ref}>
        {isInView && (
          <FramerAnimation>
            {projects.map((project, idx) => {
              return (
                <div key={idx}>
                  <SlideUp offset="-300px 0px -300px 0px">
                    <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 mb-10">
                      <div className=" md:w-1/2">
                        <Link href={project.link} target="_blank">
                          <Image
                            src={project.image}
                            alt=""
                            width={1000}
                            height={1000}
                            className="rounded-xl shadow-xl hover:opacity-70"
                          />
                        </Link>
                      </div>
                      <div className="mt-8 md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">
                          {project.name}
                        </h1>
                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {project.description}
                        </p>
                        <div className="flex flex-row align-bottom space-x-4">
                          <Link href={project.github} target="_blank">
                            {/* <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        /> */}
                          </Link>
                          <Link href={project.link} target="_blank">
                            {/* <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        /> */}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              );
            })}
          </FramerAnimation>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
