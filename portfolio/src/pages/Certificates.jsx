import Card from "./components/CertiCard.jsx";
import aws from "./components/images/aws.png";
import nptel from "./components/images/nptel.png";
import flipkart from "./components/images/flipkart.png";
import intern from "./components/images/intern.jpg";
import java from "./components/images/java.png";
import medal from "./components/images/medal.png";

function Certificates() {
  const certificates = [
    {
      title: "Introduction to Database System",
      url: nptel,
      desc: "Completed the 12 week course on Introduction to Database System by NPTEL",
    },
    {
      title: "Internship at DRDO",
      url: intern,
      desc: "Completed an Intenship training at ADE DRDO",
    },
    {
      title: "Medal of Merit",
      url: medal,
      desc: "Secured II nd rank in semester exams",
    },
    {
      title: "Flipkart Grid",
      url: flipkart,
      desc: "Participated in Flipkart Grid 5.0",
    },
    {
      title: "Java Full Stack",
      url: java,
      desc: "Obtained a certificated from Infosys Springborad upon the completion of the course",
    },
    {
      title: "AWS",
      url: aws,
      desc: "Successfully completed AWS Academy course",
    },
  ];
  return (
    <>
      <div>
        
      {/* <button className="ml-4 mt-4 border border-black rounded-full p-2 hover:bg-blue-50 bg-white"><Link to='/'><FaArrowLeft size={30} /></Link></button> */}
        <h1 className=" italic text-5xl font-bold text-black text-center text-shadow-md ml-5 mr-5 mb-5">CERTIFICATES</h1>
        <div className="flex flex-wrap justify-evenly mt-20 2xl:flex-col">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              image={cert.url}
              title={cert.title}
              description={cert.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Certificates;
