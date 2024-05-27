import { useState } from "react";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";
import States from "./context/states.jsx";
import Header from "./pages/components/header.jsx";
import Footer from "./pages/components/footer.jsx";
function App() {
  return (
    <>
      <States>
        <div className="text-black bg-gray-100 min-h-screen">
          <Header></Header>
          <Routes>
            <Route path="/"  element={<Home />}  />
            <Route path="work" element={<Work />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certification" element={<Certificates />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          
        </div>
        <div className="md:fixed md:bottom-0 md:w-full flex justify-center items-center">
          <Footer></Footer>
        </div>
      </States>
    </>
  );
}

export default App;
