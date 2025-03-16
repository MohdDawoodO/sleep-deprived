import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import components from "../componentData";
import loadProject from "../components/LoadProject";

export default function Preview() {
  const location = useLocation();
  const [project, setProject]: any = useState();
  const [finalCode, setFinalCode] = useState("");
  const componentsArray = components();

  useEffect(() => {
    setCode();
  }, []);

  async function setCode() {
    const currentProject = await loadProject(location, setProject);

    let newProject: any;
    componentsArray.forEach((component) => {
      const startHtml = currentProject.html.replaceAll(
        component.startTag,
        component.codeStart
      );

      const newHtml = startHtml.replaceAll(component.endTag, component.codeEnd);

      newProject = { ...project, html: newHtml };

      setProject(newProject);
    });

    setFinalCode(newProject.html + `<style>${currentProject.css}</style>`);

    document.title = currentProject.title;

    setTimeout(() => {
      const script = document.createElement("script");
      script.textContent = currentProject.js;
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
