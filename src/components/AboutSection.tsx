import Wave from "./Wave";
import demoVideo from "../assets/demo.mp4";
import { motion } from "motion/react";
import { fadeAnim, scaleAnim, stagger } from "../animations";
import Letters from "./Letters";

export default function AboutSection() {
  const head = "Fast, Free, and Browser-Based IDE";
  const paragraphs = [
    "Write and Run HTML, CSS & JavaScript Effortlessly",
    "Code, Debug, and Preview in Real-Time",
  ];

  return (
    <motion.section
      className="flex flex-wrap justify-center min-h-[90vh] items-center relative px-24"
      variants={stagger(0.5)}
      initial="initial"
      animate="animate"
    >
      <div className="grow basis-xl mb-[8rem]">
        <motion.div variants={stagger(0.05)}>
          <h1 className="text-5xl font-medium leading-14 pb-8">
            <Letters text={head} />
          </h1>
        </motion.div>

        {paragraphs.map((para: string) => (
          <motion.div variants={stagger(0.05)}>
            <h2 className="text-2xl opacity-85 leading-10">
              <Letters text={para} />
            </h2>
          </motion.div>
        ))}

        <div>
          <motion.a
            variants={fadeAnim(1.5)}
            className="px-6 py-2 text-xl border-2 text-[#05da76] border-[#05da76] hover:bg-[#05da76] hover:text-white duration-500 inline-block mt-5"
            href="https://www.youtube.com"
            target="_blank"
          >
            Docs
          </motion.a>
        </div>
      </div>

      <div className="grow basis-xl backdrop-blur-xs">
        <motion.video
          variants={scaleAnim}
          className="rounded-3xl border-[rgb(50,50,50)] border-[6px] pointer-events-none opacity-75 backdrop-blur-3xl w-full shadow-[2px_2px_20px_rgba(255,255,255,0.1)]"
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
