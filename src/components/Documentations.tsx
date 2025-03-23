import { motion } from "motion/react";

import components from "../componentData";
import ComponentCard from "./ComponentCard";
import Letters from "./Letters";
import { stagger } from "../animations";
import { useEffect, useRef } from "react";

export default function Documentations({ setSection }: any) {
  const componentsArray = components();
  const text = "Components we have";
  const text2 =
    "NOTE: The fields wrapped in curly braces are required for the code to work";

  const ref = useRef(null);

  useEffect(() => {
    setSection(ref);
  }, [ref]);

  return (
    <section
      ref={ref}
      id="docs"
      className="flex min-h-[100vh] flex-col items-center justify-center px-24 py-32"
    >
      <motion.div
        variants={stagger(0.05)}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 1, once: true }}
      >
        <h1 className="pb-4 text-center text-4xl font-medium">
          <Letters text={text} />
        </h1>
        <h1 className="pb-24 text-center text-lg font-light">
          <Letters text={text2} />
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
