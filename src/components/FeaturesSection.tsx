import { stagger } from "../animations";
import ideFeatures from "../features";
import FeatureCard from "./FeatureCard";
import { motion } from "motion/react";
import Letters from "./Letters";

export default function FeatureSection() {
  const features = ideFeatures();
  const text = "Why use Sleep Deprived?";

  return (
    <section className="features flex flex-col px-24 min-h-[100vh] justify-center items-center">
      <motion.div
        variants={stagger(0.05)}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 1, once: true }}
      >
        <h1 className="text-4xl font-medium pb-24">
          <Letters text={text} />
        </h1>
      </motion.div>

      <div className="features w-full flex flex-wrap justify-between text-center gap-12">
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
