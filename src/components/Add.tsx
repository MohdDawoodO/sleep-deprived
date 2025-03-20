import add from "../assets/add.svg";
import { v4 } from "uuid";
import { popupOpen } from "../states";
import { useSetAtom } from "jotai";
import { motion } from "motion/react";

export default function Add() {
  const setIsOpen = useSetAtom(popupOpen);

  return (
    <motion.div
      onClick={() => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
      }}
      className="bg-[rgb(20,20,20)] grow basis-[27rem] rounded-xl min-h-[45vh] p-6 px-10 overflow-hidden relative cursor-pointer flex flex-col items-center justify-center hover:opacity-85 duration-200"
    >
      <motion.p layout="position" className="text-lg">
        Make new project!
      </motion.p>
      <motion.img layout="position" className="py-4" src={add} alt="add" />
    </motion.div>
  );
}

export function addFile(title: string, projects: any, setProjects: any) {
  let newProjects = projects;
  const fileTemplate = {
    title: title ? title : "New Document",
    html: ``,
    css: "",
    js: "",
    id: v4(),
    divClass: "",
  };

  setProjects([...projects, fileTemplate]);

  newProjects.push(fileTemplate);

  localStorage.setItem("projects", JSON.stringify(newProjects));
}
