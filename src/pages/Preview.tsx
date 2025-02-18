import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Preview() {
  const location = useLocation();
  const [project, setProject]: any = useState();
  const [finalCode, setFinalCode] = useState("");

  useEffect(() => {
    let projects = JSON.parse(localStorage.getItem("projects") ?? "[]");

    const id = location.pathname.split("/")[2];
    const currentProject = projects.filter((a: any) => a.id === id)[0];
    document.title = currentProject.title;
    setProject(currentProject);

    setFinalCode(currentProject.html + `<style>${currentProject.css}</style>`);

    setTimeout(() => {
      const script = document.createElement("script");
      script.textContent = currentProject.js;
      document.body.appendChild(script);
    }, 500);
  }, []);

  if (!project) return;

  return <div id="app" dangerouslySetInnerHTML={{ __html: finalCode }}></div>;
}
