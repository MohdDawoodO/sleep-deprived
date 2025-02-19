import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import components from "../componentData";

export default function Preview() {
  const location = useLocation();
  const [project, setProject]: any = useState();
  const [finalCode, setFinalCode] = useState("");
  const componentsArray = components();

  useEffect(() => {
    loadPreview();
  }, []);

  async function loadPreview() {
    let projects = await JSON.parse(localStorage.getItem("projects") ?? "[]");
    let newProject: any;

    const id = location.pathname.split("/")[2];
    const currentProject = projects.filter((a: any) => a.id === id)[0];
    document.title = currentProject.title;
    setProject(currentProject);

    componentsArray.forEach((component) => {
      const startHtml = currentProject.html.replaceAll(
        component.startTag,
        component.codeStart
      );

      const newHtml = startHtml.replaceAll(component.endTag, component.codeEnd);

      newProject = { ...currentProject, html: newHtml };

      setProject({ ...project, html: newHtml });
    });

    setFinalCode(newProject.html + `<style>${newProject.css}</style>`);

    setTimeout(() => {
      const script = document.createElement("script");
      script.textContent = newProject.js;
      document.body.appendChild(script);
    }, 500);
  }

  if (!project) return;

  return (
    <div
      className={project.divClass}
      dangerouslySetInnerHTML={{ __html: finalCode }}
    ></div>
  );
}
