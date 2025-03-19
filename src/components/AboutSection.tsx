import Wave from "./Wave";
import demoVideo from "../assets/demo.mp4";
import { motion } from "motion/react";
import { buttonAnim, scaleAnim, textAnim } from "../animations";

export default function AboutSection() {
  return (
    <section className="hero flex flex-wrap justify-center min-h-[90vh] items-center relative px-32">
      <div className="intro grow basis-xl mb-[8rem]">
        <div className="hide overflow-hidden">
          <motion.h1
            variants={textAnim}
            className="text-5xl font-medium leading-28"
          >
            Fast, Free, and Browser-Based IDE
          </motion.h1>
        </div>
        <div className="hide overflow-hidden">
          <motion.h2
            variants={textAnim}
            className="text-2xl opacity-85 leading-10"
          >
            Write and Run HTML, CSS & JavaScript Effortlessly
          </motion.h2>
        </div>
        <div className="hide overflow-hidden">
          <motion.h2
            variants={textAnim}
            className="text-2xl opacity-85 leading-10"
          >
            Code, Debug, and Preview in Real-Time
          </motion.h2>
        </div>
        <div className="hide overflow-hidden">
          <motion.a
            variants={buttonAnim}
            className="px-6 py-2 text-xl border-2 text-[#05da76] border-[#05da76] hover:bg-[#05da76] hover:text-white duration-500 inline-block mt-5"
            href="https://www.youtube.com"
            target="_blank"
          >
            Docs
          </motion.a>
        </div>
      </div>

      <div className="video Preview grow basis-xl">
        <motion.video
          variants={scaleAnim}
          className="rounded-3xl border-[rgb(50,50,50)] border-[6px] shadow-[2px_2px_20px_rgba(255,255,255,0.1)] pointer-events-none opacity-75 w-full"
          src={demoVideo}
          autoPlay
          muted
          loop
        ></motion.video>
      </div>
      <Wave />
    </section>
  );
}
