import React, { useRef } from "react";

export default function UseRef() {
  let inputRef = useRef(null)
  const handleInput = () => {
    console.log("hello");

    inputRef.current.value = "1000";
    inputRef.current.focus();
   inputRef.current.style.color = "red";
  }

  return (
    <div>
      <h1> UseRef in react</h1>
      <input type="text" ref={inputRef} />

      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
}
