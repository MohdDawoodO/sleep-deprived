import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { fadeAnim } from "../animations";

export default function ComponentCard({ component }: { component: any }) {
  const [code, setCode] = useState("");

  const { startTag, endTag, codeStart, codeEnd, id, content } = component;

  useEffect(() => {
    const newCode = codeStart + content + codeEnd;

    setCode(newCode);
  }, []);

  return (
    <motion.div
      variants={fadeAnim(1)}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ amount: 1, once: true }}
      className="flex min-h-[25vh] grow basis-[30rem] flex-col justify-center rounded-2xl border-[5px] border-[#282828] bg-[#181818] p-8 px-10 shadow-[0px_0px_20px_rgba(40,40,40,1)]"
    >
      <h2 className="text-lg leading-10">Tag: {startTag + content + endTag}</h2>
      <h2 className="pb-5 text-lg">ID: "{id}"</h2>
      <div dangerouslySetInnerHTML={{ __html: code }}></div>
    </motion.div>
  );
}
