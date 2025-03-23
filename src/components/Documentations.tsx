import { motion } from "motion/react";

import components from "../componentData";
import ComponentCard from "./ComponentCard";
import Letters from "./Letters";
import { stagger } from "../animations";

export default function Documentations() {
  const componentsArray = components();
  const text = "Components we have";

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

      <div className="flex w-full flex-wrap gap-12">
        {componentsArray.map((component: object, i: number) => (
          <ComponentCard key={i} component={component} />
        ))}
      </div>
    </section>
  );
}
