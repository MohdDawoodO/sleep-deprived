import { motion } from "motion/react";
import { letterAnim } from "../animations";

export default function Letters({ text }: { text: string }) {
  const letters: any = text.split("");

  const newLetters = letters.map((letter: string, i: number) => (
    <motion.div
      className={`inline-flex ${letter === " " ? "mr-2" : ""}`}
      variants={letterAnim}
      key={i}
    >
      {letter}
    </motion.div>
  ));

  return newLetters;
}
