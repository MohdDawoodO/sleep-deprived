import Wave from "./Wave";
import demoVideo from "../assets/demo.mp4";
import { motion } from "motion/react";
import { fadeAnim, scaleAnim, stagger } from "../animations";
import Letters from "./Letters";

export default function AboutSection({ section }: any) {
  const head = "Fast, Free, and Browser-Based IDE";
  const paragraphs = [
    "Write and Run HTML, CSS & JavaScript Effortlessly",
    "Code, Debug, and Preview in Real-Time",
  ];

  function scrollToDocs() {
    section.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <motion.section
      className="relative flex min-h-[90vh] flex-wrap items-center justify-center px-24 py-20"
      variants={stagger(0.5)}
      initial="initial"
      animate="animate"
    >
      <div className="mb-[8rem] grow basis-xl">
        <motion.div variants={stagger(0.05)}>
          <h1 className="pb-8 text-5xl leading-14 font-medium">
            <Letters text={head} />
          </h1>
        </motion.div>

        {paragraphs.map((para: string, i) => (
          <motion.div key={i} variants={stagger(0.05)}>
            <h2 className="text-2xl leading-10 opacity-85">
              <Letters text={para} />
            </h2>
          </motion.div>
        ))}

        <div>
          <motion.button
            variants={fadeAnim(1.5)}
            className="mt-5 inline-block border-2 border-[#05da76] px-6 py-2 text-xl text-[#05da76] duration-500 hover:bg-[#05da76] hover:text-white"
            onClick={scrollToDocs}
          >
            Docs
          </motion.button>
        </div>
      </div>

      <div className="grow basis-xl backdrop-blur-xs">
        <motion.video
          variants={scaleAnim}
          className="pointer-events-none w-full rounded-3xl border-[6px] border-[rgb(50,50,50)] opacity-75 shadow-[2px_2px_20px_rgba(255,255,255,0.1)] backdrop-blur-3xl"
          src={demoVideo}
          autoPlay
          muted
          loop
        ></motion.video>
      </div>
      <Wave />
    </motion.section>
  );
}
