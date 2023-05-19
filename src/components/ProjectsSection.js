import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import sixammart from "../../assets/project/6ammart.png";
import stackfood from "../../assets/project/stackfood.png";
import FramerAnimation from "./FramerAnimation";
import SlideUp from "./SlideUp";
const projects = [
  {
    name: "Stackfood",
    description:
      "Stackfood, is a food delivery system. I with a junior devloper, design and developed the whole frontend of the system for my current work place. This is a code canyon based product",
    image: stackfood,
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://stackfood-react.6amtech.com",
  },
  {
    name: "6ammart",
    description:
      "6ammart, is a module based delivery system. This system is consisted with 5 modules which are, Grocery, Food, Shop, Pharmacy and Delivery. I with a junior devloper, design and developed the whole system for my current work place. This is a code canyon based product",
    image: sixammart,
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://6ammart-react.6amtech.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="projects" ref={ref}>
      <h1 className="my-10 text-center font-bold text-4xl">
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
                        <h1 className="text-3xl font-bold mb-6">
                          {project.name}
                        </h1>
                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {project.description}
                        </p>
                        <div>
                          <h3>Tools used : </h3>
                        </div>

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
