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
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] text-lg"
    >
      <motion.div
        variants={popupAnim}
        initial="initial"
        animate="animate"
        exit={popupAnim.exit}
        className="relative rounded-xl bg-[#202020] px-20 py-12 text-center text-white"
      >
        <h1 className="mb-6 text-2xl font-bold">
          Do you really want to delete this project?
        </h1>
        <button
          onClick={() => {
            deleteProject(isDeleting, setIsDeleting, setProjects);
            document.body.style.overflow = "auto";
          }}
          className="mr-8 rounded bg-[#3c3c3c] px-12 py-2 text-xl text-white duration-200 hover:bg-[#c22126]"
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
          className="rounded bg-[#3c3c3c] px-12 py-2 text-xl text-white transition duration-200 hover:bg-[#13b162]"
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
  setProjects: Function,
) {
  let projects = JSON.parse(localStorage.getItem("projects") ?? "[]");

  const newProjects = projects.filter(
    (a: any) => a.id !== isDeleting.projectID,
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
