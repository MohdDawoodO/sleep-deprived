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

  return (
    <motion.div
      layoutId={id}
      variants={projectAnim}
      initial="initial"
      animate="animate"
      exit={projectAnim.exit}
      className="bg-[rgb(20,20,20)] grow basis-[27rem] rounded-xl h-[45vh] p-6 px-10 overflow-hidden relative opacity-0"
    >
      <motion.h2 layout="position" className="text-xl font-semibold">
        {title}
      </motion.h2>

      <motion.p layout="position" className=" my-4 line-clamp-11">
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
        className="absolute top-0 left-full translate-x-[-100%] rounded-tr-lg p-2 w-10 bg-[rgb(50,50,50)] hover:opacity-75 duration-200 ml-[1px]"
      >
        <motion.img layout="position" src={deleteIcon} alt="delete this file" />
      </motion.button>

      <Link
        className="absolute top-0 left-full translate-x-[-200%] w-[2.5rem] h-[2.5rem] p-1 bg-[rgb(50,50,50)] hover:opacity-75 duration-200 flex items-center justify-center rounded-bl-xl"
        to={`/projects/${id}`}
        onClick={() => (document.body.style.overflow = "hidden")}
      >
        <motion.img
          layout="position"
          className="w-[1.4rem] h-auto"
          src={edit}
          alt="edit this file"
        />
      </Link>
    </motion.div>
  );
}
