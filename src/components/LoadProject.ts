export default async function loadProject(location: any, setProject: Function) {
  let projects = await JSON.parse(localStorage.getItem("projects") ?? "[]");
  const id = location.pathname.split("/")[2];
  const currentProject = projects.filter((a: any) => a.id === id);
  setProject(currentProject[0]);

  return currentProject[0];
}
