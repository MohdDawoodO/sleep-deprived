import Project from "../components/Project";
import Popup from "../components/Popup";
import { useEffect } from "react";
import { codes, deletingProject } from "../states";
import { useAtom } from "jotai";
import { popupOpen } from "../states";
import Add from "../components/Add";
import DeletePopup from "../components/DeletePopup";

export default function Home() {
  const [projects, setProjects]: any = useAtom(codes);
  const [isOpen] = useAtom(popupOpen);
  const [isDeleting] = useAtom(deletingProject);

  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem("projects") ?? "[]"));
  }, []);

  return (
    <main className="py-8 px-12 min-h-[90vh]">
      {isOpen && <Popup />}
      {isDeleting.delete && <DeletePopup />}

      <div className="projects flex flex-wrap">
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

        <Add />
      </div>
    </main>
  );
}
