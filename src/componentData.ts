export default function components() {
  return [
    {
      startTag: "<ButtonD>",
      endTag: "</ButtonD>",
      codeStart: `<button id="buttonDark" style="background:#3e3e3e;color:white;padding:0.8rem 1.6rem;font-size:1.2rem;border-radius:0.5rem;box-shadow: 0px 0px 10px rgba(0,0,0,0.5);transition: 0.3s ease;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=1"> `,
      codeEnd: "</button>",
      id: "buttonDark",
    },
    {
      startTag: "<ButtonL>",
      endTag: "</ButtonL>",
      codeStart: `<button id="buttonLight" style="background:#e2e2e2;color:black;padding:0.8rem 1.6rem;font-size:1.2rem;border-radius:0.5rem;box-shadow: 0px 0px 10px rgba(0,0,0,0.5);transition: 0.3s ease;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=1"> `,
      codeEnd: "</button>",
      id: "buttonLight",
    },
  ];
}
