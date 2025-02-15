import { useAtom, useSetAtom } from "jotai";
import { codes, deletingProject } from "../states";

export default function DeletePopup() {
  const [isDeleting, setIsDeleting] = useAtom(deletingProject);
  const setProjects = useSetAtom(codes);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-lg z-50">
      <div className="popup relative bg-white text-black py-12 px-20 rounded-xl text-center">
        <h1 className="font-bold text-2xl mb-6">
          Do you really want to delete this project?
        </h1>
        <button
          onClick={() => deleteProject(isDeleting, setIsDeleting, setProjects)}
          className="bg-gray-600 text-white px-12 py-2 mr-8 text-xl hover:bg-red-500 duration-200"
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
          className="bg-gray-600 text-white px-12 py-2 text-xl hover:bg-green-400 transition duration-200"
        >
          No
        </button>
        <p className="mt-4">This action can not be undone</p>
      </div>
    </div>
  );
}

function deleteProject(
  isDeleting: any,
  setIsDeleting: Function,
  setProjects: Function
) {
  let projects = JSON.parse(localStorage.getItem("projects") ?? "[]");

  const newProjects = projects.filter(
    (a: any) => a.id !== isDeleting.projectID && a.title
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
