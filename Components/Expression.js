import React from "react";

export default function Expression() {
  let date = new Date().toDateString();
  setInterval(myTimer, 1000);

  function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
  }
  return (
    <div>
      <h1 className="my-3">Date and Time</h1>
      <div>Today is {date}</div>
      <p>Current time is <span id="demo"></span></p>
    </div>
  );
}
