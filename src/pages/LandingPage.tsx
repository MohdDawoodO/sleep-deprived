import { useEffect } from "react";
import { motion } from "motion/react";
import { pageAnim } from "../animations";
import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeaturesSection";

export default function LandingPage() {
  useEffect(() => {
    document.body.style.overflowY = "auto";
  });

  return (
    <motion.main
      variants={pageAnim(0.5, 0.1, 0.2)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AboutSection />
      <FeatureSection />
    </motion.main>
  );
}
