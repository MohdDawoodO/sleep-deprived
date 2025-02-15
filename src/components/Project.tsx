import { Link } from "react-router-dom";
import deleteIcon from "../assets/delete.png";
import { deletingProject } from "../states";
import { useAtom } from "jotai";
import edit from "../assets/edit.png";

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
    <div className="bg-[rgb(20,20,20)] grow basis-[25rem] mx-4 my-4 rounded-xl min-h-[40vh] p-6 px-10 overflow-hidden relative">
      <h2 className="text-xl">{title}</h2>
      <p className=" py-4">{code}</p>
      <button
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
        <img src={deleteIcon} alt="delete this file" />
      </button>
      <Link
        className="absolute top-0 left-full translate-x-[-200%] w-[2.5rem] h-[2.5rem] p-1 bg-[rgb(50,50,50)] hover:opacity-75 duration-200 flex items-center justify-center rounded-bl-xl"
        to={`/projects/${id}`}
      >
        <img className="w-[1.4rem] h-auto" src={edit} alt="edit this file" />
      </Link>
    </div>
  );
}
