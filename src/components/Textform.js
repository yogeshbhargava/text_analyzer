import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("Enter Text Here");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleupclick = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
  };
  const handleloclick = () => {
    let newtext = Text.toLocaleLowerCase();
    setText(newtext);
  };

  return (
    <>
      <div
        className="conatiner"
        style={{
          color: props.mode === `dark` || `success` ? `white` : `black`,
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            id="Mybox"
            value={Text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === `dark`
                  ? `grey`
                  :  props.mode === `success`
                  ? `green`
                  : `white`,
              color: props.mode === `dark`  ? `white` : props.mode === `success` ? `white`: `black`,
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>
          Convert To Lowercase
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {Text.split(" ").length} Words and {Text.length} Characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes to Read</p>
      </div>
    </>
  );
}
