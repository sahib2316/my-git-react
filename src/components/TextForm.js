import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(
    "this is the default value for the 'text' state-variable"
  );
  const onTextChange = function (event) {
    setText(event.target.value);
  };

  const onConverting = function () {
    let upperCase = text.toUpperCase();
    setText(upperCase);
  };

  const toLower = function () {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  };

  const toClear = function () {
    let clearText = "";
    setText(clearText);
  };

  const toCopy = function () {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.headline}</h1>
        <div className="form-group my-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#1a1515" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={onTextChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>
        <button className="btn btn-warning my-3 mx-1" onClick={onConverting}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning my-3 mx-2" onClick={toLower}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning my-3 mx-2" onClick={toClear}>
          Clear Text
        </button>
        <button className="btn btn-warning my-3 mx-2" onClick={toCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter(function (element) {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "[Enter some text to preview here.]"}</p>
      </div>
    </>
  );
}
