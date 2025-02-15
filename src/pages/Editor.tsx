import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Editor() {
  const [project, setProject] = useState();
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    let projects = JSON.parse(localStorage.getItem("projects") ?? "[]");
    const currentProject = projects.filter((a: any) => a.id === id);
    setProject(currentProject[0]);
  }, []);

  if (!project)
    return (
      <div className="py-8 px-12 min-h-[90vh] text-center">
        <h1 className="font-medium text-2xl">
          Error: This project does not exist or is deleted
        </h1>
      </div>
    );

  return (
    <main className="py-8 px-12 min-h-[90vh] flex">
      <div className="HTML grow flex flex-col m-4">
        <h2 className="mb-2">HTML:</h2>
        <div className="code bg-[rgb(20,20,20)] min-h-[75vh] flex-col flex p-4">
          <p className="my-1">
            {"<"}!DOCTYPE html{">"}
          </p>
          <p className="my-1">
            {"<"}html lang="en"{">"}
          </p>
          <p className="my-1">
            {"<"}head{">"}
          </p>
          <p className="my-1">
            {"<"}meta charset="UTF-8" /{">"}
          </p>
          <p className="my-1">
            {"<"}meta name="viewport" content="width=device-width,
            initial-scale=1.0" /{">"}
          </p>
          <p className="my-1">
            {"<"}title{">"} <input className="bg-[rgb(30,30,30)]" type="text" />{" "}
            {"<"}/title{">"}
          </p>
          <p className="my-1">
            {"<"}/head{">"}
          </p>
          <p className="my-1">
            {"<"}body{">"}
          </p>
          <textarea
            name="html"
            className="bg-[rgb(30,30,30)] h-[45vh] resize-none my-2 rounded"
            cols={30}
            rows={10}
          ></textarea>
          <p className="my-1">
            {"<"}/body{">"}
          </p>
          <p className="my-1">
            {"<"}/html{">"}
          </p>
        </div>
      </div>
    </main>
  );
}
