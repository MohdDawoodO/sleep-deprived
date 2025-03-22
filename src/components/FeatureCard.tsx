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
      viewport={{ amount: 0.8, once: true }}
      className="min-h-[30vh] flex flex-col justify-center grow basis-md pointer-events-none bg-[#181818] p-12 border-[5px] rounded-2xl border-[#282828] shadow-[0px_0px_20px_rgba(40,40,40,1)]"
    >
      <div className="content">
        <h2 className="text-2xl pb-2 font-medium">{title}</h2>
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </motion.div>
  );
}
