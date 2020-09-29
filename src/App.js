import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import TUF from "./pages/TUF";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    getResumeData();
  }, []);

  function getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  console.log(resumeData);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Skills data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Contact data={resumeData.main} />
      <TUF data={resumeData.volunteer} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default App;
