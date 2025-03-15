import Project from "../components/Project";
import Popup from "../components/Popup";
import { useEffect } from "react";
import { codes, deletingProject } from "../states";
import { useAtom } from "jotai";
import { popupOpen } from "../states";
import Add from "../components/Add";
import DeletePopup from "../components/DeletePopup";
import { AnimatePresence, LayoutGroup } from "motion/react";
import { motion } from "motion/react";
import { pageAnim } from "../animations";

export default function Home() {
  const [projects, setProjects]: any = useAtom(codes);
  const [isOpen] = useAtom(popupOpen);
  const [isDeleting] = useAtom(deletingProject);

  useEffect(() => {
    document.body.style.overflow = "auto";
    setProjects(JSON.parse(localStorage.getItem("projects") ?? "[]"));
  }, []);

  return (
    <motion.main
      initial={pageAnim.intital}
      animate={pageAnim.animate}
      exit={pageAnim.exit}
      className="py-8 px-12 min-h-[90vh]"
    >
      <AnimatePresence mode="wait">
        {isOpen && <Popup />}
        {isDeleting.delete && <DeletePopup />}
      </AnimatePresence>

      <div className="projects flex flex-wrap">
        <LayoutGroup>
          <AnimatePresence>
            {projects.map((project: any) => {
              return (
                <Project
                  title={project.title}
                  code={project.html}
                  id={project.id}
                  key={project.id}
                />
              );
            })}
            <Add />;
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </motion.main>
  );
}
