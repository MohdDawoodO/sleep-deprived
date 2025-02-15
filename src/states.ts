import { atom } from "jotai";

export const codes: any = atom([]);

export const popupOpen = atom(false);

export const deletingProject = atom({
  delete: false,
  projectID: "",
  projectTitle: "",
});
