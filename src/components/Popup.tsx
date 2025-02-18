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
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-lg z-50"
    >
      <motion.div
        initial={popupAnim.initial}
        animate={popupAnim.animate}
        exit={popupAnim.exit}
        className="popup relative bg-white text-black py-12 px-20 rounded-xl text-center"
      >
        <button
          onClick={() => {
            setIsOpen(false);
            document.body.style.overflow = "auto";
          }}
          className="cancel absolute top-0 left-full translate-x-[-98%] bg-gray-700 text-white px-3 py-1 rounded-tr-lg rounded-bl-xl hover:opacity-[92%] duration-200"
        >
          X
        </button>
        <h1 className="font-bold text-2xl mb-6">Name your project</h1>
        <form className="flex felx-col mb-2" onSubmit={formFill}>
          <input
            className="border-2 border-gray-600 py-1 px-3"
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-gray-600 text-white px-3 hover:opacity-[92%] duration-200">
            Confirm
          </button>
        </form>
        <p>Dont worry, you can change it anytime</p>
      </motion.div>
    </motion.div>
  );
}
