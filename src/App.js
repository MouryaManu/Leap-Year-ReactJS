import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [dob, setdob] = useState("");
  var [result, setresult] = useState("");
  var year;

  function todate(date) {
    year = dob.slice(6, 11);
  }

  function inputHandler(event) {
    dob = event.target.value;
    setdob(dob);
  }
  todate(dob);
  function leapyear(year) {
    if (year % 4 === 0) {
      result = "Yay!! You were born in a leap year";
    } else {
      result = "You were born in a non-leap year!";
    }
  }
  function clickHandler(event) {
    leapyear(year);
    setresult(result);
    //console.log(result);
  }

  return (
    <div className="App">
      <div style={{ margin: "0", padding: "1rem" }}>
        <h1>Hello!, Welcome to Leap Year App </h1>
        <h3>We find Leap Years! </h3>
      </div>
      <hr />
      <div
        style={{
          margin: "2rem",
          padding: "3rem",
          margin: "0"
        }}
      >
        {" "}
        <div style={{ fontSize: "2rem", margin: "2rem" }}>
          Your Date of Birth(in dd/mm/yyyy):{" "}
        </div>
        <input onChange={inputHandler} />
        <button
          onClick={clickHandler}
          style={{
            marginLeft: "1rem",
            padding: "0.5rem",
            backgroundColor: "black",
            fontFamily: "'Caveat', cursive",
            fontSize: "1rem",
            color: "white"
          }}
        >
          Find Out!{" "}
        </button>
        <h2 style={{ margin: "2rem" }}>{result}</h2>
      </div>
    </div>
  );
}
