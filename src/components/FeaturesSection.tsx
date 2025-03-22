import { stagger } from "../animations";
import ideFeatures from "../features";
import FeatureCard from "./FeatureCard";
import { motion } from "motion/react";
import Letters from "./Letters";

export default function FeatureSection() {
  const features = ideFeatures();
  const text = "Why use Sleep Deprived?";

  return (
    <section className="flex min-h-[100vh] flex-col items-center justify-center px-24">
      <motion.div
        variants={stagger(0.05)}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 1, once: true }}
      >
        <h1 className="pb-24 text-4xl font-medium">
          <Letters text={text} />
        </h1>
      </motion.div>

      <div className="flex w-full flex-wrap justify-between gap-12 text-center">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
