import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Editor() {
  let projects = JSON.parse(localStorage.getItem("projects") ?? "[]");
  const [project, setProject]: any = useState();
  const location = useLocation();

  useEffect(() => {
    loadEditor();
  }, []);

  async function loadEditor() {
    let projects = await JSON.parse(localStorage.getItem("projects") ?? "[]");
    const id = location.pathname.split("/")[2];
    const currentProject = projects.filter((a: any) => a.id === id);
    setProject(currentProject[0]);
  }

  function changeStuff(e: any, work: any) {
    const i = projects.findIndex((a: any) => a.id === project.id);

    switch (work) {
      case "title":
        setProject({ ...project, title: e.target.value });
        projects[i].title = e.target.value;
        if (e.target.value === "") projects[i].title = "New Document";
        break;

      case "html":
        setProject({ ...project, html: e.target.value });
        projects[i].html = e.target.value;

        break;

      case "css":
        setProject({ ...project, css: e.target.value });
        projects[i].css = e.target.value;
        break;

      case "js":
        setProject({ ...project, js: e.target.value });
        projects[i].js = e.target.value;
        break;

      case "class":
        setProject({ ...project, divClass: e.target.value });
        projects[i].divClass = e.target.value;
        break;
    }

    localStorage.setItem("projects", JSON.stringify(projects));
  }

  if (!project)
    return (
      <div className="py-8 px-12 min-h-[90vh] text-center">
        <h1 className="font-medium text-2xl">
          Error: This project does not exist or is deleted
        </h1>
      </div>
    );

  return (
    <main className="py-8 px-12 min-h-[90vh] flex flex-wrap">
      <Link
        to={`/preview/${project.id}`}
        target="_blank"
        className="test-button px-6 py-2 border-2 text-[#05da76] border-[#05da76] hover:bg-[#05da76] hover:text-white duration-500 absolute top-0 left-full translate-x-[-200%] translate-y-[75%] "
      >
        Test
      </Link>

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
            {"<"}title{">"}{" "}
            <input
              className="bg-[rgb(30,30,30)] text-center"
              type="text"
              value={project.title}
              onChange={(e) => changeStuff(e, "title")}
            />{" "}
            {"<"}/title{">"}
          </p>
          <p className="my-1">
            {"<"}/head{">"}
          </p>
          <p className="my-1">
            {"<"}body{">"}
          </p>
          <p className="my-1">
            {"<"}div class="
            <input
              className="bg-[rgb(30,30,30)] text-center"
              type="text"
              value={project.divClass}
              onChange={(e) => changeStuff(e, "class")}
            ></input>
            "{">"}
          </p>

          <textarea
            name="html"
            className="bg-[rgb(30,30,30)] h-[45vh] max-h-[150vh] resize-y my-2 p-1 px-2 rounded"
            cols={30}
            rows={10}
            value={project.html}
            onChange={(e) => changeStuff(e, "html")}
          ></textarea>

          <p className="my-1">
            {"<"}/div{">"}
          </p>
          <p className="my-1">
            {"<"}/body{">"}
          </p>
          <p className="my-1">
            {"<"}/html{">"}
          </p>
        </div>
      </div>

      <div className="CSS grow flex flex-col m-4">
        <h2 className="mb-2">CSS:</h2>
        <div className="code bg-[rgb(20,20,20)] min-h-[75vh] flex-col flex p-4">
          <textarea
            name="css"
            className="bg-[rgb(30,30,30)] h-[75vh] max-h-[150vh] resize-y my-2 p-1 px-2 rounded"
            cols={30}
            rows={10}
            value={project.css}
            onChange={(e) => changeStuff(e, "css")}
          ></textarea>
        </div>
      </div>

      <div className="JS grow flex flex-col m-4">
        <h2 className="mb-2">Javascript:</h2>
        <div className="code bg-[rgb(20,20,20)] min-h-[75vh] flex-col flex p-4">
          <textarea
            name="js"
            className="bg-[rgb(30,30,30)] h-[75vh] max-h-[150vh] resize-y my-2 p-1 px-2 rounded"
            cols={30}
            rows={10}
            value={project.js}
            onChange={(e) => changeStuff(e, "js")}
          ></textarea>
        </div>
      </div>
    </main>
  );
}
