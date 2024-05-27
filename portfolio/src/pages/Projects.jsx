import lib from "./components/images/lib2.jpg";
import store from "./components/images/store4.jpg";
import web from "./components/images/zip2.png";
import insight from "./components/images/insight.jpg";
import Card from "./components/card.jsx";

function Projects() {
  const project = [
    {
      image: insight,
      head: "Academic Insight",
      desc: "Academic Insight is a collaborative record management system for students and teachers. Students can access their marks and attendance anytime, while teachers benefit from streamlined IA handlingand mark finalization. This reduces workload and fosters a more transparent learning environment.",
      link: "https://github.com/Sumitraj17/Academic-Insight",
      stack: "TechStack:- React, TypeScript, Nodejs, MySQL",
    },
    {
      image: store,
      head: "NexStore",
      desc: "NexStore is a modern Angular web app with category navigation, price sorting, and customizable viewing optionsfor a seamless shopping experience. It features essential cart functionalities like price calculation and product management.",
      link: "https://github.com/Sumitraj17/NexStore-WebShop",
      stack: "TechStack :-  Angular, TypeScript",
    },
    {
      image: web,
      head: "WebSizer",
      desc: "WebSizer , a team-built web app, employs HTML, CSS, JavaScript, Node. js (Express. js ), and MySQL. It optimizes data for storage and web performance, offering file and image compression capabilities.",
      link: "https://github.com/sujanps2003/WebSizer",
      stack: "Tech Stack :- JavaScript, Nodejs, Express, MySQL",
    },
    {
      image: lib,
      head: "Digital Library",
      desc: "Digital Library is a collaborative C programming-based system developed by a team of 2. It offers two interfaces: one for librarians with features like managing book inventory and borrowing history, and another for customers to check book availability and borrow books",
      link: "https://github.com/Sumitraj17/Digital_Library",
      stack: "Tech Stack :- C Language",
    },
  ];
  return (
    <>
      <div>
        {/* <button className="ml-4 mt-4 p-2 border border-black bg-white rounded-full hover:bg-blue-50"><Link to='/'><FaArrowLeft size={30} /></Link></button> */}
        <h1 className=" italic text-5xl font-bold  text-center text-shadow-md ml-5 mr-5 mb-5">
          PROJECTS
        </h1>
        <section className="flex flex-col justify-center items-center mt-5">
          {project.map((pro, index) => (
            <Card
              key={index}
              image={pro.image}
              head={pro.head}
              desc={pro.desc}
              link={pro.link}
              bg="bg-white"
              width="w-2/3"
              stack={pro.stack}
            />
          ))}
        </section>
      </div>
    </>
  );
}
export default Projects;
