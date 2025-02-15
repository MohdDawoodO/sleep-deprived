import add from "../assets/add.svg";
import { v4 } from "uuid";
import { popupOpen } from "../states";
import { useSetAtom } from "jotai";

export default function Add() {
  const setIsOpen = useSetAtom(popupOpen);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className="bg-[rgb(20,20,20)] grow basis-[25rem] mx-4 my-4 rounded-xl min-h-[40vh] p-6 px-10 overflow-hidden cursor-pointer flex flex-col items-center justify-center"
    >
      <p className="text-lg">Make new project!</p>
      <img className="py-4" src={add} alt="add" />
    </div>
  );
}

export function addFile(title: string, projects: any, setProjects: any) {
  let newProjects = projects;
  const fileTemplate = {
    title: title,
    html: `<body>
      <!-- this file is waiting for you to edit -->
    <body>`,
    css: "",
    js: "",
    id: v4(),
  };

  setProjects([...projects, fileTemplate]);

  newProjects.push(fileTemplate);

  localStorage.setItem("projects", JSON.stringify(newProjects));
}
