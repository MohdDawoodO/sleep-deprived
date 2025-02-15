import { popupOpen } from "../states";
import { useSetAtom } from "jotai";
import { addFile } from "./Add";
import { codes } from "../states";
import { useAtom } from "jotai";
import { useState } from "react";

export default function Popup() {
  const [projects, setProjects]: any = useAtom(codes);
  const [input, setInput] = useState("");
  const setIsOpen = useSetAtom(popupOpen);

  function formFill(e: any) {
    e.preventDefault();
    addFile(input, projects, setProjects);
    setInput("");
    setIsOpen(false);
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-lg z-50">
      <div className="popup relative bg-white text-black py-12 px-20 rounded-xl text-center">
        <button
          onClick={() => setIsOpen(false)}
          className="cancel absolute top-0 left-full translate-x-[-100%] bg-gray-700 text-white px-3 py-1 rounded-tr-lg rounded-bl-xl hover:opacity-[92%] duration-200"
        >
          X
        </button>
        <h1 className="font-bold text-2xl mb-6">Name your project</h1>
        <form className="flex felx-col mb-2" onSubmit={formFill}>
          <input
            className="border-2 border-gray-600 py-1 px-3"
            value={input}
            type="text"
            required
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-gray-600 text-white px-3 hover:opacity-[92%] duration-200">
            Confirm
          </button>
        </form>
        <p>Dont worry, you can change it anytime</p>
      </div>
    </div>
  );
}
