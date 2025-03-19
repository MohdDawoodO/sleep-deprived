import { useEffect } from "react";
import { motion } from "motion/react";
import { pageAnim } from "../animations";
import Wave from "../components/Wave";

export default function LandingPage() {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  });

  const videoSrc = "src/assets/demo-vid.mkv";

  return (
    <motion.main
      className="px-16"
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="hero flex flex-wrap justify-center min-h-[90vh] items-center relative">
        <div className="intro grow basis-xl mb-[10rem]">
          <div className="hide-container">
            <h1 className="text-6xl font-medium">Free Online IDE</h1>
          </div>
          <div className="hide-container">
            <h2 className="text-3xl my-6 opacity-85">
              Supports HTML, CSS and Javascript
            </h2>
          </div>
          <div className="hide-container">
            <a
              className="px-6 py-2 text-xl border-2 text-[#05da76] border-[#05da76] hover:bg-[#05da76] hover:text-white duration-500 inline-block"
              href="https://www.youtube.com"
              target="_blank"
            >
              Docs
            </a>
          </div>
        </div>

        <div className="video Preview grow basis-xl">
          <video
            className="rounded-3xl border-[rgb(50,50,50)] border-[6px] shadow-[2px_2px_20px_rgba(255,255,255,0.1)] pointer-events-none"
            src={videoSrc}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <Wave />
      </section>
    </motion.main>
  );
}
