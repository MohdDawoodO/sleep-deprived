import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { pageAnim } from "../animations";
import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeaturesSection";
import Documentations from "../components/Documentations";
import Footer from "../components/Footer";

export default function LandingPage() {
  const [section, setSection] = useState();

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
      <AboutSection section={section} />
      <FeatureSection />
      <Documentations setSection={setSection} />
      <Footer />
    </motion.main>
  );
}
