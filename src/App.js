import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import React, { useState } from "react";
import Alert from "./components/Alert.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = function (isVisible, type, message) {
    setAlert({
      isVisible: isVisible,
      type: type,
      msg: message,
    });
  };

  const toggleMode = function () {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(true, "Info", "Dark mode is enabled");
      document.title = "React App - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(true, "Info", "Light mode is enabled");
      document.title = "React App - Light mode";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="My App"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Alert alert={alert} />
      {/* <About /> */}
      <div className="container mt-3">
        <About AboutText="About" />
        <TextForm headline="Enter The Text Here" mode={mode} />
        {/* <Routes>
            <Route exact path="/about" element={<About AboutText="About" />} />
            <Route
              exact
              path="/"
              element={<TextForm headline="Enter The Text Here" mode={mode} />}
            />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
