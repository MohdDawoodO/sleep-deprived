import deleteIcon from "../assets/delete.png";
import { deletingProject } from "../states";
import { useAtom } from "jotai";

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
    <div className="bg-[rgb(20,20,20)] grow basis-[25rem] mx-4 my-4 rounded-xl min-h-[40vh] p-6 px-10 overflow-hidden cursor-pointer relative">
      <h2 className="text-xl">{title}</h2>
      <p className=" py-4">{code}</p>
      <button
        onClick={() =>
          setIsDeleting({
            ...isDeleting,
            delete: true,
            projectID: id,
            projectTitle: title,
          })
        }
        className="absolute top-0 left-full translate-x-[-100%] rounded-tr-lg rounded-bl-xl p-2 w-10 bg-[rgb(50,50,50)] hover:opacity-75 duration-200"
      >
        <img className="" src={deleteIcon} alt="" />
      </button>
    </div>
  );
}
