import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import css from "../../assets/techs/css.png";
import html from "../../assets/techs/html.png";
import jss from "../../assets/techs/jss.png";
import mui from "../../assets/techs/mui.png";
import nextjs from "../../assets/techs/nextjs.png";
import trello from "../../assets/techs/pngwing.com (5).png";
import jiraa from "../../assets/techs/pngwing.com (6).png";
import webstrom from "../../assets/techs/pngwing.com (7).png";
import react from "../../assets/techs/react.png";
import reduxImage from "../../assets/techs/redux.png";
import reactQuery from "../../assets/techs/repo-dark.png";
import tailwind from "../../assets/techs/tailwind.png";
import typescript from "../../assets/techs/typescript.png";
import vscode from "../../assets/techs/vscode.png";

const skills = [
  react,
  nextjs,
  reduxImage,
  reactQuery,
  mui,
  tailwind,
  html,
  css,
  jss,
  typescript,
];
const tools = [trello, jiraa, webstrom, vscode];

const experiences = [
  "✓ 1.5+ years of professional working experience in ReactJS, NextJS, JavaScript, MaterialUi and Front-end development .",
  "  ✓ 2+ years of knowledge in ReactJS, JavaScript and Front-end development.",
  "✓ Decent experience in integration and manipulatio  of REST APIS.",
  "✓ Experienced in developing React Components and Projects from Figma Designs.",
  "✓ Profound working knowledge of application development and life cycle maintenance process.",
];

const AboutMe = () => {
  const [mounted, setMounted] = React.useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Anwar Hossain and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> react developer
              based in Dhaka, Bangladesh.
            </p>
            <br />
            <p className="mb-6">
              <span className="font-bold">I have,</span>
              <br />

              {mounted &&
                experiences.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
            </p>
            <p>
              I graduated from University of Asia Pacific, Dhaka, Bangladesh in
              2020 with a BS in Computer Engineering and have been working in
              the field ever since.
            </p>
            <br />
            <p></p>
            {/* <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p> */}
          </div>
          <div className="text-center md:w-1/2 md:text-left" ref={ref}>
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            {isInView && (
              <motion.div variants={variants} initial="hidden" animate="show">
                <div className="flex flex-wrap flex-row items-center justify-center gap-3 z-10 md:justify-start">
                  {skills.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <motion.div variants={images} class="group relative">
                          <Image
                            src={item}
                            alt=""
                            width={80}
                            height={50}
                            //className="bg-none	shadow-2xl"
                          />
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-6">Tools</h1>
              {isInView && (
                <motion.div variants={variants} initial="hidden" animate="show">
                  <div className="flex flex-wrap flex-row items-center justify-center gap-3 z-10 md:justify-start">
                    {tools.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <motion.div variants={images} class="group relative">
                            <Image
                              src={item}
                              alt=""
                              width={80}
                              height={50}
                              //className="bg-none	shadow-2xl"
                            />
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
