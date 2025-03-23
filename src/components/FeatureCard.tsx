import { motion } from "motion/react";
import { fadeAnim } from "../animations";

export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeAnim(0.75)}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ amount: 0.8, once: true }}
      className="flex min-h-[30vh] grow basis-md flex-col justify-center rounded-2xl border-[5px] border-[#282828] bg-[#181818] p-12 shadow-[0px_0px_20px_rgba(40,40,40,1)]"
    >
      <div>
        <h2 className="pointer-events-none pb-2 text-2xl font-medium">
          {title}
        </h2>
        <p
          className="pointer-events-none text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </motion.div>
  );
}
