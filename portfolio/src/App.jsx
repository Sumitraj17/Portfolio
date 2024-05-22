import { useState } from "react";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="work" element={<Work />} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="certification" element={<Certificates/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
