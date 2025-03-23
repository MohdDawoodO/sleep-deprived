export default function components() {
  return [
    {
      startTag: "<ButtonDark>",
      endTag: "</ButtonDark>",
      codeStart: `<button id="buttonDark" style="background:#3e3e3e;color:white;padding:0.8rem 1.6rem;font-size:1rem;border-radius:0.5rem;box-shadow: 0px 0px 10px rgba(0,0,0,0.5);transition: 0.3s ease;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=1">`,
      codeEnd: "</button>",
      id: "buttonDark",
      content: "{your text}",
    },
    {
      startTag: "<ButtonLight>",
      endTag: "</ButtonLight>",
      codeStart: `<button id="buttonLight" style="background:#e2e2e2;color:black;padding:0.8rem 1.6rem;font-size1rem;border-radius:0.5rem;box-shadow: 0px 0px 10px rgba(0,0,0,0.5);transition: 0.3s ease;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=1">`,
      codeEnd: "</button>",
      id: "buttonLight",
      content: "{your text}",
    },
    {
      startTag: "<ButtonGreen>",
      endTag: "</ButtonGreen>",
      codeStart: `<button id="buttonGreen" style=";color:#05da76;padding:0.6rem 1.8rem;font-size:1.1rem;font-weight:bold;border:3px solid #05da76;transition: 0.5s ease;" onmouseover="this.style.color='white';this,style.background='#05da76'" onmouseout="this.style.color='#05da76';this.style.background=''">`,
      codeEnd: "</button>",
      id: "buttonGreen",
      content: "{your text}",
    },
    {
      startTag: `<InputDark placeholder="`,
      endTag: `"/>`,
      codeStart: `<input type="text" id="inputDark" style="color:white;background:#3e3e3e;padding:0.2rem 0.4rem;border-radius:5px;border:2px solid #515151;" placeholder="`,
      codeEnd: `"/>`,
      id: "inputDark",
      content: "{placeholder}",
    },
    {
      startTag: `<InputLight placeholder="`,
      endTag: `"/>`,
      codeStart: `<input type="text" id="inputLight" style="color:black;background:white;padding:0.2rem 0.4rem;border-radius:5px;border:2px solid #515151;" placeholder="`,
      codeEnd: `"/>`,
      id: "inputLight",
      content: "{placeholder}",
    },
  ];
}
