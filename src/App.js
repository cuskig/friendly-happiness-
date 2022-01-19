import React from "react";
import "./style.css";

export default function App() {
  let [text, settext] = React.useState("a")
  return (
    <div tabindex="0" onKeyUp={e=>{
      if (e.key === "Backspace")
       settext(text.substring(0, text.length - 1))
      else
      settext(text + e.key)
      }}
    style={{}}
    >{text}</div>
  );
}
