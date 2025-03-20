import { useEffect } from "react";
import { motion } from "motion/react";
import { landingAnim } from "../animations";
import AboutSection from "../components/AboutSection";

export default function LandingPage() {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  });

  return (
    <motion.main
      variants={landingAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AboutSection />
    </motion.main>
  );
}
