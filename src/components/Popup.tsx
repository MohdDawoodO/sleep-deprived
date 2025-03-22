import { popupOpen } from "../states";
import { useSetAtom } from "jotai";
import { addFile } from "./Add";
import { codes } from "../states";
import { useAtom } from "jotai";
import { useState } from "react";
import { motion } from "motion/react";
import { popupAnim } from "../animations";

export default function Popup() {
  const [projects, setProjects]: any = useAtom(codes);
  const [input, setInput] = useState("");
  const setIsOpen = useSetAtom(popupOpen);

  function formFill(e: any) {
    document.body.style.overflow = "auto";
    e.preventDefault();
    addFile(input, projects, setProjects);
    setInput("");
    setIsOpen(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] text-lg"
    >
      <motion.div
        variants={popupAnim}
        initial="initial"
        animate="animate"
        exit={popupAnim.exit}
        className="relative rounded-xl bg-[#202020] px-20 py-12 text-center text-white"
      >
        <button
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = "auto";
          }}
          className="absolute top-0 left-full translate-x-[-98%] rounded-tr-lg rounded-bl-xl bg-[#3c3c3c] px-3 py-1 text-white duration-200 hover:opacity-[92%]"
        >
          X
        </button>
        <h1 className="mb-6 text-2xl font-bold">Name your project</h1>
        <form className="mb-2 flex" onSubmit={formFill}>
          <input
            className="border-2 border-[#3c3c3c] px-3 py-1"
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-[#3c3c3c] px-3 text-white duration-200 hover:opacity-[92%]">
            Confirm
          </button>
        </form>
        <p>Dont worry, you can change it anytime</p>
      </motion.div>
    </motion.div>
  );
}
