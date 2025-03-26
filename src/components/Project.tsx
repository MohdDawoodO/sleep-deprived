import { Link } from "react-router-dom";
import deleteIcon from "../assets/delete.png";
import { deletingProject } from "../states";
import { useAtom } from "jotai";
import edit from "../assets/edit.png";
import { motion } from "motion/react";
import { projectAnim } from "../animations";

export default function Project({
  title,
  code,
  id,
}: {
  title: string;
  code: string;
  id: string;
}) {
  const [isDeleting, setIsDeleting] = useAtom(deletingProject);

  function hide(e: any) {
    if (e.ctrlKey) return;
    document.body.style.overflow = "hidden";
  }

  return (
    <motion.div
      layoutId={id}
      variants={projectAnim}
      initial="initial"
      animate="animate"
      exit={projectAnim.exit}
      className="relative h-[45vh] grow basis-[27rem] overflow-hidden rounded-xl bg-[rgb(20,20,20)] p-6 px-10 opacity-0"
    >
      <motion.h2 layout="position" className="text-xl font-semibold">
        {title}
      </motion.h2>

      <motion.p layout="position" className="my-4 line-clamp-11">
        {code !== "" ? code : "<!-- This file is waiting for you to edit-->"}
      </motion.p>

      <motion.button
        layout="position"
        onClick={() => {
          setIsDeleting({
            ...isDeleting,
            delete: true,
            projectID: id,
            projectTitle: title,
          });
          document.body.style.overflow = "hidden";
        }}
        className="absolute top-0 left-full ml-[1px] w-10 translate-x-[-100%] rounded-tr-lg bg-[rgb(50,50,50)] p-2 duration-200 hover:opacity-75"
      >
        <motion.img layout="position" src={deleteIcon} alt="delete this file" />
      </motion.button>

      <Link
        className="absolute top-0 left-full flex h-[2.5rem] w-[2.5rem] translate-x-[-200%] items-center justify-center rounded-bl-xl bg-[rgb(50,50,50)] p-1 duration-200 hover:opacity-75"
        to={`/projects/${id}`}
        onClick={hide}
      >
        <motion.img
          layout="position"
          className="h-auto w-[1.4rem]"
          src={edit}
          alt="edit this file"
        />
      </Link>
    </motion.div>
  );
}
