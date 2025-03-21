import { letterAnim, stagger } from "../animations";
import ideFeatures from "../features";
import FeatureCard from "./FeatureCard";
import { motion } from "motion/react";

export default function FeatureSection() {
  const features = ideFeatures();

  const text = "Why use Sleep Deprived?";
  const letters = text.split("");

  return (
    <section className="features flex flex-col px-24 min-h-[100vh] justify-center items-center">
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 1 }}
      >
        <h1 className="text-4xl font-medium pb-24">
          {letters.map((letter, i) => (
            <motion.div
              className={`inline-flex ${letter === " " ? "mr-2" : ""}`}
              key={letter + i}
              variants={letterAnim}
            >
              {letter}
            </motion.div>
          ))}
        </h1>
      </motion.div>

      <div className="features w-full flex flex-wrap justify-between text-center gap-12">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            index={i}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
