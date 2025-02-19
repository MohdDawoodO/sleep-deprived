export default function components() {
  return [
    {
      startTag: "<Button>",
      endTag: "</Button>",
      codeStart: `<button id="buttonLightCom" style="background:#3e3e3e;color:white;padding:0.8rem 1.6rem;font-size:1.2rem;border-radius:0.5rem;box-shadow: 0px 0px 10px rgba(0,0,0,0.5);transition: 0.3s ease;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=1">`,
      codeEnd: "</button>",
    },
  ];
}
