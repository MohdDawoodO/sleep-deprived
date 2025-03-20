import { useAtom, useSetAtom } from "jotai";
import { codes, deletingProject } from "../states";
import { motion } from "motion/react";
import { popupAnim } from "../animations";

export default function DeletePopup() {
  const [isDeleting, setIsDeleting] = useAtom(deletingProject);
  const setProjects = useSetAtom(codes);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-lg z-50"
    >
      <motion.div
        variants={popupAnim}
        initial="initial"
        animate="animate"
        exit={popupAnim.exit}
        className="popup relative bg-[#202020] text-white py-12 px-20 rounded-xl text-center"
      >
        <h1 className="font-bold text-2xl mb-6">
          Do you really want to delete this project?
        </h1>
        <button
          onClick={() => {
            deleteProject(isDeleting, setIsDeleting, setProjects);
            document.body.style.overflow = "auto";
          }}
          className="bg-[#3c3c3c] text-white px-12 py-2 mr-8 text-xl hover:bg-[#c22126] duration-200 rounded"
        >
          Yes
        </button>
        <button
          onClick={() => {
            setIsDeleting({
              ...isDeleting,
              delete: false,
              projectID: "",
              projectTitle: "",
            });
            document.body.style.overflow = "auto";
          }}
          className="bg-[#3c3c3c] text-white px-12 py-2 text-xl hover:bg-[#13b162] transition duration-200 rounded"
        >
          No
        </button>
        <p className="mt-4">This action can not be undone</p>
      </motion.div>
    </motion.div>
  );
}

function deleteProject(
  isDeleting: any,
  setIsDeleting: Function,
  setProjects: Function
) {
  let projects = JSON.parse(localStorage.getItem("projects") ?? "[]");

  const newProjects = projects.filter(
    (a: any) => a.id !== isDeleting.projectID
  );

  localStorage.setItem("projects", JSON.stringify(newProjects));
  setIsDeleting({
    ...isDeleting,
    delete: false,
    projectID: "",
    projectTitle: "",
  });

  setProjects(newProjects);
}

export function DeleteProject() {}
